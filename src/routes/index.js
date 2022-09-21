import SignUp from '../components/UserForm/SignUp';
import SignIn from '../components/UserForm/SignIn';
import HomePage from '../pages/HomePage/HomePage.jsx';
import GuideBookingPage from '../pages/GuideBookingPage/GuideBookingPage';
import ToursPage from '../pages/ToursPage/ToursPage';
import ExplorePage from '../pages/ExplorePage/ExplorePage';
import BookingPage from '../pages/BookingPage/BookingPage';
import ResultSearchingPage from '../pages/ResultSearchingPage/ResultSearchingPage';
import HistoryBookingPage from '../pages/HistoryBookingPage/HistoryBookingPage';
import SavedAdvertisementPage from '../pages/SavedAdvertisementPage/SavedAdvertisementPage';

export const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/dang-ky', component: SignUp },
    { path: '/dang-nhap', component: SignIn },
    { path: '/tim-kiem', component: ResultSearchingPage },
    { path: '/huong-dan', component: GuideBookingPage },
    { path: '/tours', component: ToursPage },
    { path: '/tour', component: ToursPage },
    { path: '/kham-pha', component: ExplorePage },
    // { path: '/dat-tour', component: ToursPage },
    // { path: '/dat-tour', component: BookingPage },
    { path: '/:somestring', component: HomePage },
];

export const privateRoute = [
    { path: '/', component: HomePage },
    { path: '/dang-ky', component: SignUp },
    { path: '/dang-nhap', component: SignIn },
    { path: '/tim-kiem', component: ResultSearchingPage },
    { path: '/huong-dan', component: GuideBookingPage },
    { path: '/tours', component: ToursPage },
    { path: '/tour', component: ToursPage },
    { path: '/kham-pha', component: ExplorePage },
    // { path: '/dat-tour', component: ToursPage },
    { path: '/dat-tour', component: BookingPage },
    { path: '/lich-su-dat-tour', component: HistoryBookingPage },
    { path: '/dia-diem-da-luu', component: SavedAdvertisementPage },
    { path: '/:somestring', component: HomePage },
];
