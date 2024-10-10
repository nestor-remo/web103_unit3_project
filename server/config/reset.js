import { pool } from './database.js';

const createTables = async () => {
    try {
        await pool.query(`

            DROP TABLE IF EXISTS events;

            CREATE TABLE IF NOT EXISTS events (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description TEXT
            );

            DROP TABLE IF EXISTS locations;

            CREATE TABLE IF NOT EXISTS locations (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
            );
        `);
        console.log('Tables created successfully.');
    } catch (error) {
        console.error('Error creating tables:', error);
    }
};

createTables().finally(() => pool.end());
