import { React, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import emailjs from '@emailjs/browser';
import CircularProgress from '@mui/material/CircularProgress';
import { BsPerson, BsCheckLg } from 'react-icons/bs';
import { RiLockPasswordLine, RiMailSendLine } from 'react-icons/ri';
import {
    AiOutlinePhone,
    AiOutlineEyeInvisible,
    AiOutlineEye,
} from 'react-icons/ai';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import styles from './UserForm.scss';
import * as api from '../../api';

const cx = classNames.bind(styles);

function SignUp() {
    const form = useRef();
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isLikePassword, setIsLikePassword] = useState(true);
    const [isShowComfirmBox, setIsShowComfirmBox] = useState(false);
    const [isWrongComfirmID, setIsWrongComfirmID] = useState(false);
    const [isSignUpComplete, setIsSignUpComplete] = useState(false);
    const [isShowFormInformations, setisShowFormInformations] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const [fullname, setFullname] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [comfirmPassword, setComfirmPassword] = useState('');
    const [randomID, setRandomID] = useState('');
    const [comfirmID, setComfirmID] = useState('');

    const handleContinueSignUp = (event) => {
        setIsLoading(true);
        event.preventDefault();
        // CHECK PASSWORD
        password === comfirmPassword
            ? setIsLikePassword(true)
            : setIsLikePassword(false);

        // SEND MAIL
        if (password === comfirmPassword) {
            if (!contact.includes('@')) {
                handleSubmitSignUp(event);
            } else {
                emailjs.init('2yEhb5vzhblijQk-G');
                form.current.comfirmID.value = (Math.random() * 100000) | 0;
                setRandomID(form.current.comfirmID.value);
                emailjs
                    .sendForm(
                        'service_zffr8pa',
                        'template_dfzhcfc',
                        form.current
                    )
                    .then(
                        function () {
                            setIsShowComfirmBox(true);
                            setIsLoading(false);
                        },
                        function (error) {
                            console.log('FAILED...', error);
                        }
                    );
            }
        }
    };

    const handleSubmitSignUp = (event) => {
        setIsLoading(true);
        event.preventDefault();
        if (randomID === comfirmID || !contact.includes('@')) {
            setIsWrongComfirmID(false);
            const current = new Date().getTime();
            const randomID = `KDL${current}`;
            const tourist = {
                kdl_ma: randomID,
                kdl_hoten: fullname,
                kdl_cccd: '',
                kdl_gioitinh: null,
                kdl_sotaikhoan: '',
                kdl_sodienthoai: contact.includes('@') ? '' : contact,
                kdl_email: contact.includes('@') ? contact : '',
                kdl_diachi: '',
            };
            api.createTourist(tourist).then((res) => {
                api.createAccountTourist({
                    tkkdl_tendangnhap: contact,
                    tkkdl_matkhau: password,
                    tkkdl_anhdaidien: '',
                    tkkdl_trangthai: 1,
                    tkkdl_khachdulich: tourist,
                }).then((res) => {
                    setIsShowComfirmBox(false);
                    setIsSignUpComplete(true);
                    setisShowFormInformations(false);
                    setIsLoading(false);
                });
            });
        } else {
            setIsWrongComfirmID(true);
        }
    };

    const reSendMail = () => {
        emailjs.init('2yEhb5vzhblijQk-G');
        form.current.comfirmID.value = (Math.random() * 100000) | 0;
        setRandomID(form.current.comfirmID.value);

        emailjs
            .sendForm('service_zffr8pa', 'template_dfzhcfc', form.current)
            .then(
                function () {
                    console.log(' RESEND SUCCESS!');
                },
                function (error) {
                    console.log('FAILED...', error);
                }
            );
    };

    return (
        <div className={cx('user-form sign-up')}>
            <CssBaseline />
            <Container fixed>
                <Typography
                    className={cx('user-form_content')}
                    component="div"
                    style={{ height: '100vh' }}
                >
                    <div className={cx('content-left')}>
                        <div className={cx('content-left_logo')}>
                            <Link to="/" className={cx('link-router')}>
                                <img
                                    src="https://res.cloudinary.com/phtuandev/image/upload/v1657686014/GoTravel/Screenshot_2022-07-13_111948_kotv2a.png"
                                    alt="Logo_GoTravel"
                                />
                            </Link>
                        </div>
                        <div className={cx('content-left_slogan')}>
                            C??ng b???n kh??m ph?? Vi???t Nam !!!
                        </div>
                    </div>
                    <div className={cx('content-right')}>
                        <div className={cx('right-form')}>
                            <div className={cx('form-background')}>
                                <img
                                    src="https://res.cloudinary.com/phtuandev/image/upload/v1657600326/GoTravel/banner-registration-1_m3deya.jpg"
                                    alt=""
                                />
                            </div>

                            {isShowFormInformations && (
                                <form
                                    hidden={isShowComfirmBox}
                                    className={cx('form-control')}
                                    ref={form}
                                    onSubmit={(event) =>
                                        handleContinueSignUp(event)
                                    }
                                >
                                    <p>????ng k??</p>
                                    <div className={cx('form-groups')}>
                                        <div className={cx('fields-item')}>
                                            <span className={cx('icon-field')}>
                                                <BsPerson />
                                            </span>
                                            <input
                                                className={cx('text-field')}
                                                type="text"
                                                name="fullname"
                                                id="fullname"
                                                placeholder=" "
                                                value={fullname}
                                                onChange={(e) =>
                                                    setFullname(e.target.value)
                                                }
                                            />
                                            <label
                                                className={cx('label-field')}
                                            >
                                                H??? t??n
                                            </label>
                                        </div>
                                        <div className={cx('fields-item')}>
                                            <span className={cx('icon-field')}>
                                                <AiOutlinePhone />
                                            </span>
                                            <input
                                                className={cx('text-field')}
                                                type="text"
                                                name="contact"
                                                id="contact"
                                                placeholder=" "
                                                value={contact}
                                                onChange={(e) =>
                                                    setContact(e.target.value)
                                                }
                                            />
                                            <label
                                                className={cx('label-field')}
                                            >
                                                Email ho???c s??? ??i???n tho???i
                                            </label>
                                        </div>
                                        <div className={cx('fields-item')}>
                                            <span className={cx('icon-field')}>
                                                <RiLockPasswordLine />
                                            </span>
                                            <input
                                                className={cx('text-field')}
                                                type={
                                                    (isShowPassword &&
                                                        'text') ||
                                                    (!isShowPassword &&
                                                        'password')
                                                }
                                                name="password"
                                                id="password"
                                                placeholder=" "
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                            />
                                            <label
                                                className={cx('label-field')}
                                            >
                                                M???t kh???u
                                            </label>
                                            <span
                                                className={cx('toggle-eye')}
                                                onClick={() =>
                                                    setIsShowPassword(
                                                        !isShowPassword
                                                    )
                                                }
                                            >
                                                {isShowPassword && (
                                                    <AiOutlineEye
                                                        className={cx(
                                                            'eye-icon'
                                                        )}
                                                    />
                                                )}
                                                {!isShowPassword && (
                                                    <AiOutlineEyeInvisible
                                                        className={cx(
                                                            'eye-icon'
                                                        )}
                                                    />
                                                )}
                                            </span>
                                        </div>
                                        <div className={cx('fields-item')}>
                                            <span className={cx('icon-field')}>
                                                <RiLockPasswordLine />
                                            </span>
                                            <input
                                                className={cx('text-field')}
                                                type={
                                                    (isShowPassword &&
                                                        'text') ||
                                                    (!isShowPassword &&
                                                        'password')
                                                }
                                                name="comfirmPassword"
                                                id="comfirmPassword"
                                                placeholder=" "
                                                value={comfirmPassword}
                                                onChange={(e) =>
                                                    setComfirmPassword(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <label
                                                className={cx('label-field')}
                                            >
                                                X??c nh???n m???t kh???u
                                            </label>
                                            <span
                                                className={cx('toggle-eye')}
                                                onClick={() =>
                                                    setIsShowPassword(
                                                        !isShowPassword
                                                    )
                                                }
                                            >
                                                {isShowPassword && (
                                                    <AiOutlineEye
                                                        className={cx(
                                                            'eye-icon'
                                                        )}
                                                    />
                                                )}
                                                {!isShowPassword && (
                                                    <AiOutlineEyeInvisible
                                                        className={cx(
                                                            'eye-icon'
                                                        )}
                                                    />
                                                )}
                                            </span>
                                            {!isLikePassword && (
                                                <p
                                                    className={cx(
                                                        'error-field'
                                                    )}
                                                >
                                                    M???t kh???u kh??ng kh???p
                                                </p>
                                            )}
                                        </div>
                                        <div className={cx('fields-item')}>
                                            <input
                                                type="hidden"
                                                name="comfirmID"
                                                id="comfirmID"
                                                value={randomID}
                                                onChange={() =>
                                                    setRandomID(randomID)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className={cx('btns-form')}>
                                        {!isLoading && (
                                            <Button
                                                disabled={
                                                    !fullname ||
                                                    !contact ||
                                                    !password ||
                                                    !comfirmPassword
                                                }
                                                type="submit"
                                                className={cx('button-form')}
                                                variant="contained"
                                                size="small"
                                                color="primary"
                                            >
                                                TI???P T???C
                                            </Button>
                                        )}
                                        {isLoading && (
                                            <Button
                                                disabled
                                                type="submit"
                                                className={cx('button-form')}
                                                variant="contained"
                                                size="small"
                                            >
                                                <CircularProgress
                                                    color="inherit"
                                                    size={22}
                                                    className={cx(
                                                        'circular-progress'
                                                    )}
                                                />
                                                TI???P T???C
                                            </Button>
                                        )}
                                    </div>

                                    <div className={cx('signin-link')}>
                                        B???n ???? c?? t??i kho???n?
                                        <Link
                                            className={cx('router-link')}
                                            to="/dang-nhap"
                                        >
                                            ????ng nh???p
                                        </Link>
                                    </div>
                                </form>
                            )}

                            {isShowComfirmBox && (
                                <form
                                    className={cx('form-control comfirm-box')}
                                    onSubmit={(event) =>
                                        handleSubmitSignUp(event)
                                    }
                                >
                                    <p>X??c minh t??i kho???n</p>
                                    <div className={cx('form-groups')}>
                                        <div className={cx('fields-item')}>
                                            <div className={cx('notification')}>
                                                M?? x??c minh ??ang g???i ?????n{' '}
                                                <span>{contact}</span>
                                            </div>
                                            <span
                                                className={cx(
                                                    'icon-field-comfirm'
                                                )}
                                            >
                                                GO-
                                            </span>
                                            <input
                                                className={cx(
                                                    'text-field-confirm'
                                                )}
                                                type="text"
                                                name="idConfirmForm"
                                                id="idConfirmForm"
                                                placeholder="M?? x??c minh"
                                                value={comfirmID}
                                                onChange={(e) =>
                                                    setComfirmID(e.target.value)
                                                }
                                            />
                                            {isWrongComfirmID && (
                                                <p
                                                    className={cx(
                                                        'error-field'
                                                    )}
                                                >
                                                    M?? x??c minh kh??ng ????ng
                                                </p>
                                            )}

                                            <Button
                                                type="button"
                                                variant="contained"
                                                color="primary"
                                                size="small"
                                                className={cx('btn-resend')}
                                                onClick={() => reSendMail()}
                                            >
                                                <span>G???i l???i</span>
                                                <RiMailSendLine />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className={cx('btns-form')}>
                                        {!isLoading && (
                                            <Button
                                                type="submit"
                                                className={cx('button-form')}
                                                variant="contained"
                                                size="small"
                                                color="secondary"
                                            >
                                                ????NG K??
                                            </Button>
                                        )}
                                        {isLoading && (
                                            <Button
                                                type="submit"
                                                className={cx('button-form')}
                                                variant="contained"
                                                size="small"
                                                color="secondary"
                                            >
                                                <CircularProgress
                                                    color="inherit"
                                                    size={22}
                                                    className={cx(
                                                        'circular-progress'
                                                    )}
                                                />
                                                ????NG K??
                                            </Button>
                                        )}
                                    </div>
                                    <div className={cx('term')}>
                                        <span>
                                            B???ng c??ch nh???p v??o <b>????ng k??</b>,
                                            b???n ?????ng ?? v???i
                                        </span>{' '}
                                        &nbsp;
                                        <span className={cx('term-link')}>
                                            ??i???u kho???n d???ch v???, Ch??nh s??ch d???
                                            li???u, Ch??nh s??ch cookie v?? Ti??u
                                            chu???n c???ng ?????ng c???a ch??ng t??i
                                        </span>
                                    </div>
                                    <div className={cx('signin-link')}>
                                        B???n ???? c?? t??i kho???n?
                                        <Link
                                            className={cx('router-link')}
                                            to="/dang-nhap"
                                        >
                                            ????ng nh???p
                                        </Link>
                                    </div>
                                </form>
                            )}

                            {isSignUpComplete && (
                                <div
                                    className={cx(
                                        'form-control signup-complete'
                                    )}
                                >
                                    <h1>
                                        <span>????ng k?? th??nh c??ng</span>
                                        <span>
                                            <BsCheckLg />
                                        </span>
                                    </h1>

                                    <Link
                                        to="/dang-nhap"
                                        className={cx('router-link')}
                                    >
                                        <Button
                                            type="submit"
                                            className={cx('button-signin')}
                                            variant="contained"
                                            color="secondary"
                                        >
                                            ????NG NH???P NGAY
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </Typography>
            </Container>
        </div>
    );
}

export default SignUp;
