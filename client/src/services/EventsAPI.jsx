import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getAllEvents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/events`);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

export const getEventsByLocationId = async (locationId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/locations/${locationId}/events`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching events for location ${locationId}:`, error);
    throw error;
  }
};


export const getEventById = async (eventId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/events/${eventId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching event with id ${eventId}:`, error);
    throw error;
  }
};
