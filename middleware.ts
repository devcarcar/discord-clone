import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === '/auth' || path === '/auth-sign-up';

  const token = request.cookies.get('token')?.value || '';

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/home', request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/auth', request.nextUrl));
  }
}

export const config = {
  matcher: [
    '/',
    '/auth/sign-up',
    '/auth/login',
    '/home/dms',
    '/home',
    '/home/groups',
  ],
};
