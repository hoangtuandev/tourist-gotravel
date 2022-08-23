import { React } from 'react';
import classNames from 'classnames/bind';
import moment from 'moment';

import Button from '@mui/material/Button';

import * as api from '../../api';
import styles from './BookingTour.scss';
import BookingForm from './BookingForm';

const cx = classNames.bind(styles);

function BookingTour(props) {
    const { tour, departure } = props;

    return (
        <div className={cx('booking-tour')}>
            <BookingForm></BookingForm>
            <div>
                <div className={cx('infor-tour')}>
                    <p className={cx('label-box')}>Thông tin tour</p>
                    <hr />
                    <p className={cx('tour-name')}>{tour.t_ten}</p>

                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td className={cx('label')}>Số ngày:</td>
                                <td className={cx('content')}>
                                    {tour.t_thoigian}
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('label')}>Điểm khởi hành:</td>
                                <td className={cx('content')}>
                                    {tour.t_thoigian} ngày {tour.t_thoigian - 1}
                                    đêm
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('label')}>Ngày khởi hành:</td>
                                <td className={cx('content')}>
                                    {moment(departure.lkh_ngaykhoihanh).format(
                                        'DD / MM / YYYY'
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('label')}>Ngày kết thúc</td>
                                <td className={cx('content')}>3 ngày</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <p className={cx('details-price')}>Chi tiết giá</p>
                    <ul className={cx('details-list')}>
                        <li className={cx('details-item')}>
                            <p>
                                Người lớn x
                                <span className={cx('amount')}> 1</span>
                            </p>
                            <p className={cx('price')}>3.590.000 đ</p>
                        </li>
                        <li className={cx('details-item')}>
                            <p>
                                Người lớn x
                                <span className={cx('amount')}> 1</span>
                            </p>
                            <p className={cx('price')}>3.590.000 đ</p>
                        </li>
                    </ul>
                    <hr />
                    <p className={cx('label-box')}>Thông tin thanh toán</p>
                    <ul className={cx('payment-list')}>
                        <li className="prepay">
                            <p>Trả trước</p>
                            <p className={cx('prepay-value')}>3.590.000 đ</p>
                        </li>
                        <li className="total-pay">
                            <p>Tổng thanh toán</p>
                            <p className={cx('total-pay-value')}>3.590.000 đ</p>
                        </li>
                    </ul>
                    <Button
                        variant="contained"
                        className={cx('button-payment')}
                    >
                        THANH TOÁN
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default BookingTour;
