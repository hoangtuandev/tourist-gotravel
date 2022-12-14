import { React, forwardRef, Fragment, useState } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { GiTwoCoins } from 'react-icons/gi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './DetailsTour.scss';

import SliderImage from './SliderImage';
import ScheduleTour from './ScheduleTour';
import ServiceTour from './ServiceTour';
import TabsBox from './TabsBox';
import DepartureAnother from './DepartureAnother';
import {
    handleCloseDetailsTour,
    isOpenDetailsTour,
    tourSelected,
} from './DetailsTourSlice';
import {
    handleSetTourBooked,
    handleSetDepartureBooked,
} from '../../GlobalSlice';
import Cookies from 'universal-cookie';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const cookies = new Cookies();

function DetailsTour() {
    const user = cookies.get('user');
    const dispatch = useDispatch();
    const currentDate = new Date();
    const tour = useSelector(tourSelected);
    const openDialog = useSelector(isOpenDetailsTour);
    const [currentDepartures, setCurrentDepartures] = useState(
        tour.t_lichkhoihanh
    );
    const [departure, setDeparture] = useState(currentDepartures[0] || {});

    useEffect(() => {
        setCurrentDepartures(currentDepartures.filter(updateCurrentDepartures));
        setDeparture(currentDepartures.filter(updateCurrentDepartures)[0]);
    }, []);

    const updateCurrentDepartures = (departure) => {
        const start = new Date(departure.lkh_ngaykhoihanh);
        return start > currentDate;
    };

    const handleClickBookingTour = () => {
        if (!user) {
            window.location.href = '/dang-nhap';
        } else {
            window.location.href = `/dat-tour?tour=${tour.t_ma}&departure=${departure._id}`;
            dispatch(handleSetTourBooked(tour));
            dispatch(handleSetDepartureBooked(departure));
        }
    };

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
                            TH??NG TIN CHI TI???T TOUR
                        </Typography>
                        <Button
                            autoFocus
                            color="inherit"
                            variant="outlined"
                            className={cx('button-close')}
                            onClick={() => dispatch(handleCloseDetailsTour())}
                        >
                            THO??T
                        </Button>
                    </Toolbar>
                </AppBar>
                <Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl">
                        <div className={cx('details-tour')}>
                            <div className={cx('details-left')}>
                                <div className={cx('images-detail')}>
                                    <SliderImage></SliderImage>
                                </div>
                                <div className={cx('tourism')}>
                                    {tour.t_loaihinh.lht_ten}
                                </div>
                                <div className={cx('tour-name')}>
                                    {tour.t_ten}
                                </div>
                                <hr />
                                <hr />
                                <div className={cx('schedule-detail')}>
                                    <p className={cx('label-schedule')}>
                                        L???CH TR??NH TOUR
                                    </p>
                                    <ul className={cx('schedule-list')}>
                                        {tour.t_lichtrinhtour.map(
                                            (schedule, index) => (
                                                <ScheduleTour
                                                    key={index}
                                                    schedule={schedule}
                                                ></ScheduleTour>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <div>
                                    <TabsBox></TabsBox>
                                </div>
                            </div>
                            <div className={cx('details-right')}>
                                <div className={cx('sticky-div')}>
                                    <div className={cx('infor-tour')}>
                                        {currentDepartures.length !== 0 && (
                                            <Button
                                                color="error"
                                                variant="contained"
                                                className={cx('button-booking')}
                                                onClick={() =>
                                                    handleClickBookingTour()
                                                }
                                            >
                                                ?????T TOUR
                                            </Button>
                                        )}
                                        {currentDepartures.length === 0 && (
                                            <Button
                                                disabled
                                                color="primary"
                                                variant="contained"
                                                className={cx('button-booking')}
                                                onClick={() =>
                                                    handleClickBookingTour()
                                                }
                                            >
                                                L???CH KH???I H??NH ??ANG C???P NH???T
                                            </Button>
                                        )}
                                        <ul>
                                            <li>
                                                <span className={cx('label')}>
                                                    M?? tour
                                                </span>
                                                <span className={cx('centent')}>
                                                    {tour.t_ma}
                                                </span>
                                            </li>
                                            <li>
                                                <span className={cx('label')}>
                                                    Lo???i h??nh tour
                                                </span>
                                                <span className={cx('centent')}>
                                                    {tour.t_loaihinh.lht_ten}
                                                </span>
                                            </li>
                                            <li>
                                                <span className={cx('label')}>
                                                    S??? ng??y
                                                </span>
                                                <span className={cx('centent')}>
                                                    {tour.t_thoigian} ng??y{' '}
                                                    {tour.t_thoigian - 1} ????m
                                                </span>
                                            </li>
                                            <li>
                                                <span className={cx('label')}>
                                                    Ng??y kh???i h??nh
                                                </span>
                                                <span className={cx('centent')}>
                                                    {currentDepartures.length !==
                                                        0 &&
                                                        moment(
                                                            departure.lkh_ngaykhoihanh
                                                        ).format(
                                                            'DD / MM / YYYY'
                                                        )}
                                                    {currentDepartures.length ===
                                                        0 && '??ang c???p nh???t...'}
                                                </span>
                                            </li>
                                            <li>
                                                <span className={cx('label')}>
                                                    Ng??y k???t th??c
                                                </span>
                                                <span className={cx('centent')}>
                                                    {currentDepartures.length !==
                                                        0 &&
                                                        moment(
                                                            departure.lkh_ngayketthuc
                                                        ).format(
                                                            'DD / MM / YYYY'
                                                        )}
                                                    {currentDepartures.length ===
                                                        0 && '??ang c???p nh???t...'}
                                                </span>
                                            </li>
                                            <li className={cx('price-tour')}>
                                                <GiTwoCoins
                                                    className={cx('icon')}
                                                />{' '}
                                                <span>
                                                    {' '}
                                                    {tour.t_gia.toLocaleString(
                                                        'vi',
                                                        {
                                                            style: 'currency',
                                                            currency: 'VND',
                                                        }
                                                    )}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <hr />
                                    <hr />
                                    <ServiceTour></ServiceTour>
                                    <hr />
                                    <hr />
                                    <div className={cx('schedule-another')}>
                                        <p className={cx('label-schedule')}>
                                            L???CH KH???I H??NH S???P T???I
                                        </p>
                                        <ul className={cx('schedule-list')}>
                                            {currentDepartures.map(
                                                (departure, index) => (
                                                    <DepartureAnother
                                                        key={index}
                                                        departure={departure}
                                                    ></DepartureAnother>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Fragment>
            </Dialog>
        </div>
    );
}

export default DetailsTour;
