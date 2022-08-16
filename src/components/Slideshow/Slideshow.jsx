import { React, useState } from 'react';
import classNames from 'classnames/bind';
import Select from 'react-select';

import { BiCalendar } from 'react-icons/bi';
import { TbMapSearch } from 'react-icons/tb';
import Carousel from 'react-bootstrap/Carousel';
import DatePicker from 'react-datepicker';

import styles from './Slideshow.scss';
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

function Slideshow() {
    const [index, setIndex] = useState(0);
    const [startDate, setStartDate] = useState(new Date());

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className={cx('slide-show')}>
            <div className={cx('banner-text')}>
                <p className={cx('slogan-before')}>Khám phá Việt Nam cùng</p>
                <p className={cx('slogan-after')}>
                    {' '}
                    <span>GO</span> Travel
                </p>
                <button type="button" className={cx('btn-grad')}>
                    KHÁM PHÁ NGAY
                </button>
            </div>
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                className={cx('controlled-carousel')}
            >
                <Carousel.Item interval={4000} className={cx('carousel-item')}>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660540896/GoTravel/pexels-asad-photo-maldives-3601425_tlzcch.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={4000} className={cx('carousel-item')}>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660539903/GoTravel/pexels-michiel-ton-4269594_xrhd0w.jpg"
                        alt="First slide"
                    />

                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={4000} className={cx('carousel-item')}>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660547345/GoTravel/pexels-quang-nguyen-vinh-6875189_xcfrno.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={4000} className={cx('carousel-item')}>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660544577/GoTravel/pexels-mariia-kamenska-883758_ssjycb.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={4000} className={cx('carousel-item')}>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660547347/GoTravel/pexels-pixabay-237272_xdpjsb.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className={cx('search-tour')}>
                <div className={cx('search-form')}>
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

export default Slideshow;
