import { React, useEffect, Fragment } from 'react';
import classNames from 'classnames/bind';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import styles from './HistorySharePostsPage.scss';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import HistorySharePosts from '../../components/HistorySharePosts/HistorySharePosts';

const cx = classNames.bind(styles);

function HistorySharePostsPage() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <div className={cx('history-share-posts-page')}>
                <Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl">
                        <HistorySharePosts></HistorySharePosts>
                    </Container>
                </Fragment>
            </div>
        </div>
    );
}

export default HistorySharePostsPage;
