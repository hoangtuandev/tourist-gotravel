import * as React from 'react';
import classNames from 'classnames/bind';
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
    handleToggleLoading,
    handleToggleUpdateRatingTour,
    isLoading,
    openUpdateRatingtour,
} from './HistoryBookingSlice';
import { useState } from 'react';
import * as api from '../../api';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

export default function UpdateRating(props) {
    const { ratingTour } = props;
    const dispatch = useDispatch();
    const openUpdateDialog = useSelector(openUpdateRatingtour);
    const loading = useSelector(isLoading);
    // const [ratingTour, setRatingTour] = useState({});
    const [ratingValue, setRatingValue] = useState(0);
    const [ratingComment, setRatingComment] = useState('');

    useEffect(() => {
        setRatingValue(ratingTour.dgt_saodanhgia);
        setRatingComment(ratingTour.dgt_nhanxet);
    }, [ratingTour]);

    const handleSaveRatingTour = () => {
        dispatch(handleToggleLoading(true));
        const current = new Date();

        api.updateRatingTour({
            _id: ratingTour._id,
            dgt_thoigian: current,
            dgt_saodanhgia: ratingValue,
            dgt_nhanxet: ratingComment,
        }).then((res) => {
            dispatch(handleToggleLoading(false));
            dispatch(handleToggleUpdateRatingTour(false));
        });
    };

    return (
        <div className={cx('rating-tour')}>
            <Dialog
                className={cx('dialog-rating')}
                open={openUpdateDialog}
                onClose={() => dispatch(handleToggleUpdateRatingTour(false))}
            >
                <DialogTitle className="dialog-title">
                    ????nh gi?? tr???i nghi???m tour
                </DialogTitle>
                <DialogContent className={cx('dialog-content')}>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td className={cx('title')}>????nh gi??</td>
                                <td className={cx('content')}>
                                    {ratingValue !== undefined && (
                                        <Rating
                                            className={cx('half-rating')}
                                            defaultValue={3}
                                            value={ratingValue}
                                            onChange={(event, value) =>
                                                setRatingValue(value)
                                            }
                                        />
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('title')}>Nh???n x??t</td>
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
                            C???P NH???T
                        </Button>
                    )}
                    {!loading && (
                        <Button
                            variant="contained"
                            color="success"
                            className={cx(' button-save')}
                            onClick={() => handleSaveRatingTour()}
                        >
                            C???P NH???T
                        </Button>
                    )}
                    <Button
                        variant="contained"
                        color="error"
                        className={cx(' button-close')}
                        onClick={() =>
                            dispatch(handleToggleUpdateRatingTour(false))
                        }
                    >
                        ????NG
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
