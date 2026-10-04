import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

const VALID_STATUSES = ['pending', 'confirmed', 'completed', 'cancelled'];

export async function PATCH(request, { params }) {
  const body = await request.json();
  const { status, password } = body;

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!VALID_STATUSES.includes(status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
  }

  try {
    const pool = getPool();
    await pool.execute(
      'UPDATE `bookings` SET `status` = ? WHERE `id` = ?',
      [status, params.id]
    );
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
