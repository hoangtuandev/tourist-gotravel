import SignUp from '../components/UserForm/SignUp';
import SignIn from '../components/UserForm/SignIn';
import HomePage from '../pages/HomePage/HomePage.jsx';
import GuideBookingPage from '../pages/GuideBookingPage/GuideBookingPage';
import ToursPage from '../pages/ToursPage/ToursPage';
import ExplorePage from '../pages/ExplorePage/ExplorePage';
import BookingPage from '../pages/BookingPage/BookingPage';

export const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/dang-ky', component: SignUp },
    { path: '/dang-nhap', component: SignIn },
    { path: '/trang-chu', component: HomePage },
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
    { path: '/trang-chu', component: HomePage },
    { path: '/huong-dan', component: GuideBookingPage },
    { path: '/tours', component: ToursPage },
    { path: '/tour', component: ToursPage },
    { path: '/kham-pha', component: ExplorePage },
    // { path: '/dat-tour', component: ToursPage },
    { path: '/dat-tour', component: BookingPage },
    { path: '/:somestring', component: HomePage },
];
