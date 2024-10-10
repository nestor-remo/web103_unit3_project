import express from 'express';
import { getEvents } from '../controllers/eventsController.js';

const router = express.Router();

// Define the route to get events
router.get('/events', getEvents);

export default router;
