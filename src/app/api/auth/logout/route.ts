// pages/api/auth/logout.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    // Clear the token cookie
    const response = NextResponse.json({ message: 'Logged out successfully' });

    // Set the cookie to expire immediately
    response.cookies.set('token', '', {
        path: '/',
        httpOnly: true,
        maxAge: 0, // Expire the cookie
    });

    return response;
}