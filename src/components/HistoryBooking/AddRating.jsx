import * as React from 'react';
import classNames from 'classnames/bind';
import Cookies from 'universal-cookie';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Rating from '@mui/material/Rating';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styles from './HistoryBooking.scss';
import {
    bookingSelected,
    handleToggleAddRatingTour,
    handleToggleLoading,
    isLoading,
    openAddRatingTour,
} from './HistoryBookingSlice';
import { useState } from 'react';
import * as api from '../../api';

const cx = classNames.bind(styles);
const cookies = new Cookies();

export default function AddRating() {
    const user = cookies.get('user');
    const dispatch = useDispatch();
    const openAddDialog = useSelector(openAddRatingTour);
    const loading = useSelector(isLoading);
    const booking = useSelector(bookingSelected);
    const [ratingValue, setRatingValue] = useState(0);
    const [ratingComment, setRatingComment] = useState('');

    const handleSaveRatingTour = () => {
        dispatch(handleToggleLoading(true));
        const current = new Date();
        const randomID = `DGT00${current.getTime()}`;

        api.createRatingTour({
            dgt_ma: randomID,
            dgt_khachdulich: user.others,
            dgt_tour: booking.bt_tour,
            dgt_thoigian: current,
            dgt_saodanhgia: ratingValue,
            dgt_nhanxet: ratingComment,
        }).then((res) => {
            dispatch(handleToggleLoading(false));
            dispatch(handleToggleAddRatingTour(false));
        });
    };

    return (
        <div className={cx('rating-tour')}>
            <Dialog
                className={cx('dialog-rating')}
                open={openAddDialog}
                onClose={() => dispatch(handleToggleAddRatingTour(false))}
            >
                <DialogTitle className="dialog-title">
                    Đánh giá trải nghiệm tour
                </DialogTitle>
                <DialogContent className={cx('dialog-content')}>
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
                                        onChange={(e) =>
                                            setRatingComment(e.target.value)
                                        }
                                    ></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </DialogContent>
                <DialogActions className={cx('button-groups')}>
                    {loading && (
                        <Button
                            disabled
                            variant="contained"
                            color="success"
                            className={cx(' button-save')}
                            onClick={() => handleSaveRatingTour()}
                        >
                            <CircularProgress
                                color="inherit"
                                size={22}
                                className={cx('circular-progress')}
                            />
                            LƯU
                        </Button>
                    )}
                    {!loading && (
                        <Button
                            variant="contained"
                            color="success"
                            className={cx(' button-save')}
                            onClick={() => handleSaveRatingTour()}
                        >
                            LƯU
                        </Button>
                    )}
                    <Button
                        variant="contained"
                        color="error"
                        className={cx(' button-close')}
                        onClick={() =>
                            dispatch(handleToggleAddRatingTour(false))
                        }
                    >
                        ĐÓNG
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
