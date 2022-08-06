import { React, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import emailjs from '@emailjs/browser';

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

    const [fullname, setFullname] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [comfirmPassword, setComfirmPassword] = useState('');
    const [randomID, setRandomID] = useState('');
    const [comfirmID, setComfirmID] = useState('');

    const handleContinueSignUp = (event) => {
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
                        },
                        function (error) {
                            console.log('FAILED...', error);
                        }
                    );
            }
        }
    };

    const handleSubmitSignUp = (event) => {
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
            };
            api.createTourist(tourist).then((res) => {
                api.createAccountTourist({
                    tkkdl_tendangnhap: contact,
                    tkkdl_matkhau: password,
                    tkkdl_trangthai: 1,
                    tkkdl_khachdulich: tourist,
                }).then((res) => {
                    setIsShowComfirmBox(false);
                    setIsSignUpComplete(true);
                    setisShowFormInformations(false);
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
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1657686014/GoTravel/Screenshot_2022-07-13_111948_kotv2a.png"
                                alt="Logo_GoTravel"
                            />
                        </div>
                        <div className={cx('content-left_slogan')}>
                            Cùng bạn khám phá Việt Nam !!!
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
                                    <p>Đăng ký</p>
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
                                                Họ tên
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
                                                Email hoặc số điện thoại
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
                                                Mật khẩu
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
                                                Xác nhận mật khẩu
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
                                                    Mật khẩu không khớp
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
                                            TIẾP TỤC
                                        </Button>
                                    </div>

                                    <div className={cx('signin-link')}>
                                        Bạn đã có tài khoản?
                                        <Link
                                            className={cx('router-link')}
                                            to="/SignIn"
                                        >
                                            Đăng nhập
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
                                    <p>Xác minh tài khoản</p>
                                    <div className={cx('form-groups')}>
                                        <div className={cx('fields-item')}>
                                            <div className={cx('notification')}>
                                                Mã xác minh đang gửi đến{' '}
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
                                                placeholder="Mã xác minh"
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
                                                    Mã xác minh không đúng
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
                                                <span>Gửi lại</span>
                                                <RiMailSendLine />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className={cx('btns-form')}>
                                        <Button
                                            type="submit"
                                            className={cx('button-form')}
                                            variant="contained"
                                            size="small"
                                            color="secondary"
                                        >
                                            ĐĂNG KÝ
                                        </Button>
                                    </div>
                                    <div className={cx('term')}>
                                        <span>
                                            Bằng cách nhấp vào <b>Đăng ký</b>,
                                            bạn đồng ý với
                                        </span>{' '}
                                        &nbsp;
                                        <span className={cx('term-link')}>
                                            Điều khoản dịch vụ, Chính sách dữ
                                            liệu, Chính sách cookie và Tiêu
                                            chuẩn cộng đồng của chúng tôi
                                        </span>
                                    </div>
                                    <div className={cx('signin-link')}>
                                        Bạn đã có tài khoản?
                                        <Link
                                            className={cx('router-link')}
                                            to="/SignIn"
                                        >
                                            Đăng nhập
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
                                        <span>Đăng ký thành công</span>
                                        <span>
                                            <BsCheckLg />
                                        </span>
                                    </h1>

                                    <Link
                                        to="/SignIn"
                                        className={cx('router-link')}
                                    >
                                        <Button
                                            type="submit"
                                            className={cx('button-signin')}
                                            variant="contained"
                                            color="secondary"
                                        >
                                            ĐĂNG NHẬP NGAY
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
