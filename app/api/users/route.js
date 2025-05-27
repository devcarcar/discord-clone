import connectDb from '@/lib/mongodb';
import User from '../../../schemas/user';
import Group from '../../../schemas/group';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await connectDb();
    const { email, password } = await request.json();
    const newUser = new User({ email: email, password: password });
    await newUser.save();
    const newGrp = new Group({ email: email, password: password });
    await newGrp.save();
    return NextResponse.json(newUser, { status: 201 });
  } catch (e) {
    console.log(e);
  }
}

export async function GET() {
  await connectDb();
  const users = await User.find({});
  const userData = users.map((user) => user.toObject());
  return NextResponse.json(userData, { status: 201 });
}
