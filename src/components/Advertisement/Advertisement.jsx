import { React, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Advertisement.scss';
import * as api from '../../api';
import AdvertisementItem from './AdvertisementItem';

const cx = classNames.bind(styles);

function Advertisement() {
    const [advertisementList, setAdvertisementList] = useState([]);
    useEffect(() => {
        api.getActiveAdvertisement().then((res) => {
            setAdvertisementList(res.data);
        });
    }, []);

    return (
        <div className={cx('advertisement')}>
            <ul className={cx('advertisement-list')}>
                {advertisementList.map((advertisement, index) => (
                    <AdvertisementItem
                        key={index}
                        advertisement={advertisement}
                    ></AdvertisementItem>
                ))}
            </ul>
        </div>
    );
}

export default Advertisement;
