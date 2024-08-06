import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

const SECRET_KEY = process.env.JWT_SECRET as string; // Ensure you have your JWT secret in .env

interface DecodedToken {
    email: string;
    CID: number;
}

export async function GET(req: NextRequest) {
    const tokenCookie = req.cookies.get('token');
    const token = tokenCookie ? tokenCookie.value : null;

    if (!token) {
        return NextResponse.json({ loggedIn: false }, { status: 401 });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY) as unknown;
        const user = decoded as DecodedToken;
        console.log(user)
        return NextResponse.json({ loggedIn: true, user }, { status: 200 });
    } catch (error) {
        console.error('Token verification failed:', error); // Log the error for debugging
        return NextResponse.json({ loggedIn: false }, { status: 401 });
    }
}