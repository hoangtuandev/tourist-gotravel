import { React, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './ListTour.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { isOpenDetailsTour } from '../DetailsTour/DetailsTourSlice';
import DetailsTour from '../DetailsTour/DetailsTour';

import * as api from '../../api';
import ItemTour from './ItemTour';

const cx = classNames.bind(styles);

function ListTour() {
    const openDetailsTour = useSelector(isOpenDetailsTour);
    const [listTour, setListTour] = useState([]);

    useEffect(() => {
        api.getAllActiveTour().then((res) => {
            setListTour(res.data);
        });
    }, []);

    return (
        <div className={cx('list-tour')}>
            <p className={cx('label-list')}>
                <span>Tất cả tour</span>
            </p>
            <ul>
                {listTour.map((tour, index) => (
                    <ItemTour key={index} tour={tour}></ItemTour>
                ))}
            </ul>

            {openDetailsTour && <DetailsTour></DetailsTour>}
        </div>
    );
}

export default ListTour;
