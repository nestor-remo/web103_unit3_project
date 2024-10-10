import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';


export const getAllLocations = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/locations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching locations:', error);
    throw error;
  }
};

export const getLocationById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/locations/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching location with id ${id}:`, error);
    throw error;
  }
};
