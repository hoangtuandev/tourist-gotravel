import { React, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Cookies from 'universal-cookie';
import styles from './HistoryBooking.scss';
import BookingItem from './BookingItem';
import * as api from '../../api';

const cx = classNames.bind(styles);

const cookies = new Cookies();

function HistoryBooking() {
    const user = cookies.get('user');
    const [bookingList, setBookingList] = useState([]);

    useEffect(() => {
        api.getBookingTourByTouristAccount({ _id: user.others._id }).then(
            (res) => {
                setBookingList(res.data);
            }
        );
    }, [user.others._id]);

    return (
        <div className={cx('history-booking')}>
            <ul className={cx('list-bookings')}>
                {bookingList.map((item, index) => (
                    <BookingItem key={index} item={item}></BookingItem>
                ))}
            </ul>
        </div>
    );
}

export default HistoryBooking;
