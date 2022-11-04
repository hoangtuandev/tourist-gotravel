import * as React from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import PublicIcon from '@mui/icons-material/Public';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DialogTitle from '@mui/material/DialogTitle';
import styles from './SharePosts.scss';
import * as api from '../../api';
import {
    handleToggleAddSharePosts,
    openAddPosts,
    userLogined,
} from './SharePostsSlice';
import { useState } from 'react';

const cx = classNames.bind(styles);
// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

export default function AddPosts() {
    const baseURL = 'http://localhost:5000/static/';
    const dispatch = useDispatch();
    const openDialog = useSelector(openAddPosts);
    const user = useSelector(userLogined);

    const [isLoading, setIsLoading] = useState(false);
    const [labelImg, setLabelImg] = useState({});
    const [previewLabelImg, setPreviewLabelImg] = useState(null);
    const [titlePosts, setTitlePosts] = useState('');
    const [contentPosts, setContentPosts] = useState('');

    const setRandomID = () => {
        const current = new Date().getTime();
        const randomID = `BVCS00${current}`;
        return randomID;
    };

    const onChangeAvatar = (event) => {
        setLabelImg(event.target.files[0]);
        const file = event.target.files[0];
        file.preview = URL.createObjectURL(file);

        setPreviewLabelImg(file.preview);
    };

    const handleSaveSharePosts = () => {
        setIsLoading(true);
        let formData = new FormData();
        formData.append('image', labelImg);

        api.createSharePosts({
            formData: formData,
            datas: {
                bvcs_ma: setRandomID(),
                bvcs_tieude: titlePosts,
                bvcs_noidung: contentPosts,
                bvcs_luotthich: 0,
                bvcs_binhluan: [],
                bvcs_taikhoan: user,
                bvcs_thoigian: new Date(),
                bvcs_trangthai: 1,
            },
        }).then((res) => {
            setIsLoading(false);
            dispatch(handleToggleAddSharePosts(false));
        });
    };

    return (
        <div>
            <Dialog
                open={openDialog}
                onClose={() => dispatch(handleToggleAddSharePosts(false))}
                className={cx('dialog-add-posts')}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle className={cx('dialog-title')}>
                    Chia sẻ kinh nghiệm
                </DialogTitle>
                <DialogContent className={cx('dialog-content')}>
                    <div className={cx('header-form')}>
                        {user.tkkdl_anhdaidien && (
                            <img
                                src={`${baseURL}${user.tkkdl_anhdaidien}`}
                                alt=""
                                className="avatar"
                            />
                        )}
                        {!user.tkkdl_anhdaidien && (
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1666851369/GoTravel/360_F_340124934_ocif6t.jpg"
                                alt=""
                                className="avatar"
                            />
                        )}
                        <div className="user">
                            <p className="user-name">
                                {user.tkkdl_khachdulich.kdl_hoten}
                            </p>
                            <p className="permission">
                                <PublicIcon className="icon-permission" />
                                <span>Công khai</span>
                            </p>
                        </div>
                    </div>

                    <div className={cx('body-form')}>
                        <div className={cx('image-label')}>
                            <Fab
                                className={cx('button-upload-image')}
                                variant="outlined"
                                component="label"
                            >
                                <AddPhotoAlternateIcon className="cameraIcon" />
                                <input
                                    hidden
                                    accept="image/*"
                                    type="file"
                                    onChange={onChangeAvatar}
                                />
                            </Fab>
                            {previewLabelImg && (
                                <img src={previewLabelImg} alt="" />
                            )}

                            {!previewLabelImg && (
                                <img
                                    src="https://res.cloudinary.com/phtuandev/image/upload/v1667197566/GoTravel/placeholder_pbrxac.jpg"
                                    alt=""
                                />
                            )}
                        </div>
                        <div className={cx('label-posts')}>
                            <input
                                type="text"
                                placeholder="Tiêu đề trải nghiệm..."
                                value={titlePosts}
                                onChange={(e) => setTitlePosts(e.target.value)}
                            />
                        </div>
                        <div className={cx('content-posts')}>
                            <textarea
                                name=""
                                id=""
                                rows={25}
                                placeholder="Chia sẻ trải nghiệm của bản thân..."
                                value={contentPosts}
                                onChange={(e) =>
                                    setContentPosts(e.target.value)
                                }
                            ></textarea>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions className={cx('dialog-actions')}>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={() =>
                            dispatch(handleToggleAddSharePosts(false))
                        }
                    >
                        ĐÓNG
                    </Button>
                    {!isLoading && (
                        <Button
                            variant="contained"
                            color="success"
                            onClick={() => handleSaveSharePosts()}
                        >
                            CHIA SẺ
                        </Button>
                    )}
                    {isLoading && (
                        <Button variant="contained" color="success" disabled>
                            CHIA SẺ
                        </Button>
                    )}
                </DialogActions>
            </Dialog>
        </div>
    );
}
