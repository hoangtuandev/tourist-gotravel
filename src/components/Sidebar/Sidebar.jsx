import { React } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { FaHome } from 'react-icons/fa';
import { GiSailboat, GiShare } from 'react-icons/gi';
import { BiBookBookmark, BiLandscape } from 'react-icons/bi';

import styles from './Sidebar.scss';
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('sidebar')}>
            <ul className={cx('sidebar-menu')}>
                <Link to={'/trang-chu'} className={cx('link-router')}>
                    <li>
                        <div className={cx('hover-box')}>Trang chủ</div>
                        <FaHome className={cx('icon')} />
                    </li>
                </Link>
                <Link to={'/huong-dan'} className={cx('link-router')}>
                    <li>
                        <div className={cx('hover-box')}>Hướng dẫn</div>
                        <BiBookBookmark className={cx('icon')} />
                    </li>
                </Link>
                <Link to={'/tours'} className={cx('link-router')}>
                    <li>
                        <div className={cx('hover-box')}>Tour</div>
                        <GiSailboat className={cx('icon')} />
                    </li>
                </Link>
                <li>
                    <div className={cx('hover-box')}>Chia sẻ</div>
                    <GiShare className={cx('icon')} />
                </li>
                <li>
                    <div className={cx('hover-box')}>Địa điểm</div>
                    <BiLandscape className={cx('icon')} />
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
