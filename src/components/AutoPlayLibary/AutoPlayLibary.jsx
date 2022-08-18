import { React } from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './AutoPlayLibary.scss';

const cx = classNames.bind(styles);

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 12000,
    autoplaySpeed: 1000,
    cssEase: 'linear',
};

function AutoPlayLibary() {
    return (
        <div className={cx('auto-play-libary')}>
            <Slider {...settings}>
                <div>
                    <ul>
                        <li className={cx('image-stand-large')}>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660791127/GoTravel/pexels-karl-solano-2884590_rjivmn.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660791137/GoTravel/pexels-aa-dil-2884867_gxc6wq.jpg"
                                alt=""
                            />
                        </li>
                        <li className={cx('image-along')}>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660790743/GoTravel/pexels-alfonso-escalante-2832251_mfdkso.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659601312/GoTravel/HCM-lamdmark81_arhbtw.webp"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660790746/GoTravel/pexels-rachel-xiao-772429_xvwgir.jpg"
                                alt=""
                            />
                        </li>
                        <li className={cx('image-stand')}>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660791507/GoTravel/pexels-maizal-najmi-2953179_xn0sew.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660791448/GoTravel/pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1382734_davnkb.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660791442/GoTravel/pexels-zetong-li-1784578_nelmsi.jpg"
                                alt=""
                            />
                        </li>
                        <li className={cx('image-square')}>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660789400/GoTravel/pexels-christian-heitz-842711_k5vk1h.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660789893/GoTravel/pexels-tina-nord-10667853_huxif9.jpg"
                                alt=""
                            />
                        </li>
                        <li className={cx('image-along-large')}>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660789896/GoTravel/pexels-quang-nguyen-vinh-2162459_nedvhr.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660789903/GoTravel/pexels-pixabay-35626_mjhpgi.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660789893/GoTravel/pexels-pixabay-235615_i1sdda.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660789425/GoTravel/pexels-pixabay-40896_ebb2hl.jpg"
                                alt=""
                            />
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className={cx('image-stand-large')}>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660312296/GoTravel/pexels-taryn-elliott-5334890_xleoys.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660791140/GoTravel/pexels-max-andrey-1366630_qqjqhz.jpg"
                                alt=""
                            />
                        </li>
                        <li className={cx('image-along')}>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660790751/GoTravel/pexels-chait-goli-2083840_ygqaka.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660790750/GoTravel/pexels-nicole-avagliano-2749481_ftdmjx.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660790750/GoTravel/pexels-calebe-miranda-793166_xowssj.jpg"
                                alt=""
                            />
                        </li>
                        <li className={cx('image-stand')}>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660791440/GoTravel/pexels-ali-pazani-2887766_p0q4wi.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660791438/GoTravel/pexels-malek-dridi-1082663_xlvdkn.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660791443/GoTravel/pexels-steve-johnson-1585325_rvvrya.jpg"
                                alt=""
                            />
                        </li>
                        <li className={cx('image-square')}>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660789400/GoTravel/pexels-christian-heitz-842711_k5vk1h.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660789893/GoTravel/pexels-tina-nord-10667853_huxif9.jpg"
                                alt=""
                            />
                        </li>
                        <li className={cx('image-along-large')}>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660789897/GoTravel/pexels-pixabay-45853_fkcl4f.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660789903/GoTravel/pexels-pixabay-35626_mjhpgi.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660789897/GoTravel/pexels-pixabay-462118_rjhlnw.jpg"
                                alt=""
                            />
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660789905/GoTravel/pexels-%C3%A1kos-szab%C3%B3-440731_adxfei.jpg"
                                alt=""
                            />
                        </li>
                    </ul>
                </div>
            </Slider>
        </div>
    );
}

export default AutoPlayLibary;
