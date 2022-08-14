import { React, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Select from 'react-select';

import { BiCalendar } from 'react-icons/bi';
import { TbMapSearch } from 'react-icons/tb';
import DatePicker from 'react-datepicker';

import styles from './Banner.scss';
import 'react-datepicker/dist/react-datepicker.css';
const cx = classNames.bind(styles);

export const colourOptions = [
    {
        value: 'Chọn',
        label: 'Chọn',
        color: '#0052CC',
        isDisabled: true,
        isFixed: true,
    },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
];

export const images = [
    'https://res.cloudinary.com/phtuandev/image/upload/v1660449042/GoTravel/banner_1_tm4ebo.png',
    'https://res.cloudinary.com/phtuandev/image/upload/v1660449342/GoTravel/banner_4_shjgjf.png',
    'https://res.cloudinary.com/phtuandev/image/upload/v1660449051/GoTravel/banner_5_rnhzwl.png',
    'https://res.cloudinary.com/phtuandev/image/upload/v1660449051/GoTravel/banner_3_nde15w.png',
];

function Banner() {
    const [startDate, setStartDate] = useState(new Date());
    const [currentImageIndex, setCurrentImageIndex] = useState(
        Math.floor(Math.random() * images.length)
    );

    const changeImage = () => {
        const randomNumber = Math.floor(Math.random() * images.length);
        setCurrentImageIndex(randomNumber);
    };
    // useEffect(() => changeImage(), []);

    useEffect(() => {
        setInterval(() => changeImage(), 5000);
    }, []);

    return (
        <div className={cx('banner')}>
            <div className={cx('banner-top')}>
                <div className={cx('banner-text')}>
                    <p className={cx('slogan-before')}>
                        Khám phá Việt Nam cùng
                    </p>
                    <p className={cx('slogan-after')}>
                        {' '}
                        <span>GO</span> Travel
                    </p>
                    <button type="button" className={cx('btn-grad')}>
                        KHÁM PHÁ NGAY
                    </button>
                </div>
                <div className={cx('banner-images')}>
                    <img
                        className={cx('image-large')}
                        src={images[currentImageIndex]}
                        alt=""
                    />
                </div>
            </div>
            <div className={cx('banner-bottom')}>
                {' '}
                <div className={cx('search-banner')}>
                    <div className={cx('select-search')}>
                        <div className={cx('select-item')}>
                            <div className={cx('label')}>Địa điểm</div>
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                defaultValue={colourOptions[0]}
                                name="color"
                                options={colourOptions}
                                onChange={(value) => {
                                    console.log(value);
                                }}
                            />
                        </div>
                        <div className={cx('select-item')}>
                            <div className={cx('label')}>Loại hình</div>
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                defaultValue={colourOptions[0]}
                                name="color"
                                options={colourOptions}
                                onChange={(value) => {
                                    console.log(value);
                                }}
                            />
                        </div>
                        <div className={cx('select-item calendar-banner')}>
                            <div className={cx('label')}>Khởi hành</div>
                            <DatePicker
                                dateFormat="dd / MM / yyyy"
                                placeholderText="ngày / tháng / năm"
                                selected={startDate}
                                onChange={(date) => {
                                    return setStartDate(date);
                                }}
                            />
                            <span>
                                <BiCalendar className={cx('calendar')} />
                            </span>
                        </div>
                        <div className={cx('button-view-tour')}>
                            <TbMapSearch className={cx('icon')} />
                            Xem tour
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
