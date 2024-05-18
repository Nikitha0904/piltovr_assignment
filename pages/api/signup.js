import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, phone, address, dob, course, username, password } = req.body;

        try {
            const hashedPassword = await bcrypt.hash(password, 10);

            const connection = await mysql.createConnection({
                host: 'localhost',       
                user: 'root',            
                password: '',            
                database: 'college_website', 
            });

            const [result] = await connection.execute(
                'INSERT INTO users (name, email, phone, address, dob, course, username, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                [name, email, phone, address, dob, course, username, hashedPassword ]
            );

            res.status(200).json({ message: 'Signup successful' });
        } catch (error) {
            console.error('An error occurred while signing up:', error);
            res.status(500).json({ message: 'Error signing up' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
