import { React } from 'react';
import classNames from 'classnames/bind';

import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

// import { AiFillStar } from 'react-icons/ai';
// import * as api from '../../api';
import styles from './PreferDestination.scss';
// import { useEffect } from 'react';
// import { useState } from 'react';
const cx = classNames.bind(styles);

function PreferDestination() {
    // const [tourPrefer, setTourPrefer] = useState([]);
    // useEffect(() => {

    // }, []);
    return (
        <div className={cx('prefer-destination')}>
            <div className={cx('title')}>
                <span>TOUR ĐƯỢC YÊU THÍCH</span>
            </div>
            <ul className={cx('tour-list')}>
                <li className={cx('tour-item')}>
                    <div className={cx('image-tour')}>
                        <Rating
                            className={cx('rating')}
                            name="size-large"
                            defaultValue={5}
                            precision={0.5}
                            readOnly
                        />
                        <img
                            src="https://res.cloudinary.com/phtuandev/image/upload/v1659601312/GoTravel/HCM-lamdmark81_arhbtw.webp"
                            alt=""
                        />
                    </div>
                    <div className={cx('infor-tour')}>
                        <p className="name-tour">
                            Nha Trang - Vũng Tàu - Đà Lạt
                        </p>
                        <p className={cx('time-tour')}>3 ngày 2 đêm</p>
                        <p className="price-tour">1.590.000 đ</p>
                    </div>
                    <button type="button" className={cx('btn-grad')}>
                        ĐẶT TOUR
                    </button>
                </li>
                <li className={cx('tour-item')}>
                    <div className={cx('image-tour')}>
                        <Rating
                            className={cx('rating')}
                            name="size-large"
                            defaultValue={4.5}
                            precision={0.5}
                            readOnly
                        />
                        <img
                            src="https://res.cloudinary.com/phtuandev/image/upload/v1659601317/GoTravel/phu-quoc-5_cwhu6s.jpg"
                            alt=""
                        />
                    </div>
                    <div className={cx('infor-tour')}>
                        <p className="name-tour">
                            Nha Trang - Vũng Tàu - Đà Lạt
                        </p>
                        <p className={cx('time-tour')}>3 ngày 2 đêm</p>
                        <p className="price-tour">1.590.000 đ</p>
                    </div>
                    <button type="button" className={cx('btn-grad')}>
                        ĐẶT TOUR
                    </button>
                </li>
                <li className={cx('tour-item')}>
                    <div className={cx('image-tour')}>
                        <Rating
                            className={cx('rating')}
                            name="size-large"
                            defaultValue={4.5}
                            precision={0.5}
                            readOnly
                        />
                        <img
                            src="https://res.cloudinary.com/phtuandev/image/upload/v1659601312/GoTravel/phan-thiet-1_a3w06z.webp"
                            alt=""
                        />
                    </div>
                    <div className={cx('infor-tour')}>
                        <p className="name-tour">
                            Nha Trang - Vũng Tàu - Đà Lạt
                        </p>
                        <p className={cx('time-tour')}>3 ngày 2 đêm</p>
                        <p className="price-tour">1.590.000 đ</p>
                    </div>
                    <button type="button" className={cx('btn-grad')}>
                        ĐẶT TOUR
                    </button>
                </li>
            </ul>
            <ul className={cx('tour-list')}>
                <li className={cx('tour-item')}>
                    <div className={cx('image-tour')}>
                        <Rating
                            className={cx('rating')}
                            name="size-large"
                            defaultValue={5}
                            precision={0.5}
                            readOnly
                        />
                        <img
                            src="https://res.cloudinary.com/phtuandev/image/upload/v1659601312/GoTravel/HCM-lamdmark81_arhbtw.webp"
                            alt=""
                        />
                    </div>
                    <div className={cx('infor-tour')}>
                        <p className="name-tour">
                            Nha Trang - Vũng Tàu - Đà Lạt
                        </p>
                        <p className={cx('time-tour')}>3 ngày 2 đêm</p>
                        <p className="price-tour">1.590.000 đ</p>
                    </div>
                    <button type="button" className={cx('btn-grad')}>
                        ĐẶT TOUR
                    </button>
                </li>
                <li className={cx('tour-item')}>
                    <div className={cx('image-tour')}>
                        <Rating
                            className={cx('rating')}
                            name="size-large"
                            defaultValue={4.5}
                            precision={0.5}
                            readOnly
                        />
                        <img
                            src="https://res.cloudinary.com/phtuandev/image/upload/v1659601317/GoTravel/phu-quoc-5_cwhu6s.jpg"
                            alt=""
                        />
                    </div>
                    <div className={cx('infor-tour')}>
                        <p className="name-tour">
                            Nha Trang - Vũng Tàu - Đà Lạt
                        </p>
                        <p className={cx('time-tour')}>3 ngày 2 đêm</p>
                        <p className="price-tour">1.590.000 đ</p>
                    </div>
                    <button type="button" className={cx('btn-grad')}>
                        ĐẶT TOUR
                    </button>
                </li>
                <li className={cx('tour-item')}>
                    <div className={cx('image-tour')}>
                        <Rating
                            className={cx('rating')}
                            name="size-large"
                            defaultValue={4.5}
                            precision={0.5}
                            readOnly
                        />
                        <img
                            src="https://res.cloudinary.com/phtuandev/image/upload/v1659601312/GoTravel/phan-thiet-1_a3w06z.webp"
                            alt=""
                        />
                    </div>
                    <div className={cx('infor-tour')}>
                        <p className="name-tour">
                            Nha Trang - Vũng Tàu - Đà Lạt
                        </p>
                        <p className={cx('time-tour')}>3 ngày 2 đêm</p>
                        <p className="price-tour">1.590.000 đ</p>
                    </div>
                    <button type="button" className={cx('btn-grad')}>
                        ĐẶT TOUR
                    </button>
                </li>
            </ul>
            <ul className={cx('tour-list')}>
                <li className={cx('tour-item')}>
                    <div className={cx('image-tour')}>
                        <Rating
                            className={cx('rating')}
                            name="size-large"
                            defaultValue={5}
                            precision={0.5}
                            readOnly
                        />
                        <img
                            src="https://res.cloudinary.com/phtuandev/image/upload/v1659601312/GoTravel/HCM-lamdmark81_arhbtw.webp"
                            alt=""
                        />
                    </div>
                    <div className={cx('infor-tour')}>
                        <p className="name-tour">
                            Nha Trang - Vũng Tàu - Đà Lạt
                        </p>
                        <p className={cx('time-tour')}>3 ngày 2 đêm</p>
                        <p className="price-tour">1.590.000 đ</p>
                    </div>
                    <button type="button" className={cx('btn-grad')}>
                        ĐẶT TOUR
                    </button>
                </li>
                <li className={cx('tour-item')}>
                    <div className={cx('image-tour')}>
                        <Rating
                            className={cx('rating')}
                            name="size-large"
                            defaultValue={4.5}
                            precision={0.5}
                            readOnly
                        />
                        <img
                            src="https://res.cloudinary.com/phtuandev/image/upload/v1659601317/GoTravel/phu-quoc-5_cwhu6s.jpg"
                            alt=""
                        />
                    </div>
                    <div className={cx('infor-tour')}>
                        <p className="name-tour">
                            Nha Trang - Vũng Tàu - Đà Lạt
                        </p>
                        <p className={cx('time-tour')}>3 ngày 2 đêm</p>
                        <p className="price-tour">1.590.000 đ</p>
                    </div>
                    <button type="button" className={cx('btn-grad')}>
                        ĐẶT TOUR
                    </button>
                </li>
                <li className={cx('tour-item')}>
                    <div className={cx('image-tour')}>
                        <Rating
                            className={cx('rating')}
                            name="size-large"
                            defaultValue={4.5}
                            precision={0.5}
                            readOnly
                        />
                        <img
                            src="https://res.cloudinary.com/phtuandev/image/upload/v1659601312/GoTravel/phan-thiet-1_a3w06z.webp"
                            alt=""
                        />
                    </div>
                    <div className={cx('infor-tour')}>
                        <p className="name-tour">
                            Nha Trang - Vũng Tàu - Đà Lạt
                        </p>
                        <p className={cx('time-tour')}>3 ngày 2 đêm</p>
                        <p className="price-tour">1.590.000 đ</p>
                    </div>
                    <button type="button" className={cx('btn-grad')}>
                        ĐẶT TOUR
                    </button>
                </li>
            </ul>
            <div className={cx('buttons-group')}>
                <Button variant="outlined">Xem thêm</Button>
            </div>
        </div>
    );
}

export default PreferDestination;
