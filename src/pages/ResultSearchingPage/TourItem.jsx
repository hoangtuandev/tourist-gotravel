import { React } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import Button from '@mui/material/Button';

import {
    handleOpenDetailsTour,
    handleSelectTour,
} from '../../components/DetailsTour/DetailsTourSlice';
import styles from './ResultSearchingPage.scss';
const cx = classNames.bind(styles);

function TourItem(props) {
    const { tour } = props;
    const dispatch = useDispatch();

    const handleViewDetailsTour = () => {
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
                    {tour.t_gia >= 0 &&
                        tour.t_gia.toLocaleString('vi', {
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
