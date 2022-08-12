import SignUp from '../components/UserForm/SignUp';
import SignIn from '../components/UserForm/SignIn';
import HomePage from '../pages/HomePage';
import Counter from '../components/Counter/Counter';

export const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/SignUp', component: SignUp },
    { path: '/SignIn', component: SignIn },
    { path: '/Home', component: HomePage },
    { path: '/Counter', component: Counter },
    { path: '/:somestring', component: HomePage },
];

export const privateRoute = [];
