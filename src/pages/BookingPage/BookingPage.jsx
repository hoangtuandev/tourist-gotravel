import { React, Fragment } from 'react';
import classNames from 'classnames/bind';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import styles from './BookingPage.scss';
import 'react-datepicker/dist/react-datepicker.css';

import Header from '../../components/Header/Header';
import BookingTour from '../../components/BookingTour/BookingTour';

const cx = classNames.bind(styles);

function BookingPage() {
    return (
        <div>
            <Header></Header>
            <div>
                <Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl">
                        <div className={cx('booking-page')}>
                            <BookingTour></BookingTour>
                        </div>
                    </Container>
                </Fragment>
            </div>
        </div>
    );
}

export default BookingPage;
