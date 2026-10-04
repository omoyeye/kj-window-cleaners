import { getPool } from '@/lib/db';
import { sendBookingConfirmation } from '@/lib/email';

const VALID_PROPERTY = ['flat', 'terrace', 'semi-detached', 'detached', 'commercial'];
const VALID_SERVICE  = ['exterior', 'interior', 'full'];
const VALID_FREQ     = ['one-off', 'weekly', 'bi-weekly', 'monthly'];
const VALID_TIME     = ['morning', 'afternoon', 'any'];

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ success: false, error: 'Invalid request body.' }, { status: 400 });
  }

  const {
    full_name = '',
    email = '',
    phone = '',
    address = '',
    postcode = '',
    property_type = '',
    num_bedrooms = 2,
    service_type = '',
    frequency = 'one-off',
    preferred_date = '',
    preferred_time = 'any',
    message = '',
  } = body;

  const errors = [];
  if (!full_name.trim()) errors.push('Full name is required.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Valid email is required.');
  if (!phone.trim()) errors.push('Phone is required.');
  if (!address.trim()) errors.push('Address is required.');
  if (!postcode.trim()) errors.push('Postcode is required.');
  if (!VALID_PROPERTY.includes(property_type)) errors.push('Valid property type is required.');
  if (!VALID_SERVICE.includes(service_type)) errors.push('Valid service type is required.');
  if (!VALID_FREQ.includes(frequency)) errors.push('Valid frequency is required.');
  if (!VALID_TIME.includes(preferred_time)) errors.push('Valid preferred time is required.');
  if (!preferred_date) errors.push('Preferred date is required.');

  if (errors.length) {
    return Response.json({ success: false, error: errors.join(' ') }, { status: 400 });
  }

  try {
    const pool = getPool();
    const [result] = await pool.execute(
      `INSERT INTO bookings
        (full_name, email, phone, address, postcode, property_type, num_bedrooms, service_type, frequency, preferred_date, preferred_time, message)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        full_name.trim(),
        email.trim(),
        phone.trim(),
        address.trim(),
        postcode.trim().toUpperCase(),
        property_type,
        parseInt(num_bedrooms, 10) || 2,
        service_type,
        frequency,
        preferred_date,
        preferred_time,
        message.trim(),
      ]
    );

    sendBookingConfirmation({
      full_name: full_name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      address: address.trim(),
      postcode: postcode.trim().toUpperCase(),
      property_type,
      service_type,
      frequency,
      preferred_date,
      preferred_time,
      message: message.trim(),
    });

    return Response.json({
      success: true,
      booking_id: result.insertId,
      message: 'Booking submitted successfully.',
    });
  } catch (err) {
    console.error('Booking insert error:', err);
    return Response.json(
      { success: false, error: 'Unable to process your booking right now. Please try again later.' },
      { status: 500 }
    );
  }
}
