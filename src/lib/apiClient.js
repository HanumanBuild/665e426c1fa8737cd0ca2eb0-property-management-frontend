
// src/lib/apiClient.js

// This file sets up a basic API client using Axios. Although the app will use hardcoded data,
// this file will be useful for future enhancements where API calls might be needed.
// It exports functions for making GET, POST, PUT, and DELETE requests.

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', // Change this to your API base URL if needed
  headers: {
    'Content-Type': 'application/json'
  }
});

export const get = async (url, params = {}) => {
  try {
    const response = await apiClient.get(url, { params });
    return response.data;
  } catch (error) {
    console.error('GET request failed:', error);
    throw error;
  }
};

export const post = async (url, data) => {
  try {
    const response = await apiClient.post(url, data);
    return response.data;
  } catch (error) {
    console.error('POST request failed:', error);
    throw error;
  }
};

export const put = async (url, data) => {
  try {
    const response = await apiClient.put(url, data);
    return response.data;
  } catch (error) {
    console.error('PUT request failed:', error);
    throw error;
  }
};

export const del = async (url) => {
  try {
    const response = await apiClient.delete(url);
    return response.data;
  } catch (error) {
    console.error('DELETE request failed:', error);
    throw error;
  }
};
