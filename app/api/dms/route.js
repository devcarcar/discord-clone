import connectDb from '@/lib/mongodb';
import Dm from '../../../schemas/dm';
import User from '../../../schemas/user';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { user1, user2 } = await request.json();
  try {
    await connectDb();
    const newDm = new Dm({ messages: [] });
    await newDm.save();
    await User.findOneAndUpdate(
      { userId: user1 },
      { $push: { dms: newDm.dmId } }
    );
    await User.findOneAndUpdate(
      { userId: user2 },
      { $push: { dms: newDm.dmId } }
    );
    return NextResponse.json(newDm, { status: 201 });
  } catch (e) {
    console.log(e);
  }
}

export async function GET() {
  await connectDb();
  const dms = await Dm.find({});
  const dmData = dms.map((dm) => dm.toObject());
  return NextResponse.json(dmData, { status: 201 });
}
