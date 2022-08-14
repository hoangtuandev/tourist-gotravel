import { React, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { BiCalendar } from 'react-icons/bi';

import styles from './CatagoryHome.scss';

const cx = classNames.bind(styles);

function CatagoryHome() {
    return (
        <div className={cx('catagory-home')}>
            <ul className={cx('catagory-menu')}>
                <li className={cx('menu-item')}>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660466431/GoTravel/457345345_xbayy0.png"
                        alt=""
                    />
                    <div className={cx('label-item')}>Tour du lịch</div>
                </li>
                <li className={cx('menu-item')}>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660465327/GoTravel/5983475_rjzqlw.png"
                        alt=""
                    />
                    <div className={cx('label-item')}>Tour du lịch</div>
                </li>
                <li className={cx('menu-item')}>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660465322/GoTravel/67856345_c6mwox.png"
                        alt=""
                    />
                    <div className={cx('label-item')}>Tour du lịch</div>
                </li>
                <li className={cx('menu-item')}>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660465327/GoTravel/5983475_rjzqlw.png"
                        alt=""
                    />
                    <div className={cx('label-item')}>Tour du lịch</div>
                </li>
                <li className={cx('menu-item')}>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660466050/GoTravel/9563586_wz42sn.png"
                        alt=""
                    />
                    <div className={cx('label-item')}>Tour du lịch</div>
                </li>
            </ul>
        </div>
    );
}

export default CatagoryHome;
