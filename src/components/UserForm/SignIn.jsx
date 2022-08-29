import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import BackDropCus from '../BackDrop/BackDrop';

import { RiLockPasswordLine } from 'react-icons/ri';
import {
    AiOutlinePhone,
    AiOutlineEyeInvisible,
    AiOutlineEye,
} from 'react-icons/ai';

import * as api from '../../api';
import styles from './UserForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
    handleCloseBackdrop,
    handleOpenBackdrop,
    openBackdrop,
} from '../../GlobalSlice';
// import clientURL from '../../app/clientURL';

const cx = classNames.bind(styles);
const cookies = new Cookies();

function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isOpenBackdrop = useSelector(openBackdrop);
    const [isShowPassword, setIsShowPassword] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorContent, setErrorContent] = useState('');

    const handleSignIn = (event) => {
        console.log('Sign-in');
        event.preventDefault();
        dispatch(handleOpenBackdrop());
        api.signInTourist({
            tkkdl_tendangnhap: username,
            tkkdl_matkhau: password,
        }).then((res) => {
            const { data } = res;
            console.log(data);
            if (data.notFoundUsername) {
                setErrorContent('Tài khoản không tồn tại. Vui lòng đăng ký!');
            } else if (data.wrongPassword) {
                setErrorContent('Mật khẩu không đúng');
            } else {
                setErrorContent('');
                // const url = new URL(
                //     'https://roaring-sprinkles-19120c.netlify.app/tours'
                // );
                // const hostname = url.hostname;
                // console.log(hostname);
                cookies.set('user', res.data, { path: '/' });
                // const url = new URL(window.location.href);
                console.log(navigate(-1));
                // navigate(-1);
                dispatch(handleCloseBackdrop());
            }
        });
    };

    return (
        <div className={cx('user-form sign-in')}>
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
                            Cùng bạn khám phá Việt Nam !!!
                        </div>
                    </div>
                    <div className={cx('content-right')}>
                        <div className={cx('right-form')}>
                            <div className={cx('form-background')}>
                                <img
                                    src="https://res.cloudinary.com/phtuandev/image/upload/v1657600327/GoTravel/banner-registration_knokow.jpg"
                                    alt=""
                                />
                            </div>
                            <form
                                className={cx('form-control')}
                                // onSubmit={(event) => handleSubmitSignIn(event)}
                                onSubmit={(event) => handleSignIn(event)}
                            >
                                <p>Đăng nhập</p>
                                <div className={cx('form-groups')}>
                                    <div className={cx('fields-item')}>
                                        <span className={cx('icon-field')}>
                                            <AiOutlinePhone />
                                        </span>
                                        <input
                                            className={cx('text-field')}
                                            type="text"
                                            name="username"
                                            id="username"
                                            placeholder=" "
                                            value={username}
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                        />
                                        <label className={cx('label-field')}>
                                            Email số điện thoại
                                        </label>
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
                                            name="password"
                                            id="password"
                                            placeholder=" "
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
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
                                    </div>
                                </div>
                                <div className={cx('error-signin')}>
                                    {errorContent}
                                </div>
                                <div className={cx('btns-form')}>
                                    <Button
                                        type="submit"
                                        disabled={!username || !password}
                                        className={cx('button-form')}
                                        variant="contained"
                                        size="small"
                                        color="secondary"
                                    >
                                        ĐĂNG NHẬP
                                    </Button>
                                </div>
                                <div className={cx('forgot-password')}>
                                    Bạn quên mật khẩu ?
                                </div>
                                <div className={cx('signin-link')}>
                                    Bạn chưa có tài khoản?
                                    <Link
                                        to="/dang-ky"
                                        className={cx('router-link')}
                                    >
                                        Đăng ký
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </Typography>
            </Container>

            {/* {isOpenBackdrop && <BackDropCus></BackDropCus>} */}
        </div>
    );
}

export default SignIn;
