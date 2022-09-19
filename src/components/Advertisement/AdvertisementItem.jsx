import { React } from 'react';
import classNames from 'classnames/bind';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import Favorite from '@mui/icons-material/Favorite';
import styles from './Advertisement.scss';

const cx = classNames.bind(styles);

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function AdvertisementItem(props) {
    const { advertisement } = props;
    return (
        <li className={cx('advertisement-item')}>
            <div className={cx('images-list')}>
                <img src={advertisement.bvqb_hinhanh[0]} alt="" />
            </div>
            <div className={cx('detailts')}>
                <div className={cx('title')}>
                    <PinDropIcon className={cx('icon')} />
                    <span>{advertisement.bvqb_tieude}</span>
                </div>
                <div className={cx('content')}>
                    {advertisement.bvqb_noidung}
                </div>
                <div className={cx('interact')}>
                    <div className={cx('interact-heart')}>
                        <Checkbox
                            className={cx('checkbox-heart')}
                            {...label}
                            icon={
                                <FavoriteBorder
                                    className={cx('favorite-border')}
                                />
                            }
                            checkedIcon={
                                <Favorite className={cx('favorite')} />
                            }
                        />
                        <span>{advertisement.bvqb_luotthich}</span>
                    </div>
                    <div className={cx('interact-orther')}>
                        <Checkbox
                            className={cx('checkbox-heart')}
                            {...label}
                            icon={
                                <BookmarkBorderIcon
                                    className={cx('bookmark-border')}
                                />
                            }
                            checkedIcon={
                                <BookmarkAddedIcon className={cx('bookmark')} />
                            }
                        />
                    </div>
                </div>
            </div>
        </li>
    );
}

export default AdvertisementItem;
