import { React, useState } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styles from './HistoryBooking.scss';
import {
    handleToggleAddRatingGuide,
    openAddRatingGuide,
} from './HistoryBookingSlice';
import GuideRatingDetails from './GuideRatingDetails';

const cx = classNames.bind(styles);

export default function AddGuideRating(props) {
    const { calendarGuide } = props;
    const dispatch = useDispatch();
    const openDialog = useSelector(openAddRatingGuide);

    return (
        <div className={cx('guides-rating-dialog')}>
            <Dialog
                className={cx('dialog-rating')}
                open={openDialog}
                onClose={() => dispatch(handleToggleAddRatingGuide(false))}
            >
                <DialogTitle className={cx('dialog-title')}>
                    Đánh giá hướng dẫn viên
                </DialogTitle>
                <DialogContent
                    className={cx('dialog-content dialog-content-guide')}
                >
                    {calendarGuide.ldt_huongdanvien.map((guide, index) => (
                        <GuideRatingDetails
                            key={index}
                            guide={guide}
                        ></GuideRatingDetails>
                    ))}
                </DialogContent>
                <DialogActions className={cx('button-groups')}>
                    <Button
                        variant="contained"
                        color="success"
                        className={cx(' button-save')}
                    >
                        LƯU
                    </Button>

                    <Button
                        variant="contained"
                        color="error"
                        className={cx(' button-close')}
                        onClick={() =>
                            dispatch(handleToggleAddRatingGuide(false))
                        }
                    >
                        ĐÓNG
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
