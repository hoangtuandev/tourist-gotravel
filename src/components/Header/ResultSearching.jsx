import { React, useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import styles from './Header.scss';
import { resultSearchingTour } from '../../GlobalSlice';

const cx = classNames.bind(styles);

function ResultSearching() {
    const resultSearching = useSelector(resultSearchingTour);
    console.log(resultSearching);
    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <div className={cx('result-searching')}>RESULT</div>
            </Container>
        </Fragment>
    );
}

export default ResultSearching;
