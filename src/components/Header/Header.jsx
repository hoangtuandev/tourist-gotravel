import { React } from 'react';
import classNames from 'classnames/bind';

import Avatar from '@mui/material/Avatar';
import { TbSpeedboat } from 'react-icons/tb';

import styles from './Header.scss';
const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header')}>
            <div className={cx('header-logo')}>
                <img
                    src="https://res.cloudinary.com/phtuandev/image/upload/v1660352742/GoTravel/24324_ihmxj2.png"
                    alt=""
                />
            </div>
            <div className={cx('header-search')}>
                <input
                    type="text"
                    placeholder="Nhập từ khóa tìm kiếm..."
                    className={cx('text-field')}
                />
                <label className={cx('label')}>
                    <TbSpeedboat />
                </label>
            </div>
            <div className={cx('header-user')}>
                <Avatar
                    alt="Remy Sharp"
                    src="https://res.cloudinary.com/phtuandev/image/upload/v1660267332/GoTravel/default_user_nmc2tx.png"
                    sx={{ width: 45, height: 45 }}
                />
            </div>
        </div>
    );
}

export default Header;
