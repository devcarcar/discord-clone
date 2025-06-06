import Group from '@/schemas/group';
import connectDb from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { group: string } }
) {
  try {
    const { group } = await params;
    await connectDb();
    const grp = await Group.findOne({ groupId: group });
    return NextResponse.json(
      {
        message: 'Group found',
        data: grp,
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
