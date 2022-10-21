import { React, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import * as api from '../../api';
import styles from './PreferDestination.scss';
import PreferTourItem from './PreferTourItem';
import DetailsTour from '../DetailsTour/DetailsTour';
import { isOpenDetailsTour } from '../DetailsTour/DetailsTourSlice';

const cx = classNames.bind(styles);

function PreferDestination() {
    const openDetail = useSelector(isOpenDetailsTour);
    const [tourPrefer, setTourPrefer] = useState([]);

    useEffect(() => {
        api.filterTopTourRating().then((res) => {
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
            {openDetail && <DetailsTour></DetailsTour>}
        </div>
    );
}

export default PreferDestination;
