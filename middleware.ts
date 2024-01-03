import { NextResponse, type NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token =
    req.cookies.get('next-auth.session-token')?.value ||
    req.cookies.get('__Secure-next-auth.session-token')?.value;

  if (req.nextUrl.pathname.startsWith('/login') && !token) {
    return;
  }

  if (req.nextUrl.pathname.startsWith('/register') && !token) {
    return;
  }

  if (req.nextUrl.pathname.startsWith('/login') && token) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  if (req.nextUrl.pathname.startsWith('/register') && token) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  if (req.nextUrl.pathname.startsWith('/') && token) {
    return NextResponse.rewrite(new URL('/dashboard', req.url));
  }

  if (req.url.includes('/') && !token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/', '/login', '/register', '/dashboard', '/dashboard/:path*'],
};
