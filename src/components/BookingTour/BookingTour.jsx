import { React, useState } from 'react';
import classNames from 'classnames/bind';
import moment from 'moment';
import Cookies from 'universal-cookie';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MdPayments } from 'react-icons/md';
import { handleSuccessPaymentTour, successPayment } from '../../GlobalSlice';
import * as api from '../../api';
import styles from './BookingTour.scss';
import { useEffect } from 'react';
import PayPal from '../PayPal/PayPal';
import SuccessPayment from './SuccessPayment';

const cx = classNames.bind(styles);
const cookies = new Cookies();

const adultPassengerList = [
    {
        fullname: 'ff',
        birthday: '',
        gender: '',
    },
];

const childrenPassengerList = [];

const babyPassengerList = [];

function BookingTour(props) {
    const { tour, departure } = props;
    const dispatch = useDispatch();
    const user = cookies.get('user');
    const isSuccessPay = useSelector(successPayment);
    const [inforContactFirstname, setInforContactFirstname] = useState('');
    const [inforContactLastname, setInforContactLastname] = useState('');
    const [inforContactGender, setInforContactGender] = useState('');
    const [inforContactEmail, setInforContactEmail] = useState('');
    const [inforContactPhone, setInforContactPhone] = useState('');
    const [inforContactAddress, setInforContactAddress] = useState('');

    const [amountAdult, setAmountAdult] = useState(1);
    const [amountChildren, setamountChildren] = useState(0);
    const [amountBaby, setAmountBaby] = useState(0);

    const [inforPaymentFirstname, setInforPaymentFirstname] = useState('');
    const [inforPaymentLastname, setInforPaymentLastname] = useState('');
    const [inforPaymentGender, setInforPaymentGender] = useState('');
    const [inforPaymentEmail, setInforPaymentEmail] = useState('');
    const [inforPaymentPhone, setInforPaymentPhone] = useState('');
    const [inforPaymentAddress, setInforPaymentAddress] = useState('');

    const [typePayment, setTypePayment] = useState('');
    const [totalPayment, setTotalPayment] = useState(tour.t_gia || 0);

    useEffect(() => {
        setTotalPayment(
            amountAdult * tour.t_gia +
                amountChildren * ((tour.t_gia * 60) / 100) +
                amountBaby * ((tour.t_gia * 40) / 100)
        );
    }, [tour.t_gia, amountAdult, amountChildren, amountBaby]);

    useEffect(() => {}, [amountAdult]);

    const handleChangeAdultPassengerFullname = (event, index) => {
        for (let i = 0; i < adultPassengerList.length; i++) {
            if (index === i) {
                adultPassengerList[index].fullname = event.target.value;
            }
        }
    };

    const handleChangeAdultPassengerBirthday = (event, index) => {
        for (let i = 0; i < adultPassengerList.length; i++) {
            if (index === i) {
                adultPassengerList[index].birthday = event.target.value;
            }
        }
    };

    const handleChangeAdultPassengerGender = (event, index) => {
        for (let i = 0; i < adultPassengerList.length; i++) {
            if (index === i) {
                adultPassengerList[index].gender = event.target.value;
            }
        }
    };

    const handleChangeChildrenPassengerFullname = (event, index) => {
        for (let i = 0; i < childrenPassengerList.length; i++) {
            if (index === i) {
                childrenPassengerList[index].fullname = event.target.value;
            }
        }
    };

    const handleChangeChildrenPassengerBirthday = (event, index) => {
        for (let i = 0; i < childrenPassengerList.length; i++) {
            if (index === i) {
                childrenPassengerList[index].birthday = event.target.value;
            }
        }
    };

    const handleChangeChildrenPassengerGender = (event, index) => {
        for (let i = 0; i < childrenPassengerList.length; i++) {
            if (index === i) {
                childrenPassengerList[index].gender = event.target.value;
            }
        }
    };

    const handleChangeBabyPassengerFullname = (event, index) => {
        for (let i = 0; i < babyPassengerList.length; i++) {
            if (index === i) {
                babyPassengerList[index].fullname = event.target.value;
            }
        }
    };

    const handleChangeBabyPassengerBirthday = (event, index) => {
        for (let i = 0; i < babyPassengerList.length; i++) {
            if (index === i) {
                babyPassengerList[index].birthday = event.target.value;
            }
        }
    };

    const handleChangeBabyPassengerGender = (event, index) => {
        for (let i = 0; i < babyPassengerList.length; i++) {
            if (index === i) {
                babyPassengerList[index].gender = event.target.value;
            }
        }
    };

    const handlePayBookingTour = () => {
        const current = new Date();
        const randomID = `BT00${current.getTime()}`;

        api.bookingTour({
            bt_ma: randomID,
            bt_tour: tour,
            bt_lichkhoihanh: departure,
            bt_thongtinlienhe: {
                firstname: inforContactFirstname,
                lastname: inforContactLastname,
                gender: inforContactGender,
                email: inforContactEmail,
                phone: inforContactPhone,
                address: inforContactAddress,
            },
            bt_thongtinthanhtoan: {
                firstname: inforPaymentFirstname,
                lastname: inforPaymentLastname,
                gender: inforPaymentGender,
                email: inforPaymentEmail,
                phone: inforPaymentPhone,
                address: inforPaymentAddress,
                type: typePayment,
            },
            bt_taikhoan: user.others,
            bt_ngaydat: current,
            bt_soluonghanhkhach: {
                adult: amountAdult,
                children: amountChildren,
                baby: amountBaby,
            },
            bt_nguoilon: adultPassengerList,
            bt_treem: childrenPassengerList,
            bt_embe: babyPassengerList,
            bt_tongthanhtoan: totalPayment,
            bt_trangthai: 1,
        }).then((res) => {
            dispatch(handleSuccessPaymentTour(true));
        });
    };

    return (
        <div className={cx('booking-tour')}>
            <div className={cx('infor-booking')}>
                <div className={cx('infor-contact')}>
                    <p className={cx('label-box')}>Thông tin liên hệ</p>
                    <ul className={cx('textfield-list')}>
                        <li>
                            <TextField
                                label="Họ *"
                                variant="standard"
                                value={inforContactFirstname}
                                onChange={(e) =>
                                    setInforContactFirstname(e.target.value)
                                }
                            />
                        </li>
                        <li>
                            <TextField
                                label="Tên đệm và tên *"
                                variant="standard"
                                value={inforContactLastname}
                                onChange={(e) =>
                                    setInforContactLastname(e.target.value)
                                }
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
                                value={inforContactGender}
                                onChange={(e) =>
                                    setInforContactGender(e.target.value)
                                }
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
                            <TextField
                                label="Email"
                                variant="standard"
                                value={inforContactEmail}
                                onChange={(e) =>
                                    setInforContactEmail(e.target.value)
                                }
                            />
                        </li>
                        <li>
                            <TextField
                                label="Số điện thoại *"
                                variant="standard"
                                value={inforContactPhone}
                                onChange={(e) =>
                                    setInforContactPhone(e.target.value)
                                }
                            />
                        </li>
                        <li>
                            <TextField
                                className={cx('textfield-address')}
                                label="Địa chỉ *"
                                variant="standard"
                                value={inforContactAddress}
                                onChange={(e) =>
                                    setInforContactAddress(e.target.value)
                                }
                            />
                        </li>
                    </ul>
                </div>
                <div className={cx('passenger')}>
                    <p className={cx('label-box')}>Số lượng hành khách</p>
                    <ul>
                        <li>
                            <Fab
                                disabled={amountAdult === 1}
                                size="small"
                                color="secondary"
                                aria-label="add"
                                onClick={() => {
                                    setAmountAdult(amountAdult - 1);
                                    adultPassengerList.pop();
                                }}
                            >
                                <RemoveIcon className={cx('icon')} />
                            </Fab>
                            <div className={cx('field-number')}>
                                <p className={cx('label')}>Người lớn</p>
                                <input
                                    readOnly
                                    type="text"
                                    value={amountAdult}
                                />
                                <p className={cx('explain')}>
                                    <i>Trên 12 tuổi (100%)</i>
                                </p>
                            </div>
                            <Fab
                                size="small"
                                color="secondary"
                                aria-label="add"
                                onClick={() => {
                                    setAmountAdult(amountAdult + 1);
                                    adultPassengerList.push({
                                        fullname: '',
                                        birthday: '',
                                        gender: '',
                                    });
                                }}
                            >
                                <AddIcon className={cx('icon')} />
                            </Fab>
                        </li>
                        <li>
                            <Fab
                                size="small"
                                color="secondary"
                                aria-label="add"
                                disabled={amountChildren === 0}
                                onClick={() => {
                                    setamountChildren(amountChildren - 1);
                                    childrenPassengerList.pop();
                                }}
                            >
                                <RemoveIcon className={cx('icon')} />
                            </Fab>
                            <div className={cx('field-number')}>
                                <p className={cx('label')}>Trẻ em</p>
                                <input
                                    readOnly
                                    type="text"
                                    value={amountChildren}
                                />
                                <p className={cx('explain')}>
                                    <i>2 - 11 tuổi (60%)</i>
                                </p>
                            </div>
                            <Fab
                                size="small"
                                color="secondary"
                                aria-label="add"
                                onClick={() => {
                                    setamountChildren(amountChildren + 1);
                                    childrenPassengerList.push({
                                        fullname: '',
                                        birthday: '',
                                        gender: '',
                                    });
                                }}
                            >
                                <AddIcon className={cx('icon')} />
                            </Fab>
                        </li>
                        <li>
                            <Fab
                                size="small"
                                color="secondary"
                                aria-label="add"
                                disabled={amountBaby === 0}
                                onClick={() => {
                                    setAmountBaby(amountBaby - 1);
                                    babyPassengerList.pop();
                                }}
                            >
                                <RemoveIcon className={cx('icon')} />
                            </Fab>
                            <div className={cx('field-number')}>
                                <p className={cx('label')}>Em bé</p>
                                <input
                                    readOnly
                                    type="text"
                                    value={amountBaby}
                                />
                                <p className={cx('explain')}>
                                    <i>Dưới 2 tuổi (40%)</i>
                                </p>
                            </div>
                            <Fab
                                size="small"
                                color="secondary"
                                aria-label="add"
                                onClick={() => {
                                    setAmountBaby(amountBaby + 1);
                                    babyPassengerList.push({
                                        fullname: '',
                                        birthday: '',
                                        gender: '',
                                    });
                                }}
                            >
                                <AddIcon className={cx('icon')} />
                            </Fab>
                        </li>
                    </ul>
                    <div className={cx('list-passenger')}>
                        {adultPassengerList.map((passenger, index) => (
                            <div key={`adult${index}`}>
                                <p>{`Thông tin người lớn ${index + 1}`}</p>
                                <ul className={cx('textfield-list')}>
                                    <li>
                                        <TextField
                                            label="Họ tên"
                                            variant="standard"
                                            onChange={(e) => {
                                                handleChangeAdultPassengerFullname(
                                                    e,
                                                    index
                                                );
                                            }}
                                        />
                                    </li>
                                    <li>
                                        <TextField
                                            label="Ngày sinh"
                                            variant="standard"
                                            placeholder="DD / MM / YYYY"
                                            onChange={(e) => {
                                                handleChangeAdultPassengerBirthday(
                                                    e,
                                                    index
                                                );
                                            }}
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
                                            // value={inforContactGender}
                                            onChange={(e) => {
                                                handleChangeAdultPassengerGender(
                                                    e,
                                                    index
                                                );
                                            }}
                                        >
                                            <FormControlLabel
                                                value="Nam"
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
                                                value="Nữ"
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
                                                value="Khác"
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
                                </ul>
                            </div>
                        ))}
                        {childrenPassengerList.map((passenger, index) => (
                            <div key={`children${index}`}>
                                <p>{`Thông tin trẻ em ${index + 1}`}</p>
                                <ul className={cx('textfield-list')}>
                                    <li>
                                        <TextField
                                            label="Họ tên"
                                            variant="standard"
                                            onChange={(e) => {
                                                handleChangeChildrenPassengerFullname(
                                                    e,
                                                    index
                                                );
                                            }}
                                        />
                                    </li>
                                    <li>
                                        <TextField
                                            label="Ngày sinh"
                                            variant="standard"
                                            placeholder="DD / MM / YYYY"
                                            onChange={(e) => {
                                                handleChangeChildrenPassengerBirthday(
                                                    e,
                                                    index
                                                );
                                            }}
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
                                            // value={inforContactGender}
                                            onChange={(e) => {
                                                handleChangeChildrenPassengerGender(
                                                    e,
                                                    index
                                                );
                                            }}
                                        >
                                            <FormControlLabel
                                                value="Nam"
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
                                                value="Nữ"
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
                                                value="Khác"
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
                                </ul>
                            </div>
                        ))}
                        {babyPassengerList.map((passenger, index) => (
                            <div key={`baby${index}`}>
                                <p>{`Thông tin em bé ${index + 1}`}</p>
                                <ul className={cx('textfield-list')}>
                                    <li>
                                        <TextField
                                            label="Họ tên"
                                            variant="standard"
                                            onChange={(e) => {
                                                handleChangeBabyPassengerFullname(
                                                    e,
                                                    index
                                                );
                                            }}
                                        />
                                    </li>
                                    <li>
                                        <TextField
                                            label="Ngày sinh"
                                            variant="standard"
                                            placeholder="DD / MM / YYYY"
                                            onChange={(e) => {
                                                handleChangeBabyPassengerBirthday(
                                                    e,
                                                    index
                                                );
                                            }}
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
                                            // value={inforContactGender}
                                            onChange={(e) => {
                                                handleChangeBabyPassengerGender(
                                                    e,
                                                    index
                                                );
                                            }}
                                        >
                                            <FormControlLabel
                                                value="Nam"
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
                                                value="Nữ"
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
                                                value="Khác"
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
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('infor-payment')}>
                    <p className={cx('label-box')}>
                        Thông tin người thanh toán
                    </p>
                    <ul className={cx('textfield-list')}>
                        <li>
                            <TextField
                                label="Họ *"
                                variant="standard"
                                value={inforPaymentFirstname}
                                onChange={(e) =>
                                    setInforPaymentFirstname(e.target.value)
                                }
                            />
                        </li>
                        <li>
                            <TextField
                                label="Tên đệm và tên *"
                                variant="standard"
                                value={inforPaymentLastname}
                                onChange={(e) =>
                                    setInforPaymentLastname(e.target.value)
                                }
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
                                value={inforPaymentGender}
                                onChange={(e) =>
                                    setInforPaymentGender(e.target.value)
                                }
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
                            <TextField
                                label="Email"
                                variant="standard"
                                value={inforPaymentEmail}
                                onChange={(e) =>
                                    setInforPaymentEmail(e.target.value)
                                }
                            />
                        </li>
                        <li>
                            <TextField
                                label="Số điện thoại *"
                                variant="standard"
                                value={inforPaymentPhone}
                                onChange={(e) =>
                                    setInforPaymentPhone(e.target.value)
                                }
                            />
                        </li>
                        <li>
                            <TextField
                                className={cx('textfield-address')}
                                label="Địa chỉ *"
                                variant="standard"
                                value={inforPaymentAddress}
                                onChange={(e) =>
                                    setInforPaymentAddress(e.target.value)
                                }
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
                                    value={typePayment}
                                    onChange={(e) =>
                                        setTypePayment(e.target.value)
                                    }
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
                                <td className={cx('label')}>Số ngày:</td>
                                <td className={cx('content')}>
                                    {tour.t_thoigian}
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('label')}>Điểm khởi hành:</td>
                                <td className={cx('content')}>
                                    {tour.t_thoigian} ngày {tour.t_thoigian - 1}{' '}
                                    đêm
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('label')}>Ngày khởi hành:</td>
                                <td className={cx('content')}>
                                    {moment(departure.lkh_ngaykhoihanh).format(
                                        'DD / MM / YYYY'
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('label')}>Ngày kết thúc</td>
                                <td className={cx('content')}>
                                    {' '}
                                    {moment(departure.lkh_ngayketthuc).format(
                                        'DD / MM / YYYY'
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                    <p className={cx('details-price')}>Chi tiết giá</p>
                    <ul className={cx('details-list')}>
                        {amountAdult > 0 && (
                            <li className={cx('details-item')}>
                                <p>
                                    Người lớn x
                                    <span className={cx('amount')}>
                                        {' '}
                                        {amountAdult}
                                    </span>
                                </p>
                                <p className={cx('price')}>
                                    {(tour.t_gia * amountAdult).toLocaleString(
                                        'vi',
                                        {
                                            style: 'currency',
                                            currency: 'VND',
                                        }
                                    )}
                                </p>
                            </li>
                        )}
                        {amountChildren >= 1 && (
                            <li className={cx('details-item')}>
                                <p>
                                    Trẻ em x
                                    <span className={cx('amount')}>
                                        {' '}
                                        {amountChildren}
                                    </span>
                                </p>
                                <p className={cx('price')}>
                                    {(
                                        (tour.t_gia * amountChildren * 60) /
                                        100
                                    ).toLocaleString('vi', {
                                        style: 'currency',
                                        currency: 'VND',
                                    })}
                                    {/* {(
                                        (tour.t_gia * 60 * amountChildren) /
                                        100
                                    ).toLocaleString('vi', {
                                        style: 'currency',
                                        currency: 'VND',
                                    })} */}
                                </p>
                            </li>
                        )}
                        {amountBaby >= 1 && (
                            <li className={cx('details-item')}>
                                <p>
                                    Em bé x
                                    <span className={cx('amount')}>
                                        {amountBaby}
                                    </span>
                                </p>
                                <p className={cx('price')}>
                                    {(
                                        (tour.t_gia * amountBaby * 40) /
                                        100
                                    ).toLocaleString('vi', {
                                        style: 'currency',
                                        currency: 'VND',
                                    })}
                                </p>
                            </li>
                        )}
                    </ul>
                    <hr />
                    <p className={cx('label-box')}>Thông tin thanh toán</p>
                    <ul className={cx('payment-list')}>
                        <li className="prepay">
                            <p>Trả trước</p>
                            <p className={cx('prepay-value')}>
                                {totalPayment.toLocaleString('vi', {
                                    style: 'currency',
                                    currency: 'VND',
                                })}
                            </p>
                        </li>
                        <li className="total-pay">
                            <p>Tổng thanh toán</p>
                            <p className={cx('total-pay-value')}>
                                {totalPayment.toLocaleString('vi', {
                                    style: 'currency',
                                    currency: 'VND',
                                })}
                            </p>
                        </li>
                    </ul>
                    <p className={cx('alert-typing')}>
                        ** Vui lòng nhập đầy đủ thông tin để THANH TOÁN
                    </p>
                    {typePayment !== 'paypal' && (
                        <Button
                            disabled={
                                !inforContactFirstname ||
                                !inforContactLastname ||
                                !inforContactGender ||
                                !inforContactEmail ||
                                !inforContactPhone ||
                                !inforContactAddress ||
                                !inforContactFirstname ||
                                !inforContactLastname ||
                                !inforContactGender ||
                                !inforContactEmail ||
                                !inforContactPhone ||
                                !inforContactAddress ||
                                !typePayment
                            }
                            variant="contained"
                            color="error"
                            className={cx('button-payment')}
                            onClick={() => handlePayBookingTour()}
                        >
                            THANH TOÁN
                        </Button>
                    )}
                    {typePayment === 'paypal' && (
                        <PayPal
                            handlePayBookingTour={handlePayBookingTour}
                        ></PayPal>
                    )}
                </div>
            </div>
            {isSuccessPay && <SuccessPayment></SuccessPayment>}
        </div>
    );
}

export default BookingTour;
