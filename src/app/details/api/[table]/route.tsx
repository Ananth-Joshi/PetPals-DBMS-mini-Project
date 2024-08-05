// app/api/fetchData/[tableName]/route.ts

import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
    host: 'localhost', // Your MySQL host
    user: 'root', // Your MySQL username
    password: '', // Your MySQL password
    database: 'petmanagement', // Your MySQL database name
    dateStrings:true,
    port:3307
};

export async function GET(request: Request, { params }: { params: { table: string } }) {
    const { table } = params; // Get the table name from the URL parameters
    console.log(table)
    if (!table) {
        return NextResponse.json({ error: 'Table name is required' }, { status: 400 });
    }
    try {
        // Create a connection to the database
        const connection = await mysql.createConnection(dbConfig);

        // Fetch data from the specified table
        const [rows] = await connection.execute(`SELECT * FROM ${table}`);

        // Close the connection
        await connection.end();

        // Return the fetched data
        return NextResponse.json(rows);
    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json({ error: 'Error fetching data from the database' }, { status: 500 });
    }
}
