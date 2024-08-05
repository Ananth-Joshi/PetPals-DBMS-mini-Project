// app/api/auth/route.js
import jwt from 'jsonwebtoken';
const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key'; // Use an environment variable for production

export async function POST(req:Request) {
  const { email, password } = await req.json();

  // Replace this with your user validation logic
  if (email === 'user@example.com' && password === 'password') {
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
    
    return new Response(JSON.stringify({ message: 'Logged in successfully' }), {
      status: 200,
      headers: {
        'Set-Cookie': `token=${token}; HttpOnly; Path=/; Max-Age=3600`,
        'Content-Type': 'application/json',
      },
    });
  } else {
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
      status: 401,
    });
  }
}