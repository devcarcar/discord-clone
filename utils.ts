import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

export const getDataFromToken = (request: NextRequest) => {
  // Retrieve the token from the cookies
  const token = request.cookies.get('token')?.value || '';

  // Verify and decode the token using the secret key
  const decodedToken: any = jwt.verify(
    token,
    '29c0a444-f890-47bc-80f3-62e02a47549x'
  );

  // Return the user ID from the decoded token
  return decodedToken.userId;
};
