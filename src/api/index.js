import axios from 'axios';

const URL = 'http://localhost:5000';
// const URL = 'https://go-travel-server.herokuapp.com';

export const createTourist = (data) => axios.post(`${URL}/Tourist`, data);

export const createAccountTourist = (data) =>
    axios.post(`${URL}/TouristAccount`, data);

export const getTouristAccountByUsername = (data) =>
    axios.post(`${URL}/TouristAccount/TouristAccountByUserName`, data);

export const signInTourist = (data) =>
    axios.post(`${URL}/TouristAccount/signInTourist`, data);

// TOURISM
export const getAllTypeTourism = () => axios.get(`${URL}/TypeTourism`);

export const getTypeTourismById = (data) =>
    axios.post(`${URL}/TypeTourism/getById`, data);

// TOUR
export const getAllActiveTour = () => axios.get(`${URL}/Tour/actived`);

export const getTourById = (data) => axios.post(`${URL}/Tour/getById`, data);

export const getTourByTypeTourism = (data) =>
    axios.post(`${URL}/Tour/getTourByTypeTourism`, data);

export const getPreferTour = () => axios.get(`${URL}/Tour/getPreferTour`);

export const getTourByParamsFilter = (data) =>
    axios.post(`${URL}/Tour/getTourByParamsFilter`, data);

export const searchingTour = (data) =>
    axios.post(`${URL}/Tour/searchingTour`, data);

export const filterTourByPrice = (data) =>
    axios.post(`${URL}/Tour/filterTourByPrice`, data);

export const filterTourByDeparture = (data) =>
    axios.post(`${URL}/Tour/filterTourByDeparture`, data);

export const filterTourByTime = (data) =>
    axios.post(`${URL}/Tour/filterTourByTime`, data);

export const filterTourByParams = (data) =>
    axios.post(`${URL}/Tour/filterTourByParams`, data);

// BOOKING
export const bookingTour = (data) =>
    axios.post(`${URL}/BookingTour/bookingTour`, data);

export const getBookingTourByTouristAccount = (data) =>
    axios.post(`${URL}/BookingTour/getBookingTourByTouristAccount`, data);

// DEPARTURE
export const getDepartureById = (data) =>
    axios.post(`${URL}/Departure/getDepartureById`, data);

// RATING TOUR
export const createRatingTour = (data) => axios.post(`${URL}/RatingTour`, data);

export const updateRatingTour = (data) =>
    axios.post(`${URL}/RatingTour/updateRatingTour`, data);

export const getRatingTourByTourist = (data) =>
    axios.post(`${URL}/RatingTour/getRatingTourByTourist`, data);

// ADVERTISEMENT

export const getActiveAdvertisement = (data) =>
    axios.post(`${URL}/Advertisement/getActiveAdvertisement`, data);
