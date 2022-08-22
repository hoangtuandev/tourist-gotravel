import { React, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MdPayments } from 'react-icons/md';
import * as api from '../../api';
import styles from './BookingTour.scss';

const cx = classNames.bind(styles);

function BookingTour() {
    // const location = useLocation()
    const idTour = useParams().somestring;
    const [tour, setTour] = useState({});
    console.log(idTour);

    useEffect(() => {
        api.getTourById({ t_ma: idTour }).then((res) => {
            setTour(res.data);
            console.log(res.data.t_loaihinh.lht_ten);
        });
    }, [idTour]);

    return (
        <div className={cx('booking-tour')}>
            <div className={cx('infor-booking')}>
                <div className={cx('infor-contact')}>
                    <p className={cx('label-box')}>Thông tin liên hệ</p>
                    <ul className={cx('textfield-list')}>
                        <li>
                            <TextField label="Họ *" variant="standard" />
                        </li>
                        <li>
                            <TextField
                                label="Tên đệm và tên *"
                                variant="standard"
                            />
                        </li>
                        <li className={cx('textfield-gender')}>
                            <label className={cx('label-gender')}>
                                Giới tính
                            </label>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="female"
                                    control={
                                        <Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 22,
                                                },
                                            }}
                                        />
                                    }
                                    label="Nam"
                                />
                                <FormControlLabel
                                    value="male"
                                    control={
                                        <Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 22,
                                                },
                                            }}
                                        />
                                    }
                                    label="Nữ"
                                />
                                <FormControlLabel
                                    value="other"
                                    control={
                                        <Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 22,
                                                },
                                            }}
                                        />
                                    }
                                    label="Khác"
                                />
                            </RadioGroup>
                        </li>
                        <li>
                            <TextField label="Email" variant="standard" />
                        </li>
                        <li>
                            <TextField
                                label="Số điện thoại *"
                                variant="standard"
                            />
                        </li>
                        <li>
                            <TextField
                                className={cx('textfield-address')}
                                label="Địa chỉ *"
                                variant="standard"
                            />
                        </li>
                    </ul>
                </div>
                <div className={cx('passenger')}>
                    <p className={cx('label-box')}>Số lượng hành khách</p>
                    <ul>
                        <li>
                            <Fab
                                size="small"
                                color="secondary"
                                aria-label="add"
                            >
                                <AddIcon className={cx('icon')} />
                            </Fab>
                            <div className={cx('field-number')}>
                                <p className={cx('label')}>Người lớn</p>
                                <input readOnly type="text" />
                                <p className={cx('explain')}>
                                    <i>Trên 12 tuổi</i>
                                </p>
                            </div>
                            <Fab
                                size="small"
                                color="secondary"
                                aria-label="add"
                            >
                                <RemoveIcon className={cx('icon')} />
                            </Fab>
                        </li>
                        <li>
                            <Fab
                                size="small"
                                color="secondary"
                                aria-label="add"
                            >
                                <AddIcon className={cx('icon')} />
                            </Fab>
                            <div className={cx('field-number')}>
                                <p className={cx('label')}>Trẻ em</p>
                                <input readOnly type="text" />
                                <p className={cx('explain')}>
                                    <i>2 - 11 tuổi</i>
                                </p>
                            </div>
                            <Fab
                                size="small"
                                color="secondary"
                                aria-label="add"
                            >
                                <RemoveIcon className={cx('icon')} />
                            </Fab>
                        </li>
                        <li>
                            <Fab
                                size="small"
                                color="secondary"
                                aria-label="add"
                            >
                                <AddIcon className={cx('icon')} />
                            </Fab>
                            <div className={cx('field-number')}>
                                <p className={cx('label')}>Em bé</p>
                                <input readOnly type="text" />
                                <p className={cx('explain')}>
                                    <i>Dưới 2 tuổi</i>
                                </p>
                            </div>
                            <Fab
                                size="small"
                                color="secondary"
                                aria-label="add"
                            >
                                <RemoveIcon className={cx('icon')} />
                            </Fab>
                        </li>
                    </ul>
                </div>
                <div className={cx('infor-payment')}>
                    <p className={cx('label-box')}>
                        Thông tin người thanh toán
                    </p>
                    <ul className={cx('textfield-list')}>
                        <li>
                            <TextField label="Họ *" variant="standard" />
                        </li>
                        <li>
                            <TextField
                                label="Tên đệm và tên *"
                                variant="standard"
                            />
                        </li>
                        <li className={cx('textfield-gender')}>
                            <label className={cx('label-gender')}>
                                Giới tính
                            </label>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="female"
                                    control={
                                        <Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 22,
                                                },
                                            }}
                                        />
                                    }
                                    label="Nam"
                                />
                                <FormControlLabel
                                    value="male"
                                    control={
                                        <Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 22,
                                                },
                                            }}
                                        />
                                    }
                                    label="Nữ"
                                />
                                <FormControlLabel
                                    value="other"
                                    control={
                                        <Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 22,
                                                },
                                            }}
                                        />
                                    }
                                    label="Khác"
                                />
                            </RadioGroup>
                        </li>
                        <li>
                            <TextField label="Email" variant="standard" />
                        </li>
                        <li>
                            <TextField
                                label="Số điện thoại *"
                                variant="standard"
                            />
                        </li>
                        <li>
                            <TextField
                                className={cx('textfield-address')}
                                label="Địa chỉ *"
                                variant="standard"
                            />
                        </li>
                    </ul>
                </div>
                <div className={cx('way-payment')}>
                    <p className={cx('label-box')}>Hình thức thanh toán</p>
                    <Accordion className={cx('accordition')}>
                        <AccordionSummary
                            expandIcon={
                                <ExpandMoreIcon className={cx('icon-expand')} />
                            }
                            aria-controls="panel1a-content"
                            className={cx('accordion-summary')}
                        >
                            <div className={cx('typography')}>
                                <MdPayments className={'icon'} />
                                <span>Thanh toán qua ví điện tử</span>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className={cx('accordion-details')}>
                            <div className={cx('typography')}>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="paypal"
                                        control={
                                            <Radio
                                                sx={{
                                                    '& .MuiSvgIcon-root': {
                                                        fontSize: 23,
                                                    },
                                                }}
                                            />
                                        }
                                    />
                                    <FormControlLabel
                                        value="zalopay"
                                        control={
                                            <Radio
                                                disabled
                                                sx={{
                                                    '& .MuiSvgIcon-root': {
                                                        fontSize: 23,
                                                    },
                                                }}
                                            />
                                        }
                                    />
                                    <FormControlLabel
                                        value="vnpay"
                                        control={
                                            <Radio
                                                disabled
                                                sx={{
                                                    '& .MuiSvgIcon-root': {
                                                        fontSize: 23,
                                                    },
                                                }}
                                            />
                                        }
                                    />
                                </RadioGroup>
                                <ul>
                                    <li>
                                        <img
                                            src="https://res.cloudinary.com/phtuandev/image/upload/v1661065722/GoTravel/PayPal.svg_ojc6o5.png"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://res.cloudinary.com/phtuandev/image/upload/v1661067126/GoTravel/ZaloPay_color_hoz_eadxfb.png"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://res.cloudinary.com/phtuandev/image/upload/v1661067137/GoTravel/vnpay_qkbfou.png"
                                            alt=""
                                        />
                                    </li>
                                </ul>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <div>
                <div className={cx('infor-tour')}>
                    <p className={cx('label-box')}>Thông tin tour</p>
                    <hr />
                    <p className={cx('tour-name')}>{tour.t_ten}</p>

                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td className={cx('label')}>Loại hình tour</td>
                                <td className={cx('content')}>
                                    {tour.t_loaihinh.lht_ten}
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('label')}>Số ngày:</td>
                                <td className={cx('content')}>
                                    {tour.t_thoigian}
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('label')}>Điểm khởi hành:</td>
                                <td className={cx('content')}>
                                    {tour.t_thoigian} ngày {tour.t_thoigian - 1}
                                    đêm
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('label')}>Ngày khởi hành:</td>
                                <td className={cx('content')}>3 ngày</td>
                            </tr>
                            <tr>
                                <td className={cx('label')}>Ngày kết thúc</td>
                                <td className={cx('content')}>3 ngày</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <p className={cx('details-price')}>Chi tiết giá</p>
                    <ul className={cx('details-list')}>
                        <li className={cx('details-item')}>
                            <p>
                                Người lớn x
                                <span className={cx('amount')}> 1</span>
                            </p>
                            <p className={cx('price')}>3.590.000 đ</p>
                        </li>
                        <li className={cx('details-item')}>
                            <p>
                                Người lớn x
                                <span className={cx('amount')}> 1</span>
                            </p>
                            <p className={cx('price')}>3.590.000 đ</p>
                        </li>
                    </ul>
                    <hr />
                    <p className={cx('label-box')}>Thông tin thanh toán</p>
                    <ul className={cx('payment-list')}>
                        <li className="prepay">
                            <p>Trả trước</p>
                            <p className={cx('prepay-value')}>3.590.000 đ</p>
                        </li>
                        <li className="total-pay">
                            <p>Tổng thanh toán</p>
                            <p className={cx('total-pay-value')}>3.590.000 đ</p>
                        </li>
                    </ul>
                    <Button
                        variant="contained"
                        className={cx('button-payment')}
                    >
                        THANH TOÁN
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default BookingTour;
