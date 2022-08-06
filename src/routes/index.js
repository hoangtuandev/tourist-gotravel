import SignUp from '../components/UserForm/SignUp';
import SignIn from '../components/UserForm/SignIn';
import Home from '../pages/Home';
import Counter from '../components/Counter/Counter';

export const publicRoutes = [
    { path: '/SignUp', component: SignUp },
    { path: '/SignIn', component: SignIn },
    { path: '/Home', component: Home },
    { path: '/Counter', component: Counter },
];

export const privateRoute = [];
