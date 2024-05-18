import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        try {
            const connection = await mysql.createConnection({
                host: 'localhost',       
                user: 'root',            
                password: '',            
                database: 'college_website', 
            });

            const [rows] = await connection.execute('SELECT * FROM users WHERE username = ?', [username]);

            if (rows.length > 0) {
                const user = rows[0];
                const passwordMatch = await bcrypt.compare(password, user.password);

                if (passwordMatch) {
                    res.status(200).json({ message: 'Login successful', user });
                } else {
                    res.status(401).json({ message: 'Invalid password' });
                }
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            console.error('An error occurred while logging in:', error);
            res.status(500).json({ message: 'Error logging in' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
