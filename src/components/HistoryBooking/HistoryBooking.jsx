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
            {bookingList.length !== 0 && (
                <ul className={cx('list-bookings')}>
                    {bookingList.map((item, index) => (
                        <BookingItem key={index} item={item}></BookingItem>
                    ))}
                </ul>
            )}
            {bookingList.length === 0 && (
                <div className={cx('empty-list')}>
                    <p>Bạn vẫn chưa đặt tour nào !</p>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660285963/GoTravel/undraw_Explore_re_8l4v_lvunn9.png"
                        alt="empty list"
                    />
                </div>
            )}
        </div>
    );
}

export default HistoryBooking;
