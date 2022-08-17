import { React } from 'react';
import classNames from 'classnames/bind';

import styles from './ToursPage.scss';
const cx = classNames.bind(styles);

function ToursPage() {
    return <div className={cx('tours-page')}>TOURS</div>;
}

export default ToursPage;
