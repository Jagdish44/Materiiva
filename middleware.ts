
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const user = request.cookies.get('user')
  const isLoginPage = request.nextUrl.pathname === '/login'
  const isPublicPath = request.nextUrl.pathname === '/login' || 
                      request.nextUrl.pathname.startsWith('/_next') ||
                      request.nextUrl.pathname.startsWith('/static')

  // Always redirect to login if no user, except for public paths
  if (!user && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // If user exists and on login page, redirect to products
  if (user && isLoginPage) {
    return NextResponse.redirect(new URL('/products', request.url))
  }

  // If user exists and on home page, redirect to products
  if (user && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/products', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
