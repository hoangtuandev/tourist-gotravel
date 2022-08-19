import { React, forwardRef } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

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

import styles from './DetailsTour.scss';
import { handleCloseDetailsTour, isOpenDetailsTour } from './DetailsTourSlice';
const cx = classNames.bind(styles);

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function DetailsTour() {
    const dispatch = useDispatch();
    const openDialog = useSelector(isOpenDetailsTour);
    return (
        <div>
            <Dialog
                fullScreen
                open={openDialog}
                onClose={() => dispatch(handleCloseDetailsTour())}
                TransitionComponent={Transition}
                className={cx('dialog')}
            >
                <AppBar sx={{ position: 'relative' }} className={cx('appbar')}>
                    <Toolbar className={cx('toolbar')}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="close"
                            className={cx('icon-button')}
                            onClick={() => dispatch(handleCloseDetailsTour())}
                        >
                            <CloseIcon className={cx('close-icon')} />
                        </IconButton>
                        <Typography
                            sx={{ ml: 2, flex: 1 }}
                            variant="h6"
                            component="div"
                            className={cx('typography')}
                        >
                            THÔNG TIN CHI TIẾT TOUR
                        </Typography>
                        <Button
                            autoFocus
                            color="inherit"
                            variant="outlined"
                            className={cx('button-close')}
                            onClick={() => dispatch(handleCloseDetailsTour())}
                        >
                            THOÁT
                        </Button>
                    </Toolbar>
                </AppBar>
                <div className={cx('details-tour')}></div>
            </Dialog>
        </div>
    );
}

export default DetailsTour;
