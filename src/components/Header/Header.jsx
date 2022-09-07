import { React } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import InputHints from 'react-input-hints';
import { GoSearch } from 'react-icons/go';

import styles from './Header.scss';
import AccountMenu from './AccountMenu';
import Cookies from 'universal-cookie';
import ButtonUser from './ButtonUser';
import { Link } from 'react-router-dom';
import {
    handleChangeKeySearching,
    handleSetSearchingTour,
    keySearching,
} from '../../GlobalSlice';
import * as api from '../../api';

const cx = classNames.bind(styles);
const cookies = new Cookies();

function Header() {
    const user = cookies.get('user');
    const dispatch = useDispatch();
    const keySearch = useSelector(keySearching);

    const handleSearchingTour = () => {
        api.searchingTour({ keySearch }).then((res) => {
            dispatch(handleSetSearchingTour(res.data));
            dispatch(handleChangeKeySearching(''));
        });
    };

    return (
        <div className={cx('header')}>
            <div className={cx('header-logo')}>
                <Link to="/" className={cx('link-router')}>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660352742/GoTravel/24324_ihmxj2.png"
                        alt=""
                    />
                </Link>
            </div>
            <div className={cx('header-search')}>
                <InputHints
                    placeholders={['Nhập nơi bạn muốn đến...']}
                    className={cx('text-field')}
                    value={keySearch}
                    onChange={(e) =>
                        dispatch(handleChangeKeySearching(e.target.value))
                    }
                />
                <Link to="/tim-kiem" className={cx('link-router')}>
                    <label
                        className={cx('label')}
                        onClick={() => handleSearchingTour()}
                    >
                        <GoSearch />
                    </label>
                </Link>
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
