import { React, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import Switch from '@mui/material/Switch';
import Cookies from 'universal-cookie';
import SearchIcon from '@mui/icons-material/Search';
import { BsCalendar3 } from 'react-icons/bs';
import styles from './HistoryBooking.scss';
import BookingItem from './BookingItem';
import * as api from '../../api';
import 'react-datepicker/dist/react-datepicker.css';

const cx = classNames.bind(styles);

const cookies = new Cookies();

const powerSelectOptions = [
    { value: 0, label: 'Đã hủy' },
    { value: 1, label: 'Chờ xác nhận' },
    { value: 2, label: 'Đã xác nhận' },
    { value: 3, label: 'Đang diễn ra' },
    { value: 4, label: 'Đã kết thúc' },
];

function HistoryBooking() {
    const user = cookies.get('user');
    const [bookingList, setBookingList] = useState([]);

    const [selectAll, setSelectAll] = useState(true);
    const [searchingKey, setSearchingKey] = useState('');
    const [departure, setDeparture] = useState(new Date());

    useEffect(() => {
        setSearchingKey('');
        if (selectAll) {
            api.getBookingTourByTouristAccount({ _id: user.others._id }).then(
                (res) => {
                    setBookingList(res.data);
                }
            );
        }
    }, [selectAll]);

    useEffect(() => {
        api.getBookingTourByTouristAccount({ _id: user.others._id }).then(
            (res) => {
                setBookingList(res.data);
            }
        );
    }, [user.others._id]);

    const handleToggleSelectAll = (event) => {
        setSelectAll(event.target.checked);
    };

    const handleChangeStatusOptions = (option) => {
        setSelectAll(false);

        api.filterBookingTourByStatus({
            status: option.value,
            idAccount: user.others._id,
        }).then((res) => {
            setBookingList(res.data);
        });
    };

    const handleChangeDepartureDate = (date) => {
        setSelectAll(false);
        setDeparture(date);
        // api.getCalendarGuidebyDeaprtureDate({ date: date }).then((res) => {
        //     setCalendarGuide(
        //         res.data.sort(
        //             (a, b) =>
        //                 Date.parse(a.ldt_lichkhoihanh.lkh_ngaykhoihanh) -
        //                 Date.parse(b.ldt_lichkhoihanh.lkh_ngaykhoihanh)
        //         )
        //     );
        // });
    };

    const handleChangeSearchingKey = (key) => {
        setSelectAll(false);
        setSearchingKey(key);
        api.searchingBookingByTour({
            keySearch: key,
            idAccount: user.others._id,
        }).then((res) => {
            setBookingList(res.data);
        });
    };

    return (
        <div className={cx('history-booking')}>
            <p className="history-panel-label">
                <span>LỊCH SỬ ĐẶT TOUR</span>
            </p>
            <div className={cx('filter-admin')}>
                <div className={cx('select-filter')}>
                    <div className={cx('select-all')}>
                        <span className={cx('label')}>Tất cả</span>
                        <Switch
                            size="large"
                            color="error"
                            checked={selectAll}
                            onChange={handleToggleSelectAll}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </div>
                    <div className={'select-sort'}>
                        <Select
                            placeholder="Lọc theo trạng thái"
                            className={cx('select-field')}
                            options={powerSelectOptions}
                            onChange={handleChangeStatusOptions}
                        />
                    </div>
                    {/* <div className={cx('filter-departure')}>
                        <p className={cx('label-filter')}>Ngày khởi hành</p>
                        <DatePicker
                            dateFormat="dd / MM / yyyy"
                            placeholderText="ngày / tháng / năm"
                            selected={departure}
                            onChange={(date) => {
                                handleChangeDepartureDate(date);
                            }}
                        />
                        <BsCalendar3 className={cx('icon-calendar')} />
                    </div> */}
                </div>
                <div className={cx('search-filter')}>
                    <input
                        className={'textfield-search'}
                        type="text"
                        placeholder="Tìm kiếm tên tour..."
                        value={searchingKey}
                        onChange={(e) =>
                            handleChangeSearchingKey(e.target.value)
                        }
                    />
                    <label>
                        <SearchIcon className={cx('search-icon')} />
                    </label>
                </div>
            </div>
            {bookingList.length !== 0 && (
                <ul className={cx('list-bookings')}>
                    {bookingList.map((item, index) => (
                        <BookingItem key={index} item={item}></BookingItem>
                    ))}
                </ul>
            )}
            {bookingList.length === 0 && (
                <div className={cx('empty-list')}>
                    <p>Bạn vẫn chưa đặt tour nào !</p>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660285963/GoTravel/undraw_Explore_re_8l4v_lvunn9.png"
                        alt="empty list"
                    />
                </div>
            )}
        </div>
    );
}

export default HistoryBooking;
