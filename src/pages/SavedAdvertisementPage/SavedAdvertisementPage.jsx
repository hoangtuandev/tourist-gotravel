import { React, useEffect, Fragment } from 'react';
import classNames from 'classnames/bind';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import styles from './SavedAdvertisementPage.scss';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import SavedAdvertisement from '../../components/Advertisement/SavedAdvertisement';
const cx = classNames.bind(styles);

function SavedAdvertisementPage() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <div className={cx('saved-advertisement-page')}>
                <Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl">
                        <SavedAdvertisement></SavedAdvertisement>
                    </Container>
                </Fragment>
            </div>
        </div>
    );
}

export default SavedAdvertisementPage;
