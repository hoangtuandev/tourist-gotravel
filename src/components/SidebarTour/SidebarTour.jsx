import { React, useState } from 'react';
import classNames from 'classnames/bind';
import DatePicker from 'react-datepicker';

import { BiMapPin } from 'react-icons/bi';
import { CgArrowLongRightC } from 'react-icons/cg';
import { BsCalendar3 } from 'react-icons/bs';
import Slider from '@mui/material/Slider';

import styles from './SidebarTour.scss';
import 'react-datepicker/dist/react-datepicker.css';

const cx = classNames.bind(styles);

function valuetext(value) {
    return `${value}`;
}

function SidebarTour() {
    const [priceArange, setPriceArange] = useState([0, 5000000]);
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (event, newValue) => {
        console.log(newValue);
        setPriceArange(newValue);
    };

    return (
        <div className={cx('sidebar-tour')}>
            <div className={cx('sidebar-menu')}>
                <p className={cx('label-menu')}>LOẠI HÌNH TOUR</p>
                <ul>
                    <li>
                        <BiMapPin className={cx('icon')} />
                        <span> Tất cả tour</span>
                    </li>
                    <li>
                        <BiMapPin className={cx('icon')} />
                        <span> Miền Bắc</span>
                    </li>
                    <li>
                        <BiMapPin className={cx('icon')} />
                        <span> Miền Bắc</span>
                    </li>
                    <li>
                        <BiMapPin className={cx('icon')} />
                        <span> Du lịch nghỉ dưỡng</span>
                    </li>
                    <li>
                        <BiMapPin className={cx('icon')} />
                        <span> Miền Bắc</span>
                    </li>
                    <li>
                        <BiMapPin className={cx('icon')} />
                        <span> Du lịch nghỉ dưỡng</span>
                    </li>
                    <li>
                        <BiMapPin className={cx('icon')} />
                        <span> Miền Bắc</span>
                    </li>
                    <li>
                        <BiMapPin className={cx('icon')} />
                        <span> Du lịch nghỉ dưỡng</span>
                    </li>
                    <li>
                        <BiMapPin className={cx('icon')} />
                        <span> Miền Bắc</span>
                    </li>
                    <li>
                        <BiMapPin className={cx('icon')} />
                        <span> Du lịch nghỉ dưỡng</span>
                    </li>
                </ul>
            </div>
            <div className={cx('sidebar-filter')}>
                <p className={cx('label-menu')}>LỌC TOUR</p>
                <p className={cx('label-filter-price')}>Giá tour</p>
                <ul className={cx('filter-price')}>
                    <li className={cx('slider-price')}>
                        <Slider
                            className={cx('slider')}
                            getAriaLabel={() => 'Temperature range'}
                            min={0}
                            max={20000000}
                            step={500000}
                            value={priceArange}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                        />
                        <div className={cx('price-text')}>
                            <span className={cx('value')}>
                                {priceArange[0].toLocaleString('vi', {
                                    style: 'currency',
                                    currency: 'VND',
                                })}
                            </span>
                            <span>
                                <CgArrowLongRightC className="icon" />
                            </span>
                            <span className={cx('value')}>
                                {priceArange[1].toLocaleString('vi', {
                                    style: 'currency',
                                    currency: 'VND',
                                })}
                            </span>
                        </div>
                    </li>
                </ul>
                <p className={cx('label-filter-price')}>Ngày khởi hành</p>
                <div className={cx('filter-departure')}>
                    <DatePicker
                        dateFormat="dd / MM / yyyy"
                        placeholderText="ngày / tháng / năm"
                        selected={startDate}
                        onChange={(date) => {
                            return setStartDate(date);
                        }}
                    />
                    <BsCalendar3 className={cx('icon-calendar')} />
                </div>

                <p className={cx('label-filter-price')}>Thời gian</p>
            </div>
        </div>
    );
}

export default SidebarTour;
