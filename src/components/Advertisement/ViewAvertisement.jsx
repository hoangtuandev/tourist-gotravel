import { React, Fragment, forwardRef } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import Favorite from '@mui/icons-material/Favorite';
import styles from './Advertisement.scss';
import {
    advertisementSelected,
    handleToggleViewAdvertisement,
    viewAdvertisement,
} from './AdvertisementSlice';

const cx = classNames.bind(styles);
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewAdvertisement(props) {
    // const { setAdvertisementList } = props;
    const dispatch = useDispatch();
    const openView = useSelector(viewAdvertisement);
    const advertisement = useSelector(advertisementSelected);

    const filterContent = (item) => item !== '';

    const contentAdvertisement = advertisement.bvqb_noidung
        .split('\n')
        .filter(filterContent);

    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Dialog
                    fullScreen
                    TransitionComponent={Transition}
                    className={cx('dialog')}
                    open={openView}
                    onClose={() =>
                        dispatch(handleToggleViewAdvertisement(false))
                    }
                >
                    <AppBar
                        sx={{ position: 'relative' }}
                        className={cx('appbar')}
                    >
                        <Toolbar className={cx('toolbar')}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="close"
                                className={cx('icon-button')}
                                onClick={() =>
                                    dispatch(
                                        handleToggleViewAdvertisement(false)
                                    )
                                }
                            >
                                <CloseIcon className={cx('close-icon')} />
                            </IconButton>
                            <Typography
                                sx={{ ml: 2, flex: 1 }}
                                variant="h6"
                                component="div"
                                className={cx('typography')}
                            >
                                THÔNG TIN CHI TIẾT
                            </Typography>

                            <Button
                                autoFocus
                                color="inherit"
                                className={cx('btn-decline')}
                                onClick={() =>
                                    dispatch(
                                        handleToggleViewAdvertisement(false)
                                    )
                                }
                            >
                                THOÁT
                            </Button>
                        </Toolbar>
                    </AppBar>

                    <div className={cx('view-advertisement')}>
                        <ul className={cx('infor-advertisement')}>
                            <li>
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
                            </li>
                            <li>
                                <Checkbox
                                    className={cx('checkbox-save')}
                                    {...label}
                                    icon={
                                        <BookmarkBorderIcon
                                            className={cx('bookmark-border')}
                                        />
                                    }
                                    checkedIcon={
                                        <BookmarkAddedIcon
                                            className={cx('bookmark')}
                                        />
                                    }
                                />
                            </li>
                        </ul>

                        <p className={cx('title-advetisement')}>
                            <PinDropIcon className={cx('icon')} />
                            <span>{advertisement.bvqb_tieude}</span>
                        </p>
                        <div className={cx('content-advertisement')}>
                            <p className={cx('images-advertisement')}>
                                <img
                                    src={advertisement.bvqb_hinhanh[0]}
                                    alt=""
                                />
                            </p>

                            {contentAdvertisement.map((paragraph, index) => (
                                <div key={index} className={cx('paragraph')}>
                                    <p>{paragraph}</p>
                                    <div className={cx('image')}>
                                        {advertisement.bvqb_hinhanh[
                                            index + 1
                                        ] && (
                                            <img
                                                src={
                                                    advertisement.bvqb_hinhanh[
                                                        index + 1
                                                    ]
                                                }
                                                alt=""
                                            />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Dialog>
            </Container>
        </Fragment>
    );
}
