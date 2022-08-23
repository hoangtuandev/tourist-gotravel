import { React, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './GuideBookingPage.scss';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';
import GuideBooking from '../../components/GuideBooking/GuideBooking';
const cx = classNames.bind(styles);

function GuideBookingPage() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <div className={cx('guide-booking-page')}>
                <GuideBooking></GuideBooking>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default GuideBookingPage;
