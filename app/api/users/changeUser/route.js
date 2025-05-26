import User from '@/schemas/user';
import connectDb from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function PATCH(request) {
  try {
    await connectDb();
    const { userId, new_un } = await request.json();
    await User.findOneAndUpdate(
      { userId: userId },
      {
        $set: {
          username: new_un,
        },
      }
    );
    return NextResponse.json(
      {
        message: 'Successful',
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
