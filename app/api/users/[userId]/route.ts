import connectDb from '@/lib/mongodb';
import User from '@/schemas/user';
import { NextRequest, NextResponse } from 'next/server';

export enum UserPatchType {
  USERNAME = 'username',
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = await params;
  try {
    await connectDb();
    const {
      type,
      method,
      newValue,
    }: { type: UserPatchType; method: 'set' | 'push'; newValue: any } =
      await request.json();
    switch (method) {
      case 'set':
        await User.findOneAndUpdate(
          { userId: userId },
          {
            $set: {
              [type]: newValue,
            },
          }
        );
        break;
      case 'push':
        break;
      default:
        return NextResponse.json(
          { message: 'MongoDB Method Not Allowed' },
          { status: 405 }
        );
    }
    return NextResponse.json(
      {
        message: 'Successful',
      },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: e,
      },
      {
        status: 500,
      }
    );
  }
}
