import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import Button from '@mui/material/Button';
import styles from './NewDestination.scss';
import ButtonBases from './ButtonBases';
import DestinationItem from './DestinationItem';
import * as api from '../../api';
import { viewAdvertisement } from '../Advertisement/AdvertisementSlice';
import ViewAdvertisement from '../Advertisement/ViewAvertisement';

const cx = classNames.bind(styles);

function NewDestination() {
    const openAdvertisement = useSelector(viewAdvertisement);
    const [listAdvertisement, setListAdvertisement] = useState(null);

    useEffect(() => {
        api.getLimitActiveAdvertisement({ limitAmount: 3 }).then((res) => {
            setListAdvertisement(res.data);
        });
    }, []);

    return (
        <div className={cx('new-destination')}>
            <div className={cx('title')}>
                <span>ĐIỂM ĐẾN NỔI BẬC</span>
            </div>
            <ButtonBases></ButtonBases>
            <ul className={cx('destination-list')}>
                {listAdvertisement &&
                    listAdvertisement.map((advertisement, index) => (
                        <DestinationItem
                            key={index}
                            advertisement={advertisement}
                        ></DestinationItem>
                    ))}
            </ul>

            <div className={cx('buttons-group')}>
                <Button variant="outlined">Xem thêm</Button>
            </div>
            {openAdvertisement && <ViewAdvertisement></ViewAdvertisement>}
        </div>
    );
}

export default NewDestination;
