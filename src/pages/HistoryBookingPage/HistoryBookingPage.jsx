import { React, useEffect, Fragment } from 'react';
import classNames from 'classnames/bind';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import styles from './HistoryBookingPage.scss';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import HistoryBooking from '../../components/HistoryBooking/HistoryBooking';

const cx = classNames.bind(styles);

function HistoryBookingPage() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <div className={cx('history-booking-page')}>
                <Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl">
                        <HistoryBooking></HistoryBooking>
                    </Container>
                </Fragment>
            </div>
        </div>
    );
}

export default HistoryBookingPage;
