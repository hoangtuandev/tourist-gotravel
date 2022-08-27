import { React } from 'react';
import classNames from 'classnames/bind';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import styles from './Header.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ButtonUser() {
    return (
        <div className={cx('button-user')}>
            <ButtonGroup
                className={cx('button-group')}
                disableElevation
                variant="outlined"
                aria-label="outlined button group"
            >
                <Link to="/dang-ky" className={cx('link-router')}>
                    <Button className={cx('button-signup')}>ĐĂNG KÝ</Button>
                </Link>
                <Link to="/dang-nhap" className={cx('link-router')}>
                    <Button className={cx('button-signin')}>ĐĂNG NHẬP</Button>
                </Link>
            </ButtonGroup>
        </div>
    );
}

export default ButtonUser;
