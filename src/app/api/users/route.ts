import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://run.mocky.io/v3/ccaf9b35-65a8-462a-bd37-b27aef6efc7a', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }

    const users = await res.json();
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to load users' }, { status: 500 });
  }
}
