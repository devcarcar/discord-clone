import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

export const getDataFromToken = (request: NextRequest) => {
  const token = request.cookies.get('token')?.value || '';

  const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET!);

  return decodedToken.userId;
};

export enum ChannelType {
  CATEGORY,
  TEXT,
  AUDIO,
}
