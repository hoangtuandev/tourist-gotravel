import { React, useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

// import { AiFillStar } from 'react-icons/ai';
import * as api from '../../api';
import styles from './PreferDestination.scss';
import PreferTourItem from './PreferTourItem';
// import { useEffect } from 'react';
// import { useState } from 'react';
const cx = classNames.bind(styles);

function PreferDestination() {
    const [tourPrefer, setTourPrefer] = useState([]);
    useEffect(() => {
        api.getPreferTour().then((res) => {
            setTourPrefer(res.data);
        });
    }, []);
    return (
        <div className={cx('prefer-destination')}>
            <div className={cx('title')}>
                <span>TOUR ĐƯỢC YÊU THÍCH</span>
            </div>
            <ul className={cx('tour-list')}>
                {tourPrefer.map((tour, index) => (
                    <PreferTourItem key={index} tour={tour}></PreferTourItem>
                ))}
            </ul>

            <div className={cx('buttons-group')}>
                <Button variant="outlined">Xem thêm</Button>
            </div>
        </div>
    );
}

export default PreferDestination;
