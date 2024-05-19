import mysql from 'mysql2/promise';

require('dotenv').config();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const connection = await mysql.createConnection({
                host: process.env.DB_HOST ,
                user: process.env.DB_USER ,
                password: process.env.DB_PASSWORD ,
                database: process.env.DB_NAME ,
            });

            const [students] = await connection.execute('SELECT * FROM users');
            
            await connection.end();

            res.status(200).json(students);
        } catch (error) {
            console.error('An error occurred while fetching students:', error);
            res.status(500).json({ message: 'Error fetching students' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
