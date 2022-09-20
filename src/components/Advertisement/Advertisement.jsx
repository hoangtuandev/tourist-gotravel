import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './Advertisement.scss';
import * as api from '../../api';
import AdvertisementItem from './AdvertisementItem';
import { viewAdvertisement } from './AdvertisementSlice';
import ViewAdvertisement from './ViewAvertisement';

const cx = classNames.bind(styles);

function Advertisement() {
    const openView = useSelector(viewAdvertisement);
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
                        setAdvertisementList={setAdvertisementList}
                    ></AdvertisementItem>
                ))}
            </ul>
            {openView && (
                <ViewAdvertisement
                    setAdvertisementList={setAdvertisementList}
                ></ViewAdvertisement>
            )}
        </div>
    );
}

export default Advertisement;
