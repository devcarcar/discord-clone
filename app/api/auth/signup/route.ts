import connectDb from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import User from '../../../../schemas/user';

export async function POST(request: NextRequest) {
  await connectDb();
  const { email, password } = await request.json();
  const found = await User.findOne({ email: email, password: password });
  if (found) {
    const token = await jwt.sign(found.toObject(), process.env.JWT_SECRET!, {
      expiresIn: '1d',
    });
    const response = NextResponse.json(
      { message: 'User found' },
      { status: 200 }
    );
    response.cookies.set('token', token, {
      httpOnly: true,
    });
    return response;
  } else {
    return NextResponse.json({ error: 'Not found' }, { status: 401 });
  }
}
