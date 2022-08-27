import axios from 'axios';

const URL = 'http://localhost:5000';
// const URL = 'https://server-go-travel.herokuapp.com';

export const createTourist = (data) => axios.post(`${URL}/Tourist`, data);

export const createAccountTourist = (data) =>
    axios.post(`${URL}/TouristAccount`, data);

export const getTouristAccountByUsername = (data) =>
    axios.post(`${URL}/TouristAccount/TouristAccountByUserName`, data);

export const signInTourist = (data) =>
    axios.post(`${URL}/TouristAccount/signInTourist`, data);

// TOURISM
export const getAllTypeTourism = () => axios.get(`${URL}/TypeTourism`);

// TOUR
export const getAllActiveTour = () => axios.get(`${URL}/Tour/actived`);

export const getTourById = (data) => axios.post(`${URL}/Tour/getById`, data);

export const getPreferTour = () => axios.get(`${URL}/Tour/getPreferTour`);

// DEPARTURE
export const getDepartureById = (data) =>
    axios.post(`${URL}/Departure/getDepartureById`, data);
