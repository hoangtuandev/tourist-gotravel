import * as React from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import moment from 'moment';
import Cookies from 'universal-cookie';
import { useSelector, useDispatch } from 'react-redux';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import StarIcon from '@mui/icons-material/Star';
import Slide from '@mui/material/Slide';
import * as api from '../../api';
import styles from './HistoryBooking.scss';
import {
    bookingSelected,
    handleToggleAddRatingGuide,
    handleToggleAddRatingTour,
    handleToggleUpdateRatingGuide,
    handleToggleUpdateRatingTour,
    handleToggleViewHistoryBooking,
    openAddRatingGuide,
    openUpdateRatingGuide,
    openViewBooking,
} from './HistoryBookingSlice';
import UpdateRating from './UpdateRating';
import AddRating from './AddRating';
import AddGuideRating from './AddGuideRating';
import UpdateGuideRating from './UpdateGuideRating';

const cx = classNames.bind(styles);
const cookies = new Cookies();

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewBookingTour(props) {
    const user = cookies.get('user');
    const dispatch = useDispatch();
    const openView = useSelector(openViewBooking);
    const openAddGuide = useSelector(openAddRatingGuide);
    const openUpdateGuide = useSelector(openUpdateRatingGuide);
    const booking = useSelector(bookingSelected);
    const [ratingTour, setRatingTour] = useState({});
    const [ratingGuide, setRatingGuide] = useState([]);
    const [calendarGuide, setCalendarGuide] = useState(null);

    React.useEffect(() => {
        api.getCalendarGuideByDeparture({
            _id: booking.bt_lichkhoihanh._id,
        }).then((res) => {
            setCalendarGuide(res.data[0]);
        });
    }, [booking]);

    const handleRatingTour = () => {
        api.getRatingTourByTourist({
            tourist: user.others,
            tour: booking.bt_tour,
        }).then((res) => {
            if (res.data.length !== 0) {
                dispatch(handleToggleUpdateRatingTour(true));
                setRatingTour(res.data[0]);
            } else {
                dispatch(handleToggleAddRatingTour(true));
                setRatingTour(res.data[0]);
            }
        });
    };

    const handleRatingGuide = () => {
        api.getRatingGuideByBooking({ _id: booking._id }).then((res) => {
            if (res.data.length !== 0) {
                setRatingGuide(res.data);
                dispatch(handleToggleUpdateRatingGuide(true));
            } else {
                dispatch(handleToggleAddRatingGuide(true));
            }
        });
    };

    // const handleRatingGuide = () => {
    //     dispatch(handleToggleAddRatingGuide(true));
    // };

    return (
        <div>
            <Dialog
                fullScreen
                TransitionComponent={Transition}
                className={cx('dialog')}
                open={openView}
                onClose={() => dispatch(handleToggleViewHistoryBooking(false))}
            >
                <AppBar sx={{ position: 'relative' }} className={cx('appbar')}>
                    <Toolbar className={cx('toolbar')}>
                        {/* <Link to="/booking-tour" className={cx('link-router')}> */}
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="close"
                            className={cx('icon-button')}
                            onClick={() =>
                                dispatch(handleToggleViewHistoryBooking(false))
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
                                dispatch(handleToggleViewHistoryBooking(false))
                            }
                        >
                            THOÁT
                        </Button>
                    </Toolbar>
                </AppBar>

                <div className={cx('detail-booking')}>
                    {booking.bt_trangthai === 4 && calendarGuide && (
                        <div className={cx('rating-buttons')}>
                            <ButtonGroup
                                variant="contained"
                                aria-label="outlined primary button group"
                                className={cx('rating-button-group')}
                            >
                                <Button
                                    color="error"
                                    onClick={() => handleRatingTour()}
                                >
                                    <StarIcon className={cx('icon')} />
                                    ĐÁNH GIÁ TRẢI NGHIỆM TOUR
                                </Button>
                                <Button
                                    color="success"
                                    onClick={() => handleRatingGuide()}
                                >
                                    <StarIcon className={cx('icon')} />
                                    ĐÁNH GIÁ HƯỚNG DẪN VIÊN
                                </Button>
                            </ButtonGroup>
                        </div>
                    )}

                    <div className={cx('infor-booking')}>
                        <div className={cx('infor-item')}>
                            <p className={cx('label')}>Mã:</p>
                            <p>{booking.bt_ma}</p>
                        </div>
                        <div className={cx('infor-item')}>
                            <p className={cx('label')}>Ngày đặt:</p>
                            <p>
                                {moment(booking.bt_ngaydat).format(
                                    'HH:mm - DD/MM/YYYY'
                                )}
                            </p>
                        </div>
                        <div className={cx('infor-item')}>
                            <p className={cx('label')}>Trạng thái:</p>
                            <p className={cx('label')}>
                                {booking.bt_trangthai === 0 && (
                                    <button
                                        type="button"
                                        className={cx(
                                            'button-status cancel-status'
                                        )}
                                    >
                                        {' '}
                                        Đã hủy{' '}
                                    </button>
                                )}
                                {booking.bt_trangthai === 1 && (
                                    <button
                                        type="button"
                                        className={cx(
                                            'button-status await-status'
                                        )}
                                    >
                                        {' '}
                                        Chờ xác nhận{' '}
                                    </button>
                                )}
                                {booking.bt_trangthai === 2 && (
                                    <button
                                        type="button"
                                        className={cx(
                                            'button-status accepted-status'
                                        )}
                                    >
                                        {' '}
                                        Đã xác nhận{' '}
                                    </button>
                                )}
                                {booking.bt_trangthai === 3 && (
                                    <button
                                        type="button"
                                        className={cx(
                                            'button-status working-status'
                                        )}
                                    >
                                        {' '}
                                        Đang diễn ra{' '}
                                    </button>
                                )}
                                {booking.bt_trangthai === 4 && (
                                    <button
                                        type="button"
                                        className={cx(
                                            'button-status finish-status'
                                        )}
                                    >
                                        {' '}
                                        Đã kết thúc{' '}
                                    </button>
                                )}
                            </p>
                        </div>
                        <div className={cx('infor-item')}>
                            <p className={cx('label')}>Tổng thanh toán:</p>
                            <p className={cx('price')}>
                                {booking.bt_tongthanhtoan.toLocaleString('vi', {
                                    style: 'currency',
                                    currency: 'VND',
                                })}
                            </p>
                        </div>
                    </div>
                    <hr className={cx('line')} />
                    <div className={cx('infor-details')}>
                        <div className={cx('detail-left')}>
                            <div className={cx('detail-tour')}>
                                <p>Thông tin tour</p>
                                <table>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td className={cx('label')}>
                                                Mã tour
                                            </td>
                                            <td className={cx('content')}>
                                                {booking.bt_tour.t_ma}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Tên tour
                                            </td>
                                            <td className={cx('content')}>
                                                {booking.bt_tour.t_ten}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Loại hình tour
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_tour.t_loaihinh
                                                        .lht_ten
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Số ngày
                                            </td>
                                            <td className={cx('content')}>
                                                {booking.bt_tour.t_thoigian}{' '}
                                                ngày{' '}
                                                {booking.bt_tour.t_thoigian - 1}{' '}
                                                đêm
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Giá tour
                                            </td>
                                            <td className={cx('content')}>
                                                {booking.bt_tour.t_gia.toLocaleString(
                                                    'vi',
                                                    {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    }
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={cx('detail-departure')}>
                                <p>Lịch khởi hành</p>
                                <table>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td className={cx('label')}>
                                                Điểm khởi hành
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_lichkhoihanh
                                                        .lkh_diadiem
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Ngày khởi hành
                                            </td>
                                            <td className={cx('content')}>
                                                {moment(
                                                    booking.bt_lichkhoihanh
                                                        .lkh_ngaykhoihanh
                                                ).format('DD / MM / YYYY')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Ngày kết thúc
                                            </td>
                                            <td className={cx('content')}>
                                                {moment(
                                                    booking.bt_lichkhoihanh
                                                        .lkh_ngayketthuc
                                                ).format('DD / MM / YYYY')}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={cx('detail-passenger')}>
                                <p>Số lượng hành khách</p>
                                <table>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td className={cx('label')}>
                                                Người lớn x{' '}
                                                {
                                                    booking.bt_soluonghanhkhach
                                                        .adult
                                                }
                                            </td>
                                            <td className={cx('content')}>
                                                {(
                                                    booking.bt_tour.t_gia *
                                                    booking.bt_soluonghanhkhach
                                                        .adult
                                                ).toLocaleString('vi', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                })}
                                            </td>
                                        </tr>

                                        {booking.bt_soluonghanhkhach.children >
                                            0 && (
                                            <tr>
                                                <td className={cx('label')}>
                                                    Trẻ em x{' '}
                                                    {
                                                        booking
                                                            .bt_soluonghanhkhach
                                                            .children
                                                    }
                                                </td>
                                                <td className={cx('content')}>
                                                    {(
                                                        (booking.bt_tour.t_gia *
                                                            booking
                                                                .bt_soluonghanhkhach
                                                                .children *
                                                            60) /
                                                        100
                                                    ).toLocaleString('vi', {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    })}
                                                </td>
                                            </tr>
                                        )}

                                        {booking.bt_soluonghanhkhach.baby >
                                            0 && (
                                            <tr>
                                                <td className={cx('label')}>
                                                    Em bé x{' '}
                                                    {
                                                        booking
                                                            .bt_soluonghanhkhach
                                                            .baby
                                                    }
                                                </td>
                                                <td className={cx('content')}>
                                                    {(
                                                        (booking.bt_tour.t_gia *
                                                            booking
                                                                .bt_soluonghanhkhach
                                                                .children *
                                                            40) /
                                                        100
                                                    ).toLocaleString('vi', {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    })}
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className={cx('detail-right')}>
                            <div className={cx('detail-contact')}>
                                <p>Thông tin liên hệ</p>
                                <table>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td className={cx('label')}>
                                                Họ tên
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_thongtinlienhe
                                                        .firstname
                                                }{' '}
                                                {
                                                    booking.bt_thongtinlienhe
                                                        .lastname
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Giới tính
                                            </td>
                                            <td className={cx('content')}>
                                                {booking.bt_thongtinlienhe
                                                    .gender === 'female'
                                                    ? 'Nam'
                                                    : booking.bt_thongtinlienhe
                                                          .gender === 'male'
                                                    ? 'Nữ'
                                                    : 'Khác'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Email
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_thongtinlienhe
                                                        .email
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Số điện thoại
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_thongtinlienhe
                                                        .phone
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Địa chỉ
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_thongtinlienhe
                                                        .address
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={cx('detail-payment')}>
                                <p>Thông tin thanh toán</p>
                                <table>
                                    <thead></thead>
                                    <tbody>
                                        <tr>
                                            <td className={cx('label')}>
                                                Họ tên
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_thongtinthanhtoan
                                                        .firstname
                                                }{' '}
                                                {
                                                    booking.bt_thongtinthanhtoan
                                                        .lastname
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Giới tính
                                            </td>
                                            <td className={cx('content')}>
                                                {booking.bt_thongtinthanhtoan
                                                    .gender === 'female'
                                                    ? 'Nam'
                                                    : booking
                                                          .bt_thongtinthanhtoan
                                                          .gender === 'male'
                                                    ? 'Nữ'
                                                    : 'Khác'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Email
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_thongtinthanhtoan
                                                        .email
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Số điện thoại
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_thongtinlienhe
                                                        .phone
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Địa chỉ
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_thongtinlienhe
                                                        .address
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={cx('label')}>
                                                Thanh toán
                                            </td>
                                            <td className={cx('content')}>
                                                {
                                                    booking.bt_thongtinthanhtoan
                                                        .type
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {calendarGuide && (
                        <div>
                            <p className={cx('label-guide-list')}>
                                HƯỚNG DẪN VIÊN
                            </p>
                            <ul className={cx('guide-list')}>
                                {calendarGuide.ldt_huongdanvien.map(
                                    (guide, index) => (
                                        <li key={index}>
                                            <Accordion
                                                className={cx('accordition')}
                                            >
                                                <AccordionSummary
                                                    expandIcon={
                                                        <ExpandMoreIcon
                                                            className={cx(
                                                                'expandIcon'
                                                            )}
                                                        />
                                                    }
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    className={cx(
                                                        'accordition-summary'
                                                    )}
                                                >
                                                    {/* <p className={cx('rating')}>
                                                        <span>4.5</span>
                                                        <StarIcon className="iconStart" />
                                                    </p> */}
                                                    <div
                                                        className={cx(
                                                            'accordition-guide'
                                                        )}
                                                    >
                                                        <img
                                                            src={
                                                                guide.tkhdv_anhdaidien
                                                            }
                                                            alt=""
                                                        />
                                                        <span>
                                                            {
                                                                guide
                                                                    .tkhdv_huongdanvien
                                                                    .hdv_hoten
                                                            }
                                                        </span>
                                                    </div>
                                                </AccordionSummary>
                                                <AccordionDetails
                                                    className={cx(
                                                        'accordition-details'
                                                    )}
                                                >
                                                    <ul
                                                        className={cx(
                                                            'guide-details'
                                                        )}
                                                    >
                                                        <li>
                                                            <CakeIcon className="icon" />
                                                            <span className="content">
                                                                {
                                                                    guide
                                                                        .tkhdv_huongdanvien
                                                                        .hdv_namsinh
                                                                }
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <LocalPhoneIcon className="icon" />
                                                            <span className="content">
                                                                {
                                                                    guide
                                                                        .tkhdv_huongdanvien
                                                                        .hdv_sodienthoai
                                                                }
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <EmailIcon className="icon" />
                                                            <span className="content">
                                                                {
                                                                    guide
                                                                        .tkhdv_huongdanvien
                                                                        .hdv_mail
                                                                }
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </AccordionDetails>
                                            </Accordion>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </Dialog>
            {!ratingTour && <AddRating></AddRating>}
            {ratingTour && (
                <UpdateRating ratingTour={ratingTour}></UpdateRating>
            )}
            {openAddGuide && (
                <AddGuideRating calendarGuide={calendarGuide}></AddGuideRating>
            )}
            {openUpdateGuide && (
                <UpdateGuideRating
                    ratingGuide={ratingGuide}
                ></UpdateGuideRating>
            )}
        </div>
    );
}
