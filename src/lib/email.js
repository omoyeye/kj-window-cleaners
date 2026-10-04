import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendBookingConfirmation(booking) {
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
      <h2 style="color:#0f172a;">New Booking Received</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px;border-bottom:1px solid #e5e7eb;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #e5e7eb;">${booking.full_name}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #e5e7eb;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #e5e7eb;">${booking.email}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #e5e7eb;font-weight:bold;">Phone</td><td style="padding:8px;border-bottom:1px solid #e5e7eb;">${booking.phone}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #e5e7eb;font-weight:bold;">Address</td><td style="padding:8px;border-bottom:1px solid #e5e7eb;">${booking.address}, ${booking.postcode}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #e5e7eb;font-weight:bold;">Property</td><td style="padding:8px;border-bottom:1px solid #e5e7eb;">${booking.property_type}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #e5e7eb;font-weight:bold;">Service</td><td style="padding:8px;border-bottom:1px solid #e5e7eb;">${booking.service_type}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #e5e7eb;font-weight:bold;">Frequency</td><td style="padding:8px;border-bottom:1px solid #e5e7eb;">${booking.frequency}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #e5e7eb;font-weight:bold;">Preferred Date</td><td style="padding:8px;border-bottom:1px solid #e5e7eb;">${booking.preferred_date}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #e5e7eb;font-weight:bold;">Preferred Time</td><td style="padding:8px;border-bottom:1px solid #e5e7eb;">${booking.preferred_time}</td></tr>
        ${booking.message ? `<tr><td style="padding:8px;border-bottom:1px solid #e5e7eb;font-weight:bold;">Message</td><td style="padding:8px;border-bottom:1px solid #e5e7eb;">${booking.message}</td></tr>` : ''}
      </table>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `New Booking: ${booking.full_name} - ${booking.service_type}`,
      html,
    });
  } catch (err) {
    console.error('Email send failed:', err.message);
  }
}
