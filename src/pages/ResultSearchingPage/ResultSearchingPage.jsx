import { React, Fragment } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

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

                        {resultSearching.length === 0 && (
                            <div className={cx('empty-tourList')}>
                                <p>Không tìm thấy tour phù hợp!</p>
                                <img
                                    src="https://res.cloudinary.com/phtuandev/image/upload/v1660285963/GoTravel/undraw_Explore_re_8l4v_lvunn9.png   "
                                    alt=""
                                />
                            </div>
                        )}
                        {resultSearching.length !== 0 && (
                            <ul className={cx('list-tour')}>
                                {resultSearching.map((tour, index) => (
                                    <TourItem
                                        key={index}
                                        tour={tour}
                                    ></TourItem>
                                ))}
                            </ul>
                        )}
                    </div>
                </Container>
            </Fragment>
            {openViewDialog && <DetailsTour></DetailsTour>}
        </div>
    );
}

export default ResultSearchingPage;
