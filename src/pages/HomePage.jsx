import classNames from 'classnames/bind';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

import styles from './HomePage.scss';
const cx = classNames.bind(styles);

function HomePage() {
    return (
        <div className={cx('home-page')}>
            <Header></Header>
            <Sidebar></Sidebar>
            <div className={cx('home')}></div>
        </div>
    );
}

export default HomePage;
