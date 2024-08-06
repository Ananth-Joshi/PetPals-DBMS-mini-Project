import jwt from 'jsonwebtoken';
import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import { dbconfig } from '@/config/dbconfig';

const SECRET_KEY:string|any = process.env.JWT_SECRET // Use an environment variable for production


export async function POST(req: Request) {
    const { email, password } = await req.json();
    try {
        const connection = await mysql.createConnection(dbconfig);
        
        // Query to find the user by email
        const [rows] = await connection.execute<any[]>('SELECT * FROM CENTER_ADMIN WHERE EMAIL = ?', [email]);
        
        if (rows.length === 0) {
            // User not found
            return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const user = rows[0];

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.PASSWORD);

        if (!isPasswordValid) {
            return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Generate a JWT token if the credentials are valid
        const token = jwt.sign({ email: user.EMAIL, CID: user.CID }, SECRET_KEY, { expiresIn: '1h' });

        return new Response(JSON.stringify({ message: 'Logged in successfully' }), {
            status: 200,
            headers: {
                'Set-Cookie': `token=${token}; HttpOnly; Path=/; Max-Age=3600`,
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Database error:', error);
        return new Response(JSON.stringify({ message: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}