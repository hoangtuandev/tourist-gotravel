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

export const getTourByIdentify = (data) =>
    axios.post(`${URL}/Tour/getTourByIdentify`, data);

export const filterTopTourRating = () =>
    axios.get(`${URL}/Tour/filterTopTourRating`);

// BOOKING
export const bookingTour = (data) =>
    axios.post(`${URL}/BookingTour/bookingTour`, data);

export const getBookingTourByTouristAccount = (data) =>
    axios.post(`${URL}/BookingTour/getBookingTourByTouristAccount`, data);

export const searchingBookingByTour = (data) =>
    axios.post(`${URL}/BookingTour/searchingBookingByTour`, data);

export const filterBookingTourByStatus = (data) =>
    axios.post(`${URL}/BookingTour/filterBookingTourByStatus`, data);

// DEPARTURE
export const getDepartureById = (data) =>
    axios.post(`${URL}/Departure/getDepartureById`, data);

// CALENDAR GUIDE
export const getCalendarGuideByDeparture = (data) =>
    axios.post(`${URL}/CalendarGuide/getCalendarGuideByDeparture`, data);

// RATING TOUR
export const createRatingTour = (data) => axios.post(`${URL}/RatingTour`, data);

export const updateRatingTour = (data) =>
    axios.post(`${URL}/RatingTour/updateRatingTour`, data);

export const getRatingTourByTourist = (data) =>
    axios.post(`${URL}/RatingTour/getRatingTourByTourist`, data);

export const getAllRatingTourByTour = (data) =>
    axios.post(`${URL}/RatingTour/getAllRatingTourByTour`, data);

// RATING GUIDE
export const createRatingGuide = (data) =>
    axios.post(`${URL}/RatingGuide/createRatingGuide`, data);

export const getRatingGuideByBooking = (data) =>
    axios.post(`${URL}/RatingGuide/getRatingGuideByBooking`, data);

export const updateRatingGuide = (data) =>
    axios.post(`${URL}/RatingGuide/updateRatingGuide`, data);

export const updateStartGuide = (data) =>
    axios.post(`${URL}/QualityGuide/updateStartGuide`, data);

// ADVERTISEMENT
export const getActiveAdvertisement = (data) =>
    axios.post(`${URL}/Advertisement/getActiveAdvertisement`, data);

export const likeAdvertisement = (data) =>
    axios.post(`${URL}/Advertisement/likeAdvertisement`, data);

export const dislikeAdvertisement = (data) =>
    axios.post(`${URL}/Advertisement/dislikeAdvertisement`, data);

export const getLimitActiveAdvertisement = (data) =>
    axios.post(`${URL}/Advertisement/getLimitActiveAdvertisement`, data);

// INTERACT ADVERTISEMENT
export const getInteractAdvertisementByAccount = (data) =>
    axios.post(
        `${URL}/InteractAdvertisement/getInteractAdvertisementByAccount`,
        data
    );

export const getInteractAdvertisementByParams = (data) =>
    axios.post(
        `${URL}/InteractAdvertisement/getInteractAdvertisementByParams`,
        data
    );

export const createInteractAdvertisement = (data) =>
    axios.post(
        `${URL}/InteractAdvertisement/createInteractAdvertisement`,
        data
    );

export const updateLikeInteractAdvertisement = (data) =>
    axios.post(
        `${URL}/InteractAdvertisement/updateLikeInteractAdvertisement`,
        data
    );

export const updateSaveInteractAdvertisement = (data) =>
    axios.post(
        `${URL}/InteractAdvertisement/updateSaveInteractAdvertisement`,
        data
    );

export const deleteInteractAdvertisement = (data) =>
    axios.post(
        `${URL}/InteractAdvertisement/deleteInteractAdvertisement`,
        data
    );

export const uploadFile = (data) => axios.post(`${URL}/uploadFile`, data);

// TOURIST
export const changeAvatarAccountTourist = (data) =>
    axios({
        method: 'post',
        url: `${URL}/TouristAccount/changeAvatarAccountTourist`,
        data: data.formData,
        params: { accountID: data.idAccount },
    });

export const updateProfileTourist = (data) =>
    axios.post(`${URL}/Tourist/updateProfileTourist`, data);

export const getTouristAccountById = (data) =>
    axios.post(`${URL}/TouristAccount/getTouristAccountById`, data);

export const updateProfileTouristAccount = (data) =>
    axios.post(`${URL}/TouristAccount/updateProfileTouristAccount`, data);
