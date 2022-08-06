import { React, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import emailjs from '@emailjs/browser';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { BsPerson } from 'react-icons/bs';
import { RiLockPasswordLine, RiMailSendLine } from 'react-icons/ri';
import {
    AiOutlinePhone,
    AiOutlineEyeInvisible,
    AiOutlineEye,
} from 'react-icons/ai';

import styles from './UserForm.scss';

const cx = classNames.bind(styles);

function SignUp() {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowComfirm, setIsShowComfirm] = useState(false);
    const [idComfirm, setIdComfirm] = useState('');

    const [fullnameForm, setFullnameForm] = useState('');
    const [contactForm, setContactForm] = useState('');
    const [passwordForm, setPasswordForm] = useState('');
    const [comfirmPasswordForm, setComfirmPasswordForm] = useState('');
    const [idComfirmForm, setIdComfirmForm] = useState('');
    const [isLikePassword, setIsLikePassword] = useState(true);

    const form = useRef();

    // useEffect(() => {
    //     setIdComfirm((Math.random() * 100000) | 0);
    // }, [contactForm]);

    const sendEmail = (event) => {
        event.preventDefault();
        checkPasswordNotLike();
        if (passwordForm === comfirmPasswordForm) {
            setIsShowComfirm(true);
            emailjs.init('2yEhb5vzhblijQk-G');
            setIdComfirm((Math.random() * 100000) | 0);
            emailjs
                .sendForm('service_zffr8pa', 'template_dfzhcfc', form.current)
                .then(
                    function () {
                        console.log('SUCCESS!');
                    },
                    function (error) {
                        console.log('FAILED...', error);
                    }
                );
        }
    };

    const handleSubmitSignUp = () => {
        console.log(idComfirmForm, idComfirm);
        checkPasswordNotLike();

        if (
            passwordForm === comfirmPasswordForm &&
            idComfirmForm === idComfirm
        ) {
            console.log(
                fullnameForm,
                contactForm,
                passwordForm,
                comfirmPasswordForm,
                idComfirmForm
            );
        }
    };

    const checkPasswordNotLike = () => {
        passwordForm === comfirmPasswordForm
            ? setIsLikePassword(true)
            : setIsLikePassword(false);
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
                            <form
                                className={cx('form-control')}
                                onSubmit={sendEmail}
                                ref={form}
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
                                            name="fullnameForm"
                                            id="fullnameForm"
                                            placeholder=" "
                                            value={fullnameForm}
                                            onChange={(e) =>
                                                setFullnameForm(e.target.value)
                                            }
                                        />
                                        <label className={cx('label-field')}>
                                            Họ tên
                                        </label>
                                        {/* {fullnameEmpty && (
                                            <p className={cx('error-field')}>
                                                "Họ tên" không được trống
                                            </p>
                                        )} */}
                                    </div>
                                    <div className={cx('fields-item')}>
                                        <span className={cx('icon-field')}>
                                            <AiOutlinePhone />
                                        </span>
                                        <input
                                            className={cx('text-field')}
                                            type="text"
                                            name="contactForm"
                                            id="contactForm"
                                            placeholder=" "
                                            value={contactForm}
                                            onChange={(e) =>
                                                setContactForm(e.target.value)
                                            }
                                        />
                                        <label className={cx('label-field')}>
                                            Email hoặc số điện thoại
                                        </label>
                                        {/* {contactEmpty && (
                                            <p className={cx('error-field')}>
                                                "Email hoặc Số điện thoại" không
                                                được trống
                                            </p>
                                        )} */}
                                    </div>
                                    <div className={cx('fields-item')}>
                                        <span className={cx('icon-field')}>
                                            <RiLockPasswordLine />
                                        </span>
                                        <input
                                            className={cx('text-field')}
                                            type={
                                                (isShowPassword && 'text') ||
                                                (!isShowPassword && 'password')
                                            }
                                            name="passwordForm"
                                            id="passwordForm"
                                            placeholder=" "
                                            value={passwordForm}
                                            onChange={(e) =>
                                                setPasswordForm(e.target.value)
                                            }
                                        />
                                        <label className={cx('label-field')}>
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
                                                    className={cx('eye-icon')}
                                                />
                                            )}
                                            {!isShowPassword && (
                                                <AiOutlineEyeInvisible
                                                    className={cx('eye-icon')}
                                                />
                                            )}
                                        </span>
                                        {/* {passwordEmpty && (
                                            <p className={cx('error-field')}>
                                                "Mật khẩu" không được trống
                                            </p>
                                        )} */}
                                    </div>
                                    <div className={cx('fields-item')}>
                                        <span className={cx('icon-field')}>
                                            <RiLockPasswordLine />
                                        </span>
                                        <input
                                            className={cx('text-field')}
                                            type={
                                                (isShowPassword && 'text') ||
                                                (!isShowPassword && 'password')
                                            }
                                            name="comfirmPasswordForm"
                                            id="comfirmPasswordForm"
                                            placeholder=" "
                                            value={comfirmPasswordForm}
                                            onChange={(e) => {
                                                setComfirmPasswordForm(
                                                    e.target.value
                                                );
                                                setIsLikePassword(true);
                                            }}
                                        />
                                        <label className={cx('label-field')}>
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
                                                    className={cx('eye-icon')}
                                                />
                                            )}
                                            {!isShowPassword && (
                                                <AiOutlineEyeInvisible
                                                    className={cx('eye-icon')}
                                                />
                                            )}
                                        </span>
                                        {!isLikePassword && (
                                            <p className={cx('error-field')}>
                                                Mật khẩu không khớp
                                            </p>
                                        )}
                                    </div>
                                    <div className={cx('fields-item')}>
                                        <input
                                            hidden
                                            type="text"
                                            name="id_comfirm"
                                            value={idComfirm}
                                            onChange={() =>
                                                setIdComfirm(idComfirm)
                                            }
                                        />
                                    </div>
                                    {isShowComfirm && (
                                        <div className={cx('fields-item')}>
                                            <div className={cx('notification')}>
                                                Mã xác minh đang gửi đến{' '}
                                                <span>{contactForm}</span>
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
                                                value={idComfirmForm}
                                                onChange={(e) =>
                                                    setIdComfirmForm(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {/* {idComfirmEmpty && (
                                                <p
                                                    className={cx(
                                                        'error-field'
                                                    )}
                                                >
                                                    "Xác nhận mật khẩu" không
                                                    được trống
                                                </p>
                                            )} */}

                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                size="small"
                                                className={cx('btn-resend')}
                                            >
                                                <span>Gửi lại</span>
                                                <RiMailSendLine />
                                            </Button>
                                        </div>
                                    )}
                                </div>
                                <div className={cx('btns-form')}>
                                    {!isShowComfirm && (
                                        <Button
                                            disabled={
                                                !contactForm ||
                                                !fullnameForm ||
                                                !passwordForm ||
                                                !comfirmPasswordForm
                                            }
                                            type="submit"
                                            className={cx('button-form')}
                                            variant="contained"
                                            size="small"
                                            color="primary"
                                        >
                                            TIẾP TỤC
                                        </Button>
                                    )}
                                    {isShowComfirm && (
                                        <Button
                                            disabled={!idComfirmForm}
                                            type="button"
                                            className={cx('button-form')}
                                            variant="contained"
                                            size="small"
                                            color="secondary"
                                            onClick={handleSubmitSignUp}
                                        >
                                            ĐĂNG KÝ
                                        </Button>
                                    )}
                                </div>
                                {!isShowComfirm && (
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
                                )}

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
                        </div>
                    </div>
                </Typography>
            </Container>
        </div>
    );
}

export default SignUp;
