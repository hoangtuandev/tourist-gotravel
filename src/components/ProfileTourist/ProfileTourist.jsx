import { React, useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import classNames from 'classnames/bind';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import styles from './ProfileTourist.scss';
import * as api from '../../api';

const baseURL = 'http://localhost:5000/static/';
const cx = classNames.bind(styles);
const cookies = new Cookies();

function ProfileTourist() {
    const [isLoading, setIsLoading] = useState(false);
    const [avatarImage, setAvatarImage] = useState({});
    const [previewAvatar, setPreviewAvatar] = useState(null);
    const [profileTourist, setProfileTourist] = useState(null);
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [gendar, setGendar] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [email, setEmail] = useState('');
    const [identify, setIdentify] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        api.getTouristAccountById({
            idAccount: cookies.get('user').others._id,
        }).then((res) => {
            setProfileTourist(res.data[0]);
            setPreviewAvatar(
                res.data[0].tkkdl_anhdaidien
                    ? `${baseURL}${res.data[0].tkkdl_anhdaidien}`
                    : ''
            );
            setUsername(res.data[0].tkkdl_tendangnhap);
            setFullname(res.data[0].tkkdl_khachdulich.kdl_hoten);
            setGendar(res.data[0].tkkdl_khachdulich.kdl_gioitinh);
            setNumberPhone(res.data[0].tkkdl_khachdulich.kdl_sodienthoai);
            setEmail(res.data[0].tkkdl_khachdulich.kdl_email);
            setAddress(res.data[0].tkkdl_khachdulich.kdl_diachi);
            setIdentify(res.data[0].tkkdl_khachdulich.kdl_cccd);
        });
    }, []);

    const onChangeAvatar = (event) => {
        setAvatarImage(event.target.files[0]);
        const file = event.target.files[0];
        file.preview = URL.createObjectURL(file);

        setPreviewAvatar(file.preview);
    };

    const onSaveProfileTourist = () => {
        setIsLoading(true);
        let formData = new FormData();
        formData.append('avatar', avatarImage);

        api.updateProfileTourist({
            kdl_ma: profileTourist.tkkdl_khachdulich.kdl_ma,
            kdl_hoten: fullname,
            kdl_cccd: identify,
            kdl_gioitinh: gendar,
            kdl_sodienthoai: numberPhone,
            kdl_email: email,
            kdl_diachi: address,
        }).then((res) => {
            api.updateProfileTouristAccount({
                idAccount: profileTourist._id,
                profile: res.data[0],
            }).then((res) => {
                api.changeAvatarAccountTourist({
                    formData: formData,
                    idAccount: profileTourist._id,
                }).then((res) => {
                    setProfileTourist(res.data[0]);
                    setPreviewAvatar(
                        `${baseURL}${res.data[0].tkkdl_anhdaidien}`
                    );

                    setFullname(res.data[0].tkkdl_khachdulich.kdl_hoten);
                    setGendar(res.data[0].tkkdl_khachdulich.kdl_gioitinh);
                    setNumberPhone(
                        res.data[0].tkkdl_khachdulich.kdl_sodienthoai
                    );
                    setEmail(res.data[0].tkkdl_khachdulich.kdl_email);
                    setAddress(res.data[0].tkkdl_khachdulich.kdl_diachi);
                    setIdentify(res.data[0].tkkdl_khachdulich.kdl_cccd);
                    setIsLoading(false);
                });
            });
        });

        // axios({
        //     method: 'post',
        //     url: 'http://localhost:5000/uploadFile',
        //     data: formData,
        // }).then((res) => {
        //     console.log('success');
        // });
    };

    return (
        <div className={cx('profile-tourist')}>
            <p className={cx('label-profile')}>
                <span>TH??NG TIN KH??CH DU L???CH</span>
            </p>
            <div className={cx('content-profile')}>
                <div className={cx('profile-account')}>
                    {previewAvatar && (
                        <img
                            className="avatar-account"
                            src={previewAvatar}
                            alt=""
                        />
                    )}

                    {!previewAvatar && (
                        <img
                            className="avatar-account"
                            src="https://res.cloudinary.com/phtuandev/image/upload/v1666851369/GoTravel/360_F_340124934_ocif6t.jpg"
                            alt=""
                        />
                    )}

                    <Button
                        className={cx('button-upload-avatar')}
                        variant="outlined"
                        component="label"
                    >
                        <PhotoCamera className="cameraIcon" />
                        <span>Thay ?????i ???nh ?????i di???n</span>
                        <input
                            hidden
                            accept="image/*"
                            type="file"
                            onChange={onChangeAvatar}
                        />
                    </Button>
                    <div className={cx('account-information')}>
                        <p>T??I KHO???N ????NG NH???P</p>
                        <div className={cx('text-field')}>
                            <PersonIcon className="field-icon" />
                            <input
                                readOnly
                                type="text"
                                onChange={() => {}}
                                value={username}
                            />
                        </div>
                        <div className={cx('text-field')}>
                            <LockIcon className="field-icon" />
                            <input
                                readOnly
                                type="password"
                                value="matkhauuu"
                                onChange={() => {}}
                            />
                        </div>
                    </div>
                </div>
                <div className={cx('profile-information')}>
                    <ul>
                        <li>
                            <TextField
                                label="H??? v?? t??n"
                                variant="standard"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                            />
                        </li>
                        <li className={cx('textfield-gender')}>
                            <label className={cx('label-gender')}>
                                Gi???i t??nh
                            </label>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={gendar}
                                onChange={(e) => setGendar(e.target.value)}
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
                                    value="N???"
                                    control={
                                        <Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 22,
                                                },
                                            }}
                                        />
                                    }
                                    label="N???"
                                />
                                <FormControlLabel
                                    value="Kh??c"
                                    control={
                                        <Radio
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    fontSize: 22,
                                                },
                                            }}
                                        />
                                    }
                                    label="Kh??c"
                                />
                            </RadioGroup>
                        </li>
                        <li>
                            <TextField
                                label="S??? ??i???n tho???i"
                                variant="standard"
                                value={numberPhone}
                                onChange={(e) => setNumberPhone(e.target.value)}
                            />
                        </li>
                        <li>
                            <TextField
                                label="Email"
                                variant="standard"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </li>
                        <li>
                            <TextField
                                label="CCCD/CMT"
                                variant="standard"
                                value={identify}
                                onChange={(e) => setIdentify(e.target.value)}
                            />
                        </li>
                        <li>
                            <TextField
                                label="?????a ch???"
                                variant="standard"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </li>
                    </ul>
                    <div className="actions">
                        {!isLoading && (
                            <Button
                                variant="contained"
                                color="success"
                                onClick={onSaveProfileTourist}
                            >
                                L??U THAY ?????I
                            </Button>
                        )}
                        {isLoading && (
                            <Button
                                disabled
                                variant="contained"
                                color="success"
                            >
                                L??U THAY ?????I
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileTourist;
