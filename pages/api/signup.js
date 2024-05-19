import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

require('dotenv').config();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, phone, address, dob, course, username, password } = req.body;

        if (!name || !email || !phone || !address || !dob || !course || !username || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 10);

            const connection = await mysql.createConnection({
                host: process.env.DB_HOST,       
                user: process.env.DB_USER ,            
                password: process.env.DB_PASSWORD,            
                database: process.env.DB_NAME, 
            });

            const [result] = await connection.execute(
                'INSERT INTO users (name, email, phone, address, dob, course, username, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                [name, email, phone, address, dob, course, username, hashedPassword]
            );

            await connection.end();

            res.status(200).json({ message: 'Signup successful' });
        } catch (error) {
            console.error('An error occurred while signing up:', error);
            res.status(500).json({ message: 'Error signing up' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
