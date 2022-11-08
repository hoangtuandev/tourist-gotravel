import { Fragment, React } from 'react';
import classNames from 'classnames/bind';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Cookies from 'universal-cookie';
import styles from './HistoryBooking.scss';
import ViewBookingTour from './ViewBookingTour';
import * as api from '../../api';
import {
    handleSetBookingSelected,
    handleToggleViewHistoryBooking,
    openViewBooking,
} from './HistoryBookingSlice';

const cx = classNames.bind(styles);
const cookies = new Cookies();

function BookingItem(props) {
    const { item, setBookingList } = props;
    const dispatch = useDispatch();
    const user = cookies.get('user');
    const isOpenView = useSelector(openViewBooking);

    const handleViewDetailBooking = () => {
        dispatch(handleToggleViewHistoryBooking(true));
        dispatch(handleSetBookingSelected(item));
    };

    const handleDeclineBookingTour = () => {
        api.updateStatusBookingTour({ _id: item._id, bt_trangthai: 0 }).then(
            (res) => {
                api.getBookingTourByTouristAccount({
                    _id: user.others._id,
                }).then((res) => {
                    setBookingList(res.data);
                });
            }
        );
    };

    return (
        <Fragment>
            <li className={cx('item-booking')}>
                <img
                    src={item.bt_tour.t_hinhanh[0]}
                    alt=""
                    onClick={() => handleViewDetailBooking()}
                />
                <div
                    className={cx('infor-booking')}
                    onClick={() => handleViewDetailBooking()}
                >
                    <p className={cx('name-tour')}>{item.bt_tour.t_ten}</p>
                    <p className={cx('time-booking')}>
                        <CalendarMonthIcon className={cx('icon')} />
                        <span>
                            {moment(item.bt_ngaydat).format('HH:mm DD/MM/YYYY')}
                        </span>
                    </p>
                    <p className={cx('departure-start')}>
                        Ngày khởi hành:{' '}
                        <span>
                            {moment(
                                item.bt_lichkhoihanh.lkh_ngaykhoihanh
                            ).format('DD/MM/YYYY')}
                        </span>
                    </p>
                    <p className={cx('departure-end')}>
                        Ngày kết thúc:{' '}
                        <span>
                            {moment(
                                item.bt_lichkhoihanh.lkh_ngayketthuc
                            ).format('DD/MM/YYYY')}
                        </span>
                    </p>
                </div>
                {item.bt_trangthai === 0 && (
                    <div className={cx('status-booking cancel-status')}>
                        {' '}
                        Đã hủy{' '}
                    </div>
                )}
                {item.bt_trangthai === 1 && (
                    <div className={cx('status-booking await-status')}>
                        {' '}
                        Chờ xác nhận{' '}
                    </div>
                )}
                {item.bt_trangthai === 2 && (
                    <div className={cx('status-booking accepted-status')}>
                        {' '}
                        Đã xác nhận{' '}
                    </div>
                )}
                {item.bt_trangthai === 3 && (
                    <div className={cx('status-booking working-status')}>
                        {' '}
                        Đang diễn ra{' '}
                    </div>
                )}
                {item.bt_trangthai === 4 && (
                    <div className={cx('status-booking finish-status')}>
                        {' '}
                        Đã kết thúc{' '}
                    </div>
                )}

                <ButtonGroup
                    className={cx('button-groups')}
                    variant="text"
                    aria-label="text button group"
                >
                    {item.bt_trangthai > 1 && (
                        <Button onClick={() => handleViewDetailBooking()}>
                            Chi tiết
                        </Button>
                    )}
                    {item.bt_trangthai > 1 && (
                        <Button onClick={() => handleViewDetailBooking()}>
                            Đánh giá
                        </Button>
                    )}
                    {item.bt_trangthai === 1 && (
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => handleDeclineBookingTour()}
                        >
                            Hủy tour
                        </Button>
                    )}
                </ButtonGroup>
            </li>
            {isOpenView && <ViewBookingTour></ViewBookingTour>}
        </Fragment>
    );
}

export default BookingItem;
