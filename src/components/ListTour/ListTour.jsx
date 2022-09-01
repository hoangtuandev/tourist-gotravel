import { React, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import styles from './ListTour.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { isOpenDetailsTour } from '../DetailsTour/DetailsTourSlice';
import DetailsTour from '../DetailsTour/DetailsTour';

import * as api from '../../api';
import ItemTour from './ItemTour';
import {
    checkedAllDeparture,
    checkedAllPrice,
    checkedAllTime,
    handleSetTabMenuCurrentTour,
    maxPriceTours,
    paramsTourFilter,
    priceTourFilter,
    tabMenuCurrentTour,
} from '../../GlobalSlice';

const cx = classNames.bind(styles);

function ListTour() {
    const dispatch = useDispatch();
    const maxPriceTour = useSelector(maxPriceTours);
    const paramsFilter = useSelector(paramsTourFilter);
    const checkedPriceAll = useSelector(checkedAllPrice);
    const checkedDepartureAll = useSelector(checkedAllDeparture);
    const checkedTimeAll = useSelector(checkedAllTime);
    const tabMenuTour = useSelector(tabMenuCurrentTour);
    const openDetailsTour = useSelector(isOpenDetailsTour);
    const [listTour, setListTour] = useState([]);

    useEffect(() => {
        const { price, departure, time } = paramsFilter;
        console.log(price, departure, time);
        console.log(checkedPriceAll, checkedDepartureAll, checkedTimeAll);

        api.getTourByParamsFilter({
            maxPriceTour,
            price,
            departure,
            time,
            checkedPriceAll,
            checkedDepartureAll,
            checkedTimeAll,
        }).then((res) => {
            console.log(res.data);
        });
    }, [
        maxPriceTour,
        paramsFilter,
        checkedPriceAll,
        checkedDepartureAll,
        checkedTimeAll,
    ]);

    // useEffect(() => {
    //     const { price, departure, time } = paramsFilter;
    //     api.getTourByParamsFilter({
    //         minPrice: price[0],
    //         maxPrice: price[1],
    //         departure,
    //         time,
    //     }).then((res) => {
    //         // console.log(res.data);
    //         setListTour(res.data);
    //     });
    // }, [paramsFilter]);

    useEffect(() => {
        if (tabMenuTour.lht_ma === 'all') {
            api.getAllActiveTour().then((res) => {
                setListTour(res.data);
            });
        } else if (!tabMenuTour.lht_ma) {
            dispatch(
                handleSetTabMenuCurrentTour({
                    lht_ma: 'all',
                    lht_ten: 'Tất cả tour',
                })
            );
            api.getAllActiveTour().then((res) => {
                setListTour(res.data);
            });
        } else {
            api.getTourByTypeTourism({ type_tourism: tabMenuTour }).then(
                (res) => {
                    setListTour(res.data);
                }
            );
        }
    }, [tabMenuTour, dispatch]);

    return (
        <div className={cx('list-tour')}>
            <p className={cx('label-list')}>
                <span>{tabMenuTour.lht_ten}</span>
            </p>
            {listTour.length === 0 && (
                <div className={cx('empty-tourList')}>
                    <p>Không tìm thấy tour phù hợp!</p>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660285963/GoTravel/undraw_Explore_re_8l4v_lvunn9.png   "
                        alt=""
                    />
                </div>
            )}
            {listTour.length !== 0 && (
                <ul>
                    {listTour.map((tour, index) => (
                        <ItemTour key={index} tour={tour}></ItemTour>
                    ))}
                </ul>
            )}

            {openDetailsTour && <DetailsTour></DetailsTour>}
        </div>
    );
}

export default ListTour;
