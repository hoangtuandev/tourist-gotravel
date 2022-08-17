import { React, useState } from 'react';
import classNames from 'classnames/bind';

import Button from '@mui/material/Button';
import Carousel from 'react-bootstrap/Carousel';

import styles from './NewDestination.scss';
import ButtonBases from './ButtonBases';

const cx = classNames.bind(styles);

function NewDestination() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className={cx('new-destination')}>
            <div className={cx('title')}>
                <span>ĐIỂM ĐẾN NỔI BẬC</span>
            </div>
            <ButtonBases></ButtonBases>
            <ul className={cx('destination-list')}>
                <li className={cx('destination-item')}>
                    <Carousel
                        activeIndex={index}
                        onSelect={handleSelect}
                        className={cx('controlled-carousel')}
                    >
                        <Carousel.Item interval={4000}>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659601310/GoTravel/soc-trang-2_dluusl.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item
                            interval={4000}
                            className={cx('carousel-item')}
                        >
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659140588/GoTravel/inspired-2_x7zaev.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item
                            interval={4000}
                            className={cx('carousel-item')}
                        >
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659601317/GoTravel/phu-quoc-5_cwhu6s.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <div className={cx('destination-infor')}>
                        <p className={cx('infor-label')}>Đảo ngọc Phú Quốc</p>
                        <p className={cx('infor-content')}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ipsam voluptate distinctio corrupti aut vitae
                            id molestias dolores numquam veritatis autem magnam
                            quibusdam nam incidunt at deserunt, beatae dolor
                            reprehenderit labore.
                        </p>
                    </div>
                </li>
                <li className={cx('destination-item')}>
                    <Carousel
                        activeIndex={index}
                        onSelect={handleSelect}
                        className={cx('controlled-carousel')}
                    >
                        <Carousel.Item interval={4000}>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659601310/GoTravel/soc-trang-2_dluusl.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item
                            interval={4000}
                            className={cx('carousel-item')}
                        >
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659140588/GoTravel/inspired-2_x7zaev.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item
                            interval={4000}
                            className={cx('carousel-item')}
                        >
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659601317/GoTravel/phu-quoc-5_cwhu6s.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <div className={cx('destination-infor')}>
                        <p className={cx('infor-label')}>Đảo ngọc Phú Quốc</p>
                        <p className={cx('infor-content')}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ipsam voluptate distinctio corrupti aut vitae
                            id molestias dolores numquam veritatis autem magnam
                            quibusdam nam incidunt at deserunt, beatae dolor
                            reprehenderit labore.
                        </p>
                    </div>
                </li>
                <li className={cx('destination-item')}>
                    <Carousel
                        activeIndex={index}
                        onSelect={handleSelect}
                        className={cx('controlled-carousel')}
                    >
                        <Carousel.Item interval={4000}>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659601310/GoTravel/soc-trang-2_dluusl.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item
                            interval={4000}
                            className={cx('carousel-item')}
                        >
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659140588/GoTravel/inspired-2_x7zaev.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item
                            interval={4000}
                            className={cx('carousel-item')}
                        >
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1659601317/GoTravel/phu-quoc-5_cwhu6s.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <div className={cx('destination-infor')}>
                        <p className={cx('infor-label')}>Đảo ngọc Phú Quốc</p>
                        <p className={cx('infor-content')}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ipsam voluptate distinctio corrupti aut vitae
                            id molestias dolores numquam veritatis autem magnam
                            quibusdam nam incidunt at deserunt, beatae dolor
                            reprehenderit labore.
                        </p>
                    </div>
                </li>
            </ul>

            <div className={cx('buttons-group')}>
                <Button variant="outlined">Xem thêm</Button>
            </div>
        </div>
    );
}

export default NewDestination;
