import * as React from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { handleSuccessPaymentTour, successPayment } from '../../GlobalSlice';
import styles from './BookingTour.scss';

const cx = classNames.bind(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function SuccessPayment() {
    const dispatch = useDispatch();
    const isSuccessPay = useSelector(successPayment);
    return (
        <div>
            {/* <Button variant="outlined">Open full-screen dialog</Button> */}
            <Dialog
                fullScreen
                TransitionComponent={Transition}
                open={isSuccessPay}
                onClose={() => dispatch(handleSuccessPaymentTour(false))}
                className={cx('dialog')}
            >
                <AppBar sx={{ position: 'relative' }} className={cx('appbar')}>
                    <Toolbar className={cx('toolbar')}>
                        <Link to="/tours" className={cx('link-router')}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="close"
                                className={cx('icon-button')}
                                onClick={() =>
                                    dispatch(handleSuccessPaymentTour(false))
                                }
                            >
                                <CloseIcon className={cx('close-icon')} />
                            </IconButton>
                        </Link>
                        <Typography
                            sx={{ ml: 2, flex: 1 }}
                            variant="h6"
                            component="div"
                            className={cx('typography')}
                        >
                            THANH TO??N TH??NH C??NG
                        </Typography>
                        <Link to="/tours" className={cx('link-router')}>
                            <Button
                                autoFocus
                                color="inherit"
                                className={cx('button-close')}
                                onClick={() =>
                                    dispatch(handleSuccessPaymentTour(false))
                                }
                            >
                                THO??T
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
                <div className={cx('control')}>
                    <p>?????T TOUR TH??NH C??NG !</p>
                    <div className="button-control">
                        <Link to="/" className={cx('link-router')}>
                            <Button variant="outlined">V??? TRANG CH???</Button>
                        </Link>
                        <Link
                            to="/lich-su-dat-tour"
                            className={cx('link-router')}
                        >
                            <Button variant="contained">XEM TOUR ?????T</Button>
                        </Link>
                    </div>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1662259138/GoTravel/undraw_Done_re_oak4_llrfyg.png"
                        alt=""
                    />
                </div>
            </Dialog>
        </div>
    );
}
