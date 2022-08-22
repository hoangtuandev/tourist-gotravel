import axios from 'axios';

const URL = 'http://localhost:5000';

export const createTourist = (data) => axios.post(`${URL}/Tourist`, data);

export const createAccountTourist = (data) =>
    axios.post(`${URL}/TouristAccount`, data);

export const getTouristAccountByUsername = (data) =>
    axios.post(`${URL}/TouristAccount/TouristAccountByUserName`, data);

// TOUR
export const getAllActiveTour = () => axios.get(`${URL}/Tour/actived`);

export const getTourById = (data) => axios.post(`${URL}/Tour/getById`, data);
