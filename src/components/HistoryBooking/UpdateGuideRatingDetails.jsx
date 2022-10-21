import { React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import Rating from '@mui/material/Rating';
import styles from './HistoryBooking.scss';
import { Fragment } from 'react';
import * as api from '../../api';
import {
    handleSuccessSaveRatingGuide,
    handleToggleLoading,
    isSaveRatingGuide,
} from './HistoryBookingSlice';

const cx = classNames.bind(styles);

export default function UpdateGuideRatingDetails(props) {
    const dispatch = useDispatch();

    const isSaving = useSelector(isSaveRatingGuide);
    const { rating } = props;
    const [ratingValue, setRatingValue] = useState(rating.dghdv_saodanhgia);
    const [ratingComment, setRatingComment] = useState(rating.dghdv_nhanxet);

    useEffect(() => {
        if (isSaving === true && ratingValue) {
            api.updateRatingGuide({
                _id: rating._id,
                dghdv_saodanhgia: ratingValue,
                dghdv_nhanxet: ratingComment,
            }).then((res) => {
                api.updateStartGuide({
                    username: rating.dghdv_huongdanvien.tkhdv_tendangnhap,
                }).then((res) => {
                    dispatch(handleToggleLoading(false));
                    dispatch(handleSuccessSaveRatingGuide(true));
                });
            });
        }
    }, [isSaving]);

    return (
        <Fragment>
            <div className={cx('guides-tab')}>
                <div className={cx('tab-item')}>
                    <img
                        src={rating.dghdv_huongdanvien.tkhdv_anhdaidien}
                        alt=""
                    />
                    <span>
                        {rating.dghdv_huongdanvien.tkhdv_huongdanvien.hdv_hoten}
                    </span>
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
