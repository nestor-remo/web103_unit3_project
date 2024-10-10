import { pool } from '../config/database.js';

export const getLocations = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM locations');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching locations:', error);
        res.status(500).send('Server error');
    }
};
