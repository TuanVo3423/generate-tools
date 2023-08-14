import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  // const { pathname } = req.nextUrl;
  // console.log(pathname);
  // if (pathname == '/') {
  //   return NextResponse.redirect(new URL('/generate-document', req.url));
  // }

  return NextResponse.next();
}
