import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import classNames from 'classnames/bind';
import styles from './Advertisement.scss';
import * as api from '../../api';
import AdvertisementItem from './AdvertisementItem';
import { viewAdvertisement } from './AdvertisementSlice';
import ViewAdvertisement from './ViewAvertisement';

const cx = classNames.bind(styles);
const cookies = new Cookies();

function SavedAdvertisement() {
    const userID = cookies.get('user').others._id;
    const openView = useSelector(viewAdvertisement);
    const [advertisementList, setAdvertisementList] = useState([]);

    useEffect(() => {
        api.getInteractAdvertisementByAccount({ userID: userID }).then(
            (res) => {
                console.log(res.data);
                setAdvertisementList(res.data);
            }
        );
    }, [userID]);

    return (
        <div className={cx('advertisement')}>
            <ul className={cx('advertisement-list')}>
                {advertisementList.length !== 0 &&
                    advertisementList.map((interact, index) => (
                        <AdvertisementItem
                            key={index}
                            advertisement={interact.ttbqb_baiviet}
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

export default SavedAdvertisement;
