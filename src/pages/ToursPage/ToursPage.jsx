import { React, Fragment, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';
import ListTour from '../../components/ListTour/ListTour';
import MenuTour from '../../components/MenuTour/MenuTour';

import * as api from '../../api';
import styles from './ToursPage.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function ToursPage() {
    // const location = useLocation();
    // const searchParams = location;
    // let params = new URLSearchParams(searchParams.search);
    // const typeTourims = params.get('tour');
    const [typeTourismList, setTypeTourismList] = useState([]);

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    // useEffect(() => {
    //     console.log(typeTourims);
    // }, [typeTourims]);

    useEffect(() => {
        api.getAllTypeTourism().then((res) => {
            setTypeTourismList(res.data);
        });
    }, []);

    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <div className={cx('tours-page')}>
                <Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl">
                        <div className={cx('content-page')}>
                            <MenuTour
                                typeTourismList={typeTourismList}
                            ></MenuTour>
                            <ListTour></ListTour>
                        </div>
                    </Container>
                </Fragment>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ToursPage;
