import { React } from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '@mui/material/Button';

import styles from './SlickMultiple.scss';

const cx = classNames.bind(styles);

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
};

function SlickMultiple() {
    return (
        <div className={cx('slick-multiple-guide')}>
            <div className={cx('title')}>
                <span>HƯỚNG DẪN ĐẶT TOUR</span>
            </div>
            <Slider {...settings}>
                <div className={cx('slick-item')}>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660659510/GoTravel/search-tour-guide_zeffzz.png"
                        alt=""
                    />
                    <p>Bước 1: Tìm kiếm tour</p>
                </div>
                <div className={cx('slick-item')}>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660659511/GoTravel/list-tour-guide_d5u2dp.png"
                        alt=""
                    />
                    <p>Bước 2: Chọn tour</p>
                </div>
                <div className={cx('slick-item')}>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660659512/GoTravel/details-tour-guide_pdilfj.png"
                        alt=""
                    />
                    <p>Bước 3: Đặt tour</p>
                </div>
                <div className={cx('slick-item')}>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660659510/GoTravel/fill-form-guide_o0nrno.png"
                        alt=""
                    />
                    <p>Bước 4: Điền thông tin</p>
                </div>
                <div className={cx('slick-item')}>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660659510/GoTravel/pay-guide_gw57i0.png"
                        alt=""
                    />
                    <p>Bước 5 Thanh toán</p>
                </div>
                <div className={cx('slick-item')}>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660659510/GoTravel/success-guide_t3v3y1.png"
                        alt=""
                    />
                    <p>Bước 6: Hoàn thành đặt tour</p>
                </div>
            </Slider>
            <div className={cx('buttons-group')}>
                <Link to="/huong-dan" className={cx('link-router')}>
                    <Button variant="outlined">Xem chi tiết</Button>
                </Link>
            </div>
        </div>
    );
}

export default SlickMultiple;
