import { React } from 'react';
import classNames from 'classnames/bind';

import Button from '@mui/material/Button';

import styles from './ListTour.scss';
import 'react-datepicker/dist/react-datepicker.css';

const cx = classNames.bind(styles);

function ListTour() {
    return (
        <div className={cx('list-tour')}>
            <p className={cx('label-list')}>
                <span>Tất cả tour</span>
            </p>
            <ul>
                <li>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660790743/GoTravel/pexels-alfonso-escalante-2832251_mfdkso.jpg"
                        alt=""
                    />
                    <div className={cx('infor-tour')}>
                        <p className={cx('name-tour')}>
                            Nha Trang - Đà Lạt - Quy Nhơn
                        </p>
                        <p className={cx('time-tour')}>5 ngày 4 đêm</p>
                        <p className={cx('price-tour')}>350.000.000 đ</p>
                    </div>
                    <Button
                        variant="contained"
                        className={cx('button-booking')}
                    >
                        ĐẶT TOUR
                    </Button>
                </li>
                <li>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660790743/GoTravel/pexels-alfonso-escalante-2832251_mfdkso.jpg"
                        alt=""
                    />
                    <div className={cx('infor-tour')}>
                        <p className={cx('name-tour')}>
                            Nha Trang - Đà Lạt - Quy Nhơn
                        </p>
                        <p className={cx('time-tour')}>5 ngày 4 đêm</p>
                        <p className={cx('price-tour')}>350.000.000 đ</p>
                    </div>
                    <Button
                        variant="contained"
                        className={cx('button-booking')}
                    >
                        ĐẶT TOUR
                    </Button>
                </li>
                <li>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660790743/GoTravel/pexels-alfonso-escalante-2832251_mfdkso.jpg"
                        alt=""
                    />
                    <div className={cx('infor-tour')}>
                        <p className={cx('name-tour')}>
                            Nha Trang - Đà Lạt - Quy Nhơn
                        </p>
                        <p className={cx('time-tour')}>5 ngày 4 đêm</p>
                        <p className={cx('price-tour')}>350.000.000 đ</p>
                    </div>
                    <Button
                        variant="contained"
                        className={cx('button-booking')}
                    >
                        ĐẶT TOUR
                    </Button>
                </li>
                <li>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660790743/GoTravel/pexels-alfonso-escalante-2832251_mfdkso.jpg"
                        alt=""
                    />
                    <div className={cx('infor-tour')}>
                        <p className={cx('name-tour')}>
                            Nha Trang - Đà Lạt - Quy Nhơn
                        </p>
                        <p className={cx('time-tour')}>5 ngày 4 đêm</p>
                        <p className={cx('price-tour')}>350.000.000 đ</p>
                    </div>
                    <Button
                        variant="contained"
                        className={cx('button-booking')}
                    >
                        ĐẶT TOUR
                    </Button>
                </li>
            </ul>
        </div>
    );
}

export default ListTour;
