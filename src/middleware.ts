import { NextRequest, NextResponse } from 'next/server';
import { AppRoutes } from './utils/AppRoutes';

export function middleware(request: NextRequest) {
	return NextResponse.redirect(new URL(AppRoutes.auth, request.url));
}

export const config = {
	matcher: [`/profile/:path*`, `/dashboard/:path*`],
};
