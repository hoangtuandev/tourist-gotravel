import { React } from 'react';
import classNames from 'classnames/bind';

import { ImLocation } from 'react-icons/im';
import { FaPhone } from 'react-icons/fa';
import { FaHeadphonesAlt } from 'react-icons/fa';
import Button from '@mui/material/Button';

import styles from './Footer.scss';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('background-over')}>
                <div className={cx('about')}>
                    <div className={cx('go-travel-text')}>
                        <span>GO</span> Travel
                    </div>
                    <ul className={cx('media-list')}>
                        <li>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660628938/GoTravel/Instagram_logo_2016._rdkbmb.webp"
                                alt=""
                            />
                        </li>
                        <li>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660628933/GoTravel/Facebook_f_logo__2019_tylsf7.webp"
                                alt=""
                            />
                        </li>
                        <li>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660628935/GoTravel/Twitter-logo.svg_yn895l.png"
                                alt=""
                            />
                        </li>
                        <li>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660628931/GoTravel/YouTube_logo__2017_tvvpm7.png"
                                alt=""
                            />
                        </li>
                    </ul>
                    <div className={cx('contact')}>
                        <input
                            readOnly
                            type="text"
                            placeholder="tuanb1809205@student.ctu.edu.vn"
                        />
                        <label>LIÊN HỆ</label>
                    </div>
                    <ul className={cx('address')}>
                        <li>
                            <ImLocation className={cx('icon')} />
                            <span>
                                Khoa Công nghệ thông tin và Truyền thông - Đại
                                học Cần Thơ
                            </span>
                        </li>
                        <li>
                            <FaPhone className={cx('icon')} />
                            <span>0707730850</span>
                        </li>
                        <li>
                            <FaHeadphonesAlt className={cx('icon')} />
                            <span>support@gotravel.com.vn</span>
                        </li>
                    </ul>
                </div>
                <div className={cx('menu')}>
                    <ul>
                        <li>
                            <Button variant="outlined">Trang chủ</Button>
                        </li>
                        <li>
                            <Button variant="outlined">Hướng dẫn</Button>
                        </li>
                        <li>
                            <Button variant="outlined">Tour du lịch</Button>
                        </li>
                        <li>
                            <Button variant="outlined">Chia sẻ du lịch</Button>
                        </li>
                        <li>
                            <Button variant="outlined">Quảng bá du lịch</Button>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Button variant="outlined">Tour tham quan</Button>
                        </li>
                        <li>
                            <Button variant="outlined">Tour khám phá</Button>
                        </li>
                        <li>
                            <Button variant="outlined">Tour ẩm thực</Button>
                        </li>
                        <li>
                            <Button variant="outlined">Tour văn hóa</Button>
                        </li>
                        <li>
                            <Button variant="outlined">Tour nghỉ dưỡng</Button>
                        </li>
                    </ul>
                </div>
                <div className={cx('images')}>
                    <ul>
                        <li>
                            <Button variant="contained" className="button-one">
                                MIỀN BẮC
                            </Button>
                        </li>
                        <li>
                            <Button variant="contained" className="button-two">
                                MIỀN TRUNG
                            </Button>
                        </li>
                        <li>
                            <Button
                                variant="contained"
                                className="button-three"
                            >
                                MIỀN NAM
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
