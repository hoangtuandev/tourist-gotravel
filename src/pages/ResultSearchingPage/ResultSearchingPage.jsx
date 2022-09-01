import { React, useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { resultSearchingTour } from '../../GlobalSlice';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './ResultSearchingPage.scss';
import TourItem from './TourItem';
import DetailsTour from '../../components/DetailsTour/DetailsTour';
import { isOpenDetailsTour } from '../../components/DetailsTour/DetailsTourSlice';
const cx = classNames.bind(styles);

function ResultSearchingPage() {
    const resultSearching = useSelector(resultSearchingTour);
    const openViewDialog = useSelector(isOpenDetailsTour);
    console.log(resultSearching);
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <Fragment>
                <CssBaseline />
                <Container maxWidth="xl">
                    <div className={cx('result-searching-page')}>
                        <p className={cx('title')}>
                            <span>Kết quả tìm kiếm</span>
                        </p>
                        <ul className={cx('list-tour')}>
                            {resultSearching.map((tour, index) => (
                                <TourItem key={index} tour={tour}></TourItem>
                            ))}
                        </ul>
                    </div>
                </Container>
            </Fragment>
            {openViewDialog && <DetailsTour></DetailsTour>}
        </div>
    );
}

export default ResultSearchingPage;
