import { React, useState, useEffect, Fragment } from 'react';
import classNames from 'classnames/bind';
import Rating from '@mui/material/Rating';
import styles from './DetailsTour.scss';
import * as api from '../../api';

const cx = classNames.bind(styles);
const baseURL = 'http://localhost:5000/static/';

function RatingTour(props) {
    const { rating } = props;

    const [tourist, setTourist] = useState(null);
    const [avatar, setAvatar] = useState(
        'https://res.cloudinary.com/phtuandev/image/upload/v1666851369/GoTravel/360_F_340124934_ocif6t.jpg'
    );

    useEffect(() => {
        api.getTouristAccountById({
            idAccount: rating.dgt_khachdulich._id,
        }).then((res) => {
            setTourist(res.data[0]);
            if (res.data[0].tkkdl_anhdaidien !== '') {
                setAvatar(`${baseURL}${res.data[0].tkkdl_anhdaidien}`);
            }
        });
    }, [rating]);

    return (
        <Fragment>
            {tourist && (
                <span className={cx('rating-item')}>
                    <span>
                        <img
                            className={cx('tourist-avatar')}
                            src={avatar}
                            alt=""
                        />
                    </span>
                    <span className={cx('detail-rating')}>
                        <span className={cx('tourist-name')}>
                            {tourist.tkkdl_khachdulich.kdl_hoten}
                        </span>
                        <Rating
                            className={cx('rating-star')}
                            name="read-only"
                            value={rating.dgt_saodanhgia}
                            readOnly
                        />
                        <span className={cx('comment')}>
                            {rating.dgt_nhanxet}
                        </span>
                    </span>
                </span>
            )}
        </Fragment>
    );
}

export default RatingTour;
