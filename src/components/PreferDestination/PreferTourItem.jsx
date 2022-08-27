import { React, useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

// import { AiFillStar } from 'react-icons/ai';
import * as api from '../../api';
import styles from './PreferDestination.scss';
// import { useEffect } from 'react';
// import { useState } from 'react';
const cx = classNames.bind(styles);

function PreferTourItem(props) {
    const { tour } = props;
    const [tourPrefer, setTourPrefer] = useState([]);
    useEffect(() => {
        api.getPreferTour().then((res) => {
            setTourPrefer(res.data);
        });
    }, []);
    return (
        <li className={cx('tour-item')}>
            <div className={cx('image-tour')}>
                <Rating
                    className={cx('rating')}
                    name="size-large"
                    defaultValue={5}
                    precision={0.5}
                    readOnly
                />
                <img src={tour.t_hinhanh[0]} alt="" />
            </div>
            <div className={cx('infor-tour')}>
                <p className="name-tour">{tour.t_ten}</p>
                <p className={cx('time-tour')}>
                    {tour.t_thoigian} ngày {tour.t_thoigian - 1} đêm
                </p>
                <p className="price-tour">
                    {tour.t_gia.toLocaleString('vi', {
                        style: 'currency',
                        currency: 'VND',
                    })}
                </p>
            </div>
            <button type="button" className={cx('btn-grad')}>
                ĐẶT TOUR
            </button>
        </li>
    );
}

export default PreferTourItem;
