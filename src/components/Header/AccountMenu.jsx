import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { GiSailboat } from 'react-icons/gi';
import { BiLandscape } from 'react-icons/bi';
import IconButton from '@mui/material/IconButton';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import styles from './Header.scss';
import * as api from '../../api';
import { baseURLServer } from '../../GlobalSlice';

const cx = classNames.bind(styles);
const cookies = new Cookies();

export default function AccountMenu() {
    const [userLogin, setUserLogin] = useState(null);
    const baseURL = useSelector(baseURLServer);

    const [anchorEl, setAnchorEl] = React.useState(null);

    useEffect(() => {
        api.getTouristAccountById({
            idAccount: cookies.get('user').others._id,
        }).then((res) => {
            setUserLogin(res.data[0]);
        });
    }, []);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSignOut = () => {
        console.log('Sign-out');
        cookies.remove('user');
        window.location.href = '/dang-nhap';
    };

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                {userLogin && (
                    <Tooltip title="">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            {userLogin.tkkdl_anhdaidien && (
                                <Avatar
                                    alt="User"
                                    src={`${baseURL}${userLogin.tkkdl_anhdaidien}`}
                                    sx={{ width: 45, height: 45 }}
                                ></Avatar>
                            )}

                            {!userLogin.tkkdl_anhdaidien && (
                                <Avatar
                                    alt="User"
                                    src="https://res.cloudinary.com/phtuandev/image/upload/v1660267332/GoTravel/default_user_nmc2tx.png"
                                    sx={{ width: 45, height: 45 }}
                                ></Avatar>
                            )}
                        </IconButton>
                    </Tooltip>
                )}
            </Box>
            <Menu
                anchorEl={anchorEl}
                className={cx('account-menu')}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 22,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Link to="/ho-so" className={cx('link-router')}>
                    <MenuItem className={cx('menu-item')}>
                        <ListItemIcon>
                            <AccountCircleIcon className={cx('icon')} />
                        </ListItemIcon>
                        Thông tin tài khoản
                    </MenuItem>
                </Link>

                <Link to="/lich-su-dat-tour" className={cx('link-router')}>
                    <MenuItem className={cx('menu-item')}>
                        <ListItemIcon>
                            <GiSailboat className={cx('icon')} />
                        </ListItemIcon>
                        Tour đã đặt
                    </MenuItem>
                </Link>
                <Link to="/dia-diem-da-luu" className={cx('link-router')}>
                    <MenuItem className={cx('menu-item')}>
                        <ListItemIcon>
                            <BiLandscape className={cx('icon')} />
                        </ListItemIcon>
                        Địa điểm đã lưu
                    </MenuItem>
                </Link>
                <Link to="/bai-viet-da-chia-se" className={cx('link-router')}>
                    <MenuItem className={cx('menu-item')}>
                        <ListItemIcon>
                            <ShareOutlinedIcon className={cx('icon')} />
                        </ListItemIcon>
                        Bài viết đã chia sẻ
                    </MenuItem>
                </Link>
                <MenuItem
                    className={cx('menu-item logout-option')}
                    onClick={() => handleSignOut()}
                >
                    <ListItemIcon>
                        <Logout className={cx('icon')} />
                    </ListItemIcon>
                    Đăng xuất
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
