import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import Carousel from 'react-bootstrap/Carousel';
import styles from './NewDestination.scss';
import {
    handleSelectAdvertisement,
    handleToggleViewAdvertisement,
} from '../Advertisement/AdvertisementSlice';
const cx = classNames.bind(styles);

function DestinationItem(props) {
    const dispatch = useDispatch();
    const { advertisement } = props;
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleViewAdvertisement = () => {
        dispatch(handleSelectAdvertisement(advertisement));
        dispatch(handleToggleViewAdvertisement(true));
    };

    return (
        <li
            className={cx('destination-item')}
            onClick={() => handleViewAdvertisement()}
        >
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                className={cx('controlled-carousel')}
            >
                <Carousel.Item interval={4000}>
                    <img
                        src={advertisement.bvqb_hinhanh[0]}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={4000} className={cx('carousel-item')}>
                    <img
                        src={advertisement.bvqb_hinhanh[1]}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={4000} className={cx('carousel-item')}>
                    <img
                        src={advertisement.bvqb_hinhanh[2]}
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className={cx('destination-infor')}>
                <p className={cx('infor-label')}>{advertisement.bvqb_tieude}</p>
                <p className={cx('infor-content')}>
                    {advertisement.bvqb_noidung}
                </p>
            </div>
        </li>
    );
}

export default DestinationItem;
