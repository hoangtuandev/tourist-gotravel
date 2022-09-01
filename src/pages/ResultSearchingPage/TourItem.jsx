import { React, useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { resultSearchingTour } from '../../GlobalSlice';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import {
    handleOpenDetailsTour,
    handleSelectTour,
    tourSelected,
} from '../../components/DetailsTour/DetailsTourSlice';
import DetailsTour from '../../components/DetailsTour/DetailsTour';
import styles from './ResultSearchingPage.scss';
const cx = classNames.bind(styles);

function TourItem(props) {
    const { tour } = props;
    const dispatch = useDispatch();
    const tourSelect = useSelector(tourSelected);

    const handleViewDetailsTour = () => {
        console.log('view');
        dispatch(handleSelectTour(tour));
        dispatch(handleOpenDetailsTour());
    };

    return (
        <li className={cx('item-tour')} onClick={() => handleViewDetailsTour()}>
            <img src={tour.t_hinhanh[0]} alt="" />
            <div className={cx('infor-tour')}>
                <p className={cx('name-tour')}>{tour.t_ten}</p>
                <p className={cx('time-tour')}>
                    {' '}
                    {tour.t_thoigian} ngày {tour.t_thoigian - 1} đêm
                </p>
                <p className={cx('price-tour')}>
                    {' '}
                    {tour.t_gia.toLocaleString('vi', {
                        style: 'currency',
                        currency: 'VND',
                    })}
                </p>
            </div>
            <Button
                type="button"
                variant="contained"
                className={cx('button-view')}
            >
                CHI TIẾT
            </Button>
        </li>
    );
}

export default TourItem;
