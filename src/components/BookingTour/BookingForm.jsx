import { React } from 'react';
import classNames from 'classnames/bind';
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
import styles from './BookingTour.scss';

const cx = classNames.bind(styles);

function BookingForm() {
    return (
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
                        <label className={cx('label-gender')}>Giới tính</label>
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
                        <TextField label="Số điện thoại *" variant="standard" />
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
                        <Fab size="small" color="secondary" aria-label="add">
                            <AddIcon className={cx('icon')} />
                        </Fab>
                        <div className={cx('field-number')}>
                            <p className={cx('label')}>Người lớn</p>
                            <input readOnly type="text" />
                            <p className={cx('explain')}>
                                <i>Trên 12 tuổi</i>
                            </p>
                        </div>
                        <Fab size="small" color="secondary" aria-label="add">
                            <RemoveIcon className={cx('icon')} />
                        </Fab>
                    </li>
                    <li>
                        <Fab size="small" color="secondary" aria-label="add">
                            <AddIcon className={cx('icon')} />
                        </Fab>
                        <div className={cx('field-number')}>
                            <p className={cx('label')}>Trẻ em</p>
                            <input readOnly type="text" />
                            <p className={cx('explain')}>
                                <i>2 - 11 tuổi</i>
                            </p>
                        </div>
                        <Fab size="small" color="secondary" aria-label="add">
                            <RemoveIcon className={cx('icon')} />
                        </Fab>
                    </li>
                    <li>
                        <Fab size="small" color="secondary" aria-label="add">
                            <AddIcon className={cx('icon')} />
                        </Fab>
                        <div className={cx('field-number')}>
                            <p className={cx('label')}>Em bé</p>
                            <input readOnly type="text" />
                            <p className={cx('explain')}>
                                <i>Dưới 2 tuổi</i>
                            </p>
                        </div>
                        <Fab size="small" color="secondary" aria-label="add">
                            <RemoveIcon className={cx('icon')} />
                        </Fab>
                    </li>
                </ul>
            </div>
            <div className={cx('infor-payment')}>
                <p className={cx('label-box')}>Thông tin người thanh toán</p>
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
                        <label className={cx('label-gender')}>Giới tính</label>
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
                        <TextField label="Số điện thoại *" variant="standard" />
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
    );
}

export default BookingForm;
