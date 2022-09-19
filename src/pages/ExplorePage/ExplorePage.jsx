import { React, Fragment, useEffect } from 'react';
import classNames from 'classnames/bind';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';

import styles from './ExplorePage.scss';
import Advertisement from '../../components/Advertisement/Advertisement';

const cx = classNames.bind(styles);

function ExplorePage() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <div className={cx('explore-page')}>
                <Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl">
                        <div className={cx('content-page')}>
                            <Advertisement></Advertisement>
                        </div>
                    </Container>
                </Fragment>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ExplorePage;
