import { React } from 'react';
import classNames from 'classnames/bind';
import InputHints from 'react-input-hints';
import { GoSearch } from 'react-icons/go';

import styles from './Header.scss';
import AccountMenu from './AccountMenu';
import Cookies from 'universal-cookie';
import ButtonUser from './ButtonUser';

const cx = classNames.bind(styles);
const cookies = new Cookies();

function Header() {
    const user = cookies.get('user');
    return (
        <div className={cx('header')}>
            <div className={cx('header-logo')}>
                <img
                    src="https://res.cloudinary.com/phtuandev/image/upload/v1660352742/GoTravel/24324_ihmxj2.png"
                    alt=""
                />
            </div>
            <div className={cx('header-search')}>
                <InputHints
                    placeholders={['Nhập nơi bạn muốn đến...']}
                    className={cx('text-field')}
                />
                <label className={cx('label')}>
                    <GoSearch />
                </label>
            </div>
            <div className={cx('header-user')}>
                {user && <AccountMenu></AccountMenu>}
                {!user && <ButtonUser></ButtonUser>}
                {/* <Avatar
                    alt="Remy Sharp"
                    src="https://res.cloudinary.com/phtuandev/image/upload/v1660267332/GoTravel/default_user_nmc2tx.png"
                    sx={{ width: 45, height: 45 }}
                /> */}
            </div>
        </div>
    );
}

export default Header;
