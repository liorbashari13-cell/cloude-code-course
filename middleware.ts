import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Add test header to verify middleware runs
  const response = NextResponse.next();
  response.headers.set("x-middleware-ran", "true");

  // Redirect root to /he
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/he", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
