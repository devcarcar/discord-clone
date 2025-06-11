import Group from '@/schemas/group';
import connectDb from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  request: Request,
  { params }: { params: { group: string; channel: string } }
) {
  const { group, channel } = await params;
  try {
    const { msgObj } = await request.json();
    await connectDb();
    const grp = await Group.findOne({ groupId: group });
    const newArr = grp.channels.map((c: any) => {
      if (c.channelId === channel) {
        return {
          ...c,
          messages: [...(c.messages || []), msgObj],
        };
      }
      return c;
    });
    await Group.findOneAndUpdate(
      { groupId: group },
      {
        $set: {
          channels: newArr,
        },
      }
    );
    return NextResponse.json(
      {
        message: 'Message sent',
        data: newArr,
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
