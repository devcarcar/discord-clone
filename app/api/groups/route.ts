import connectDb from '@/lib/mongodb';
import Group from '@/schemas/group';
import User from '@/schemas/user';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    await connectDb();
    const { name, user, icon } = await request.json();
    const newGrp = new Group({
      name: name,
      members: [user.userId],
      icon: icon,
    });
    await newGrp.save();
    await User.findOneAndUpdate(
      { userId: user.userId },
      {
        $push: {
          groups: newGrp.groupId,
        },
      }
    );
    return NextResponse.json(newGrp, { status: 201 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: 'Error occured' }, { status: 401 });
  }
}

export async function GET() {
  await connectDb();
  const groups = await Group.find({});
  const groupData = groups.map((group) => group.toObject());
  return NextResponse.json(groupData, { status: 201 });
}
