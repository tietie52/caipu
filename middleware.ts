import { NextResponse } from 'next/server';

export function middleware(request) {
  const protectedRoutes = ['/dashboard'];
  if (protectedRoutes.includes(request.nextUrl.pathname)) {
    // 验证用户登录状态
  }
}