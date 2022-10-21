import { React, useState, useEffect, Fragment } from 'react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Rating from '@mui/material/Rating';
import * as api from '../../api';
import styles from './PreferDestination.scss';
import {
    handleOpenDetailsTour,
    handleSelectTour,
} from '../DetailsTour/DetailsTourSlice';

const cx = classNames.bind(styles);

function PreferTourItem(props) {
    const { tour } = props;
    const dispatch = useDispatch();

    const [tourDetail, setTourDetail] = useState(null);

    useEffect(() => {
        api.getTourByIdentify({ idTour: tour._id }).then((res) => {
            setTourDetail(res.data[0]);
        });
    }, [tour]);

    const handleViewDetailsTour = () => {
        dispatch(handleSelectTour(tourDetail));
        dispatch(handleOpenDetailsTour());
    };

    return (
        <Fragment>
            {tourDetail && (
                <li
                    className={cx('tour-item')}
                    onClick={() => handleViewDetailsTour()}
                >
                    <div className={cx('image-tour')}>
                        <div className={cx('rating')}>
                            <div className={cx('ratingDetail')}>
                                <span>{tour.count}</span>
                                <DriveFileRenameOutlineIcon
                                    className={cx('icon')}
                                />
                            </div>
                            <Rating
                                className={cx('ratingStar')}
                                name="size-large"
                                defaultValue={
                                    Math.round(tour.averageStar * 10) / 10 || 0
                                }
                                precision={0.5}
                                readOnly
                            />
                        </div>
                        <img src={tourDetail.t_hinhanh[0]} alt="" />
                    </div>
                    <div className={cx('infor-tour')}>
                        <p className="name-tour">{tourDetail.t_ten}</p>
                        <p className={cx('time-tour')}>
                            {tourDetail.t_thoigian} ngày{' '}
                            {tourDetail.t_thoigian - 1} đêm
                        </p>
                        <p className="price-tour">
                            {tourDetail.t_gia.toLocaleString('vi', {
                                style: 'currency',
                                currency: 'VND',
                            })}
                        </p>
                    </div>
                    <button
                        type="button"
                        className={cx('btn-grad')}
                        onClick={() => handleViewDetailsTour()}
                    >
                        ĐẶT TOUR
                    </button>
                </li>
            )}
        </Fragment>
    );
}

export default PreferTourItem;
