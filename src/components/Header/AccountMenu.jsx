import * as React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import styles from './Header.scss';

const cx = classNames.bind(styles);
const cookies = new Cookies();

export default function AccountMenu() {
    const user = cookies.get('user');
    const [anchorEl, setAnchorEl] = React.useState(null);
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
                <Tooltip title="">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar
                            alt="User"
                            src="https://res.cloudinary.com/phtuandev/image/upload/v1660267332/GoTravel/default_user_nmc2tx.png"
                            sx={{ width: 45, height: 45 }}
                        ></Avatar>
                    </IconButton>
                </Tooltip>
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
                <MenuItem className={cx('menu-item')}>
                    <ListItemIcon>
                        <PersonAdd className={cx('icon')} />
                    </ListItemIcon>
                    Add another account
                </MenuItem>

                <Link to="/lich-su-dat-tour" className={cx('link-router')}>
                    <MenuItem className={cx('menu-item')}>
                        <ListItemIcon>
                            <Settings className={cx('icon')} />
                        </ListItemIcon>
                        Tour đã đặt
                    </MenuItem>
                </Link>
                <MenuItem
                    className={cx('menu-item')}
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
