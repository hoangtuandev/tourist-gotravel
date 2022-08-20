import { React } from 'react';
import classNames from 'classnames/bind';

import { ImTicket } from 'react-icons/im';
import { AiOutlineFileProtect } from 'react-icons/ai';
import { MdFastfood, MdOutlineContactSupport } from 'react-icons/md';
import { FaCar } from 'react-icons/fa';
import { TbArrowsDoubleSwNe } from 'react-icons/tb';
import { SiHomeassistantcommunitystore } from 'react-icons/si';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './DetailsTour.scss';

const cx = classNames.bind(styles);

function ServiceTour() {
    return (
        <div className={cx('service-tour')}>
            <p className={cx('label-service')}>DỊCH VỤ TOUR</p>
            <ul className={cx('service-list')}>
                <li>
                    <ImTicket className={cx('icon')} />
                    <span>Vé tham quan</span>
                </li>

                <li>
                    <MdFastfood className={cx('icon')} />
                    <span>Dịch vụ ăn uống</span>
                </li>
                <li>
                    <SiHomeassistantcommunitystore className={cx('icon')} />
                    <span>Dịch vụ lưu trú</span>
                </li>
                <li>
                    <FaCar className={cx('icon')} />
                    <span>Phương tiện di chuyển</span>
                </li>
                <li>
                    <TbArrowsDoubleSwNe className={cx('icon')} />
                    <span>Dịch vụ đưa đón</span>
                </li>
                <li>
                    <AiOutlineFileProtect className={cx('icon')} />
                    <span>Bảo hiểm</span>
                </li>
                <li>
                    <MdOutlineContactSupport className={cx('icon')} />
                    <span>Hỗ trợ đặt vé</span>
                </li>
            </ul>
        </div>
    );
}

export default ServiceTour;
