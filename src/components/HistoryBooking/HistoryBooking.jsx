import { React } from 'react';
import classNames from 'classnames/bind';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import styles from './HistoryBooking.scss';

const cx = classNames.bind(styles);

function HistoryBooking() {
    return (
        <div className={cx('history-booking')}>
            <ul className={cx('list-bookings')}>
                <li className={cx('item-booking')}>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1661299169/GoTravel/istockphoto-1178095816-1024x1024_hanqa1.jpg"
                        alt=""
                    />
                    <div className={cx('infor-booking')}>
                        <p className={cx('name-tour')}>Nha trang-Da lat</p>
                        <p className={cx('time-booking')}>
                            <CalendarMonthIcon className={cx('icon')} />
                            <span> 20/07/20022</span>
                        </p>
                        <p className={cx('departure-start')}>
                            Ngày khởi hành: <span>20/07/20022</span>
                        </p>
                        <p className={cx('departure-end')}>
                            Ngày kết thúc: <span>20/07/20022</span>
                        </p>
                        <div className={cx('status-booking')}>Đã kết thúc</div>
                    </div>
                    <ButtonGroup
                        className={cx('button-groups')}
                        variant="text"
                        aria-label="text button group"
                    >
                        <Button>Xem</Button>
                        <Button>Two</Button>
                        <Button>Đánh giá</Button>
                    </ButtonGroup>
                </li>
                <li className={cx('item-booking')}>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1661299169/GoTravel/istockphoto-1178095816-1024x1024_hanqa1.jpg"
                        alt=""
                    />
                    <div className={cx('infor-booking')}>
                        <p className={cx('name-tour')}>Nha trang-Da lat</p>
                        <p className={cx('time-booking')}>
                            <CalendarMonthIcon className={cx('icon')} />
                            <span> 20/07/20022</span>
                        </p>
                        <p className={cx('departure-start')}>
                            Ngày khởi hành: <span>20/07/20022</span>
                        </p>
                        <p className={cx('departure-end')}>
                            Ngày kết thúc: <span>20/07/20022</span>
                        </p>
                        <div className={cx('status-booking')}>Đã kết thúc</div>
                    </div>
                    <ButtonGroup
                        className={cx('button-groups')}
                        variant="text"
                        aria-label="text button group"
                    >
                        <Button>Xem</Button>
                        <Button>Two</Button>
                        <Button>Đánh giá</Button>
                    </ButtonGroup>
                </li>
                <li className={cx('item-booking')}>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1661299169/GoTravel/istockphoto-1178095816-1024x1024_hanqa1.jpg"
                        alt=""
                    />
                    <div className={cx('infor-booking')}>
                        <p className={cx('name-tour')}>Nha trang-Da lat</p>
                        <p className={cx('time-booking')}>
                            <CalendarMonthIcon className={cx('icon')} />
                            <span> 20/07/20022</span>
                        </p>
                        <p className={cx('departure-start')}>
                            Ngày khởi hành: <span>20/07/20022</span>
                        </p>
                        <p className={cx('departure-end')}>
                            Ngày kết thúc: <span>20/07/20022</span>
                        </p>
                        <div className={cx('status-booking')}>Đã kết thúc</div>
                    </div>
                    <ButtonGroup
                        className={cx('button-groups')}
                        variant="text"
                        aria-label="text button group"
                    >
                        <Button>Xem</Button>
                        <Button>Two</Button>
                        <Button>Đánh giá</Button>
                    </ButtonGroup>
                </li>
            </ul>
        </div>
    );
}

export default HistoryBooking;
