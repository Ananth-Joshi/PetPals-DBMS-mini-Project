// app/api/fetchData/[tableName]/route.ts

import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import { revalidatePath } from 'next/cache';
import { dbconfig } from '@/config/dbconfig';

export async function GET(request: Request, { params }: { params: { table: string } }) {
    const { table } = params;
    console.log(table);
    if (!table) {
        return NextResponse.json({ error: 'Table name is required' }, { status: 400 });
    }
    try {
        const connection = await mysql.createConnection(dbconfig);
        const [rows] = await connection.execute(`SELECT * FROM ${table}`);
        await connection.end();
        return NextResponse.json(rows);
    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json({ error: 'Error fetching data from the database' }, { status: 500 });
    }
}

export async function POST(request: Request, { params }: { params: { table: string } }) {
    const { table } = params;
    if (!table) {
        return NextResponse.json({ error: 'Table name is required' }, { status: 400 });
    }

    try {
        const connection = await mysql.createConnection(dbconfig);
        const body = await request.json();
        
        // Constructing the SQL query dynamically
        const columns = Object.keys(body).join(', ');
        const placeholders = Object.keys(body).map(() => '?').join(', ');
        const values = Object.values(body);
        const query = `INSERT INTO ${table} (${columns}) VALUES (${placeholders})`;
        await connection.execute(query, values);
        await connection.end();
        return NextResponse.json({ message: 'Data inserted successfully' }, { status: 201 });
    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json({ error: 'Error inserting data into the database' }, { status: 500 });
    }
}