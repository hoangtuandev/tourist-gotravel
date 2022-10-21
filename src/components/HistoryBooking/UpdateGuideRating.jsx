import { React } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styles from './HistoryBooking.scss';
import {
    handleSuccessSaveRatingGuide,
    handleToggleLoading,
    handleToggleSaveRatingGuide,
    handleToggleUpdateRatingGuide,
    isLoading,
    isSaved,
    openUpdateRatingGuide,
} from './HistoryBookingSlice';
import UpdateGuideRatingDetails from './UpdateGuideRatingDetails';

const cx = classNames.bind(styles);

export default function UpdateGuideRating(props) {
    const { ratingGuide } = props;
    const dispatch = useDispatch();
    const openDialog = useSelector(openUpdateRatingGuide);
    const loading = useSelector(isLoading);
    const successSave = useSelector(isSaved);

    const handleSaveRatingGuide = async () => {
        dispatch(handleToggleLoading(true));
        dispatch(handleToggleSaveRatingGuide(true));
    };

    const handleCloseDialog = () => {
        dispatch(handleToggleLoading(false));
        dispatch(handleSuccessSaveRatingGuide(false));
        dispatch(handleToggleSaveRatingGuide(false));
        dispatch(handleToggleUpdateRatingGuide(false));
    };

    return (
        <div className={cx('guides-rating-dialog')}>
            <Dialog
                className={cx('dialog-rating')}
                open={openDialog}
                onClose={() => handleCloseDialog()}
            >
                <DialogTitle className={cx('dialog-title')}>
                    Cập nhật đánh giá hướng dẫn viên
                </DialogTitle>
                <DialogContent
                    className={cx('dialog-content dialog-content-guide')}
                >
                    {ratingGuide.map((rating, index) => (
                        <UpdateGuideRatingDetails
                            key={index}
                            rating={rating}
                        ></UpdateGuideRatingDetails>
                    ))}
                </DialogContent>
                <DialogActions className={cx('button-groups')}>
                    {!loading && !successSave && (
                        <Button
                            variant="contained"
                            color="success"
                            className={cx(' button-save')}
                            onClick={() => handleSaveRatingGuide()}
                        >
                            CẬP NHẬT
                        </Button>
                    )}
                    {loading && !successSave && (
                        <Button
                            disabled
                            variant="contained"
                            color="success"
                            className={cx(' button-save')}
                        >
                            ĐANG LƯU
                        </Button>
                    )}
                    {successSave && isLoading && (
                        <Button
                            variant="contained"
                            color="primary"
                            className={cx(' button-save')}
                        >
                            ĐÃ LƯU
                        </Button>
                    )}

                    <Button
                        variant="contained"
                        color="error"
                        className={cx(' button-close')}
                        onClick={() => handleCloseDialog()}
                    >
                        ĐÓNG
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
