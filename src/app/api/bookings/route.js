import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const password = searchParams.get('password');

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const pool = getPool();
    const [rows] = await pool.execute(
      'SELECT * FROM `bookings` ORDER BY `created_at` DESC'
    );
    return NextResponse.json({ bookings: rows });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
