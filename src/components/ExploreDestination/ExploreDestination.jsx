import { React } from 'react';
import classNames from 'classnames/bind';

import Button from '@mui/material/Button';
import { MdLocationOn } from 'react-icons/md';
// import { AiFillStar } from 'react-icons/ai';
import styles from './ExploreDestination.scss';
const cx = classNames.bind(styles);

function ExploreDestination() {
    return (
        <div className={cx('explore-destination')}>
            <div className={cx('title')}>
                <span>KHÁM PHÁ VIỆT NAM</span>
            </div>
            <div className={cx('explore-group')}>
                <div className={cx('group-item')}>
                    <div className={cx('image-destination')}>
                        <img
                            src="https://res.cloudinary.com/phtuandev/image/upload/v1660618277/GoTravel/asia-desktop_muks18.jpg"
                            alt=""
                        />
                        <p className={cx('label')}>
                            <span className={cx('icon')}>
                                <MdLocationOn />
                            </span>{' '}
                            Miền Bắc
                        </p>
                        <Button variant="outlined">Xem tour</Button>
                    </div>
                    <div className={cx('destination')}>
                        <div className={cx('col-image')}>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659140626/GoTravel/favourite-ho-guom_hagpnt.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659600007/GoTravel/favourite-sapa_cm9wlu.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659140588/GoTravel/inspired-2_x7zaev.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660694863/GoTravel/61f0b7d7ea3eb_rbk4qa.jpg"
                                alt=""
                            />
                        </div>
                        <ul className={cx('col-name')}>
                            <li>Hà Nội</li>
                            <li>Sapa Lào Cai</li>
                            <li>Cát Bà Hải Phòng</li>
                            <li>Đảo Cô Tô Quảng Ninh</li>
                            <li>Hồ Ba Bể Bắc Cạn</li>
                            <li>Tam Đảo</li>
                        </ul>
                        <ul className={cx('col-name')}>
                            <li>Vườn Quốc gia Ba Vì</li>
                            <li>Chùa Hương</li>
                            <li>ChùaTam Chúc</li>
                            <li>Thiên đường Bảo Sơn</li>
                            <li>Mộc Châu</li>
                            <li>Thung lũng Mai Châu</li>
                        </ul>
                    </div>
                    <div className={cx('image-destination')}>
                        <img
                            src="https://res.cloudinary.com/phtuandev/image/upload/v1660622598/GoTravel/pexels-johannes-plenio-2850287_lnsq2c.jpg"
                            alt=""
                        />
                        <p className={cx('label')}>
                            <span className={cx('icon')}>
                                <MdLocationOn />
                            </span>{' '}
                            Miền Trung
                        </p>
                        <Button variant="outlined">Xem tour</Button>
                    </div>
                    <div className={cx('destination')}>
                        <div className={cx('col-image')}>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659600006/GoTravel/tour-hue_zdwml2.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659140630/GoTravel/vinh-ha-long-1_p3rab3.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659600005/GoTravel/cau-rong-da-nang-3_hcbmfy.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660571025/GoTravel/pexels-lu%C3%A2n-phan-7216414_owrgvg.jpg"
                                alt=""
                            />
                        </div>
                        <ul className={cx('col-name')}>
                            <li>Bà Nà Hills</li>
                            <li>Biển Mỹ Khê</li>
                            <li>Phong Nha Kẻ Bàng</li>
                            <li>Đảo Lý Sơn</li>
                            <li>Phố Cổ Hội An</li>
                            <li>Đảo Bình Ba</li>
                        </ul>
                        <ul className={cx('col-name')}>
                            <li>Thánh địa Mỹ Sơn</li>
                            <li>Kinh thành Huế</li>
                            <li>Ngũ Hành Sơn</li>
                            <li>Vịnh Vân Phong</li>
                            <li>Mũi Né</li>
                        </ul>
                    </div>
                </div>
                <div className={cx('group-item')}>
                    <div className={cx('image-destination')}>
                        <img
                            src="https://res.cloudinary.com/phtuandev/image/upload/v1660622818/GoTravel/pexels-asad-photo-maldives-1450360_p7xroj.jpg"
                            alt=""
                        />
                        <p className={cx('label')}>
                            <span className={cx('icon')}>
                                <MdLocationOn />
                            </span>{' '}
                            Phú Quốc
                        </p>
                        <Button variant="outlined">Xem tour</Button>
                    </div>
                    <div className={cx('destination')}>
                        <div className={cx('col-image')}>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659601311/GoTravel/da-lat-doi-robin_z0tppy.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659601317/GoTravel/phu-quoc-5_cwhu6s.jpg"
                                alt=""
                            />
                        </div>
                        <ul className={cx('col-name')}>
                            <li>Vinpearl Safari</li>
                            <li>Grand World</li>
                            <li> Đi Cáp Treo Vượt Biển</li>
                        </ul>
                        <ul className={cx('col-name')}>
                            <li>Công Viên San Hô Namaste</li>

                            <li>Bãi Dài</li>
                            <li>Trang Trại Ngọc Trai</li>
                        </ul>
                    </div>
                    <div className={cx('image-destination')}>
                        <img
                            src="https://res.cloudinary.com/phtuandev/image/upload/v1660623157/GoTravel/pexels-oleksandr-pidvalnyi-1227513_qmbp7i.jpg"
                            alt=""
                        />
                        <p className={cx('label')}>
                            <span className={cx('icon')}>
                                <MdLocationOn />
                            </span>{' '}
                            Miền Nam
                        </p>
                        <Button variant="outlined">Xem tour</Button>
                    </div>
                    <div className={cx('destination')}>
                        <div className={cx('col-image')}>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659140627/GoTravel/tour-can-tho_o2kbwo.png"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659601312/GoTravel/HCM-lamdmark81_arhbtw.webp"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659601310/GoTravel/soc-trang-2_dluusl.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660695763/GoTravel/v%C6%B0%E1%BB%9Dn-tr%C3%A1i-c%C3%A2y-c%E1%BA%A7n-th%C6%A1_lukmwr.jpg"
                                alt=""
                            />
                        </div>
                        <ul className={cx('col-name')}>
                            <li>Biển Côn Đảo </li>
                            <li>Hà Tiên</li>
                            <li>Biển Nam Phố</li>
                            <li>Ao Bà Om</li>
                            <li>Đảo Hải Tặc</li>
                            <li>Chùa Phật Ngọc Xá Lợi</li>
                        </ul>
                        <ul className={cx('col-name')}>
                            <li>Landmark 81</li>
                            <li>Địa đạo Củ Chi</li>
                            <li>Tòa Thánh Tây Ninh</li>
                            <li> Núi Bà Đen</li>
                            <li>Vũng Tàu</li>
                            <li>Chợ nổi Cái Răng</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExploreDestination;
