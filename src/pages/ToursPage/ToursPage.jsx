import { React, Fragment } from 'react';
import classNames from 'classnames/bind';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';
import ListTour from '../../components/ListTour/ListTour';
import MenuTour from '../../components/MenuTour/MenuTour';

import styles from './ToursPage.scss';
import 'react-datepicker/dist/react-datepicker.css';

const cx = classNames.bind(styles);

function ToursPage() {
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <div className={cx('tours-page')}>
                <Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl">
                        <div className={cx('content-page')}>
                            <MenuTour></MenuTour>
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
