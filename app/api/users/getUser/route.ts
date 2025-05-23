import User from '@/schemas/user';
import connectDb from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/utils';

export async function GET(request: NextRequest) {
  try {
    await connectDb();
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ userId: userId }).select('-password');
    return NextResponse.json(
      {
        message: 'User found',
        data: user,
      },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: 'Error',
      },
      {
        status: 401,
      }
    );
  }
}
