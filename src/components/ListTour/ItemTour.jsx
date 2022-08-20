import { React } from 'react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';

import styles from './ListTour.scss';
import 'react-datepicker/dist/react-datepicker.css';
import {
    handleOpenDetailsTour,
    handleSelectTour,
} from '../DetailsTour/DetailsTourSlice';

const cx = classNames.bind(styles);

function ItemTour(props) {
    const { tour } = props;
    const dispatch = useDispatch();

    const handleViewDetailsTour = () => {
        dispatch(handleSelectTour(tour));
        dispatch(handleOpenDetailsTour());
    };

    return (
        <li onClick={() => handleViewDetailsTour()}>
            <img src={tour.t_hinhanh[0]} alt="" />
            <div className={cx('infor-tour')}>
                <p className={cx('name-tour')}>{tour.t_ten}</p>
                <p className={cx('time-tour')}>
                    {tour.t_thoigian} ngày {tour.t_thoigian - 1} đêm
                </p>
                <p className={cx('price-tour')}>
                    {tour.t_gia.toLocaleString('vi', {
                        style: 'currency',
                        currency: 'VND',
                    })}
                </p>
            </div>
            <Button
                type="button"
                variant="contained"
                className={cx('button-booking')}
                onClick={() => handleViewDetailsTour()}
            >
                CHI TIẾT
            </Button>
        </li>
    );
}

export default ItemTour;
