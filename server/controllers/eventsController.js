import { pool } from '../config/database.js';

export const getEvents = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM events');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).send('Server error');
    }
};
