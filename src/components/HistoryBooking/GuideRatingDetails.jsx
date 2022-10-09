import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import Rating from '@mui/material/Rating';
import styles from './HistoryBooking.scss';

import { Fragment } from 'react';
import { ratingGuideList } from './HistoryBookingSlice';

const cx = classNames.bind(styles);

export default function GuideRatingDetails(props) {
    const dispatch = useDispatch();
    const ratingList = useSelector(ratingGuideList);
    const { guide } = props;
    const [ratingValue, setRatingValue] = useState(0);
    const [ratingComment, setRatingComment] = useState('');

    return (
        <Fragment>
            <div className={cx('guides-tab')}>
                <div className={cx('tab-item')}>
                    <img src={guide.tkhdv_anhdaidien} alt="" />
                    <span> {guide.tkhdv_huongdanvien.hdv_hoten}</span>
                </div>
            </div>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td className={cx('title')}>Đánh giá</td>
                        <td className={cx('content')}>
                            <Rating
                                className={cx('half-rating')}
                                defaultValue={0}
                                value={ratingValue}
                                onChange={(event, value) =>
                                    setRatingValue(value)
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={cx('title')}>Nhận xét</td>
                        <td className={cx('content')}>
                            <textarea
                                cols="20"
                                rows="5"
                                value={ratingComment}
                                placeholder="Nhận xét của bạn về hướng dẫn viên..."
                                onChange={(e) =>
                                    setRatingComment(e.target.value)
                                }
                            ></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
}
