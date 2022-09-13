import { React, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import styles from './ListTour.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { isOpenDetailsTour } from '../DetailsTour/DetailsTourSlice';
import DetailsTour from '../DetailsTour/DetailsTour';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import * as api from '../../api';
import ItemTour from './ItemTour';
import {
    handleSetTabMenuCurrentTour,
    paramsTourFilter,
    tabMenuCurrentTour,
} from '../../GlobalSlice';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function ListTour() {
    const dispatch = useDispatch();
    const tabMenuTour = useSelector(tabMenuCurrentTour);
    const openDetailsTour = useSelector(isOpenDetailsTour);
    const paramsFilter = useSelector(paramsTourFilter);
    const [allTour, setAllTour] = useState([]);
    const [listTour, setListTour] = useState([]);
    const [sortValue, setSortValue] = useState(0);

    useEffect(() => {
        api.getAllActiveTour().then((res) => {
            setAllTour(res.data);
        });
    }, []);

    useEffect(() => {
        api.filterTourByParams({
            params: paramsFilter,
            typeTourism: tabMenuTour,
        }).then((res) => {
            setListTour(res.data);
        });
    }, [paramsFilter, tabMenuTour]);

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

    const handleChangeSortValue = (event, newAlignment) => {
        setSortValue(newAlignment);

        if (newAlignment === 1) {
            listTour.sort((a, b) => parseFloat(a.t_gia) - parseFloat(b.t_gia));
        } else if (newAlignment === -1) {
            listTour.sort((a, b) => parseFloat(b.t_gia) - parseFloat(a.t_gia));
        }
    };

    return (
        <Fragment>
            <div className={cx('filter-tours')}>
                <ToggleButtonGroup
                    color="error"
                    value={sortValue}
                    exclusive
                    onChange={handleChangeSortValue}
                    aria-label="Platform"
                    className={cx('toggle-button-group')}
                >
                    <ToggleButton value={1}>
                        {allTour.length > 0 && allTour[0].t_gia < allTour[1]
                            ? 'Giá tour giảm dần'
                            : 'Giá tour tăng dần'}
                    </ToggleButton>
                    <ToggleButton value={-1}>
                        {allTour.length > 0 && allTour[0].t_gia < allTour[1]
                            ? 'Giá tour tăng dần'
                            : 'Giá tour giảm dần'}
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
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
        </Fragment>
    );
}

export default ListTour;
