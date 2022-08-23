import { React, Fragment, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import styles from './BookingPage.scss';
import 'react-datepicker/dist/react-datepicker.css';

import Header from '../../components/Header/Header';
import BookingTour from '../../components/BookingTour/BookingTour';
import * as api from '../../api';

const cx = classNames.bind(styles);

function BookingPage() {
    const location = useLocation();
    const searchParams = location;
    let params = new URLSearchParams(searchParams.search);
    const tourId = params.get('tour');
    const departureId = params.get('departure');
    // console.log(params.get('tour')); // 'node'
    // console.log(params.get('departure')); // '2'
    const [tour, setTour] = useState('');
    const [departure, setDeparture] = useState('');

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    useEffect(() => {
        api.getTourById({ t_ma: tourId }).then((res) => {
            setTour(res.data);
        });
    }, [tourId]);

    useEffect(() => {
        api.getDepartureById({ _id: departureId }).then((res) => {
            setDeparture(res.data);
        });
    }, [departureId]);

    return (
        <div>
            <Header></Header>
            <div>
                <Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl">
                        <div className={cx('booking-page')}>
                            <BookingTour
                                tour={tour}
                                departure={departure}
                            ></BookingTour>
                        </div>
                    </Container>
                </Fragment>
            </div>
        </div>
    );
}

export default BookingPage;
