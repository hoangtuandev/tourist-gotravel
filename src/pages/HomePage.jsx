import { React, Fragment } from 'react';
import classNames from 'classnames/bind';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

import styles from './HomePage.scss';
import Banner from '../components/Banner/Banner';
import PreferDestination from '../components/PreferDestination/PreferDestination';
import CatagoryHome from '../components/CatagoryHome/CatagoryHome';

const cx = classNames.bind(styles);

function HomePage() {
    return (
        <div className={cx('home-page')}>
            <Header></Header>
            <Sidebar></Sidebar>
            <div className={cx('home')}>
                <Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl">
                        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
                        <Banner></Banner>
                        <CatagoryHome></CatagoryHome>
                        <PreferDestination></PreferDestination>
                    </Container>
                </Fragment>
            </div>
        </div>
    );
}

export default HomePage;
