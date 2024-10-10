import express from 'express';
import { getLocations } from '../controllers/locationsController.js';

const router = express.Router();

// Define the route to get locations
router.get('/locations', getLocations);

export default router;

