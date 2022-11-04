import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import classNames from 'classnames/bind';
import styles from './Advertisement.scss';
import * as api from '../../api';
import { viewAdvertisement } from './AdvertisementSlice';
import ViewAdvertisement from './ViewAvertisement';
import SavedAdvertisementItem from './SavedAdvertisementItem';

const cx = classNames.bind(styles);
const cookies = new Cookies();

function SavedAdvertisement() {
    const userID = cookies.get('user').others._id;
    const openView = useSelector(viewAdvertisement);
    const [advertisementList, setAdvertisementList] = useState([]);

    useEffect(() => {
        api.getInteractAdvertisementByAccount({ userID: userID }).then(
            (res) => {
                setAdvertisementList(res.data);
            }
        );
    }, [userID]);

    return (
        <div className={cx('advertisement')}>
            <p className="history-panel-label">
                <span>BÀI VIẾT QUẢNG BÁ ĐÃ LƯU</span>
            </p>
            {advertisementList.length !== 0 && (
                <ul className={cx('advertisement-list')}>
                    {advertisementList.length !== 0 &&
                        advertisementList.map((interact, index) => (
                            <SavedAdvertisementItem
                                key={index}
                                advertisement={interact.ttbqb_baiviet}
                                setAdvertisementList={setAdvertisementList}
                            ></SavedAdvertisementItem>
                        ))}
                </ul>
            )}
            {advertisementList.length === 0 && (
                <div className={cx('empty-list')}>
                    <p>Không có địa điểm nào được lưu !</p>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660285963/GoTravel/undraw_Explore_re_8l4v_lvunn9.png"
                        alt="empty list"
                    />
                </div>
            )}
            {openView && (
                <ViewAdvertisement
                    setAdvertisementList={setAdvertisementList}
                ></ViewAdvertisement>
            )}
        </div>
    );
}

export default SavedAdvertisement;
