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
    handleToggleAddRatingGuide,
    handleToggleLoading,
    handleToggleSaveRatingGuide,
    isLoading,
    isSaved,
    openAddRatingGuide,
} from './HistoryBookingSlice';
import GuideRatingDetails from './GuideRatingDetails';

const cx = classNames.bind(styles);

export default function AddGuideRating(props) {
    const { calendarGuide } = props;
    const dispatch = useDispatch();
    const openDialog = useSelector(openAddRatingGuide);

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
        dispatch(handleToggleAddRatingGuide(false));
    };

    return (
        <div className={cx('guides-rating-dialog')}>
            <Dialog
                className={cx('dialog-rating')}
                open={openDialog}
                onClose={() => handleCloseDialog()}
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
                    {!loading && !successSave && (
                        <Button
                            variant="contained"
                            color="success"
                            className={cx(' button-save')}
                            onClick={() => handleSaveRatingGuide()}
                        >
                            LƯU
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
