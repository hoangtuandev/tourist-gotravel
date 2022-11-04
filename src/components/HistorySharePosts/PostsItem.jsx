import { React } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import Checkbox from '@mui/material/Checkbox';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Favorite from '@mui/icons-material/Favorite';
import styles from './HistorySharePosts.scss';
import { useState, useEffect } from 'react';
import { baseURLServer } from '../../GlobalSlice';
import * as api from '../../api';

const cx = classNames.bind(styles);

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function PostsItem(props) {
    const baseURL = useSelector(baseURLServer);

    const [author, setAuthor] = useState(null);
    const [posts, setPosts] = useState(props.posts);

    const filterContent = (item) => item !== '';
    const contentPosts = posts.bvcs_noidung.split('\n').filter(filterContent);

    useEffect(() => {
        api.getTouristAccountById({ idAccount: posts.bvcs_taikhoan._id }).then(
            (res) => {
                setAuthor(res.data[0]);
            }
        );
    }, [posts]);

    function prettyDate(time) {
        var date = new Date(time);
        var diff = (new Date().getTime() - date.getTime()) / 1000,
            day_diff = Math.floor(diff / 86400);

        if (isNaN(day_diff) || day_diff < 0) return;

        return (
            (day_diff === 0 &&
                ((diff < 60 && 'vừa xong') ||
                    (diff < 120 && '1 phút trước') ||
                    (diff < 3600 && Math.floor(diff / 60) + ' phút trước') ||
                    (diff < 7200 && '1 giờ trước') ||
                    (diff < 86400 &&
                        Math.floor(diff / 3600) + ' giờ trước'))) ||
            (day_diff === 1 && '1 ngày trước') ||
            (day_diff < 7 && day_diff + ' ngày trước') ||
            (day_diff < 31 && Math.ceil(day_diff / 7) + ' tuần trước') ||
            (day_diff > 31 && Math.floor(day_diff / 31) + ' tháng trước')
        );
    }

    return (
        <div className={cx('posts-item')}>
            <div className={cx('panel-posts')}>
                <img
                    className={cx('image-posts')}
                    src={`${baseURL}${posts.bvcs_hinhanhtieude}`}
                    alt=""
                />
                <p className={cx('title-posts')}>{posts.bvcs_tieude}</p>
            </div>
            <div className={cx('body-posts')}>
                <div className={cx('tourist-posts')}>
                    {author && (
                        <div className={cx('account')}>
                            <img
                                className="avatar-account"
                                src={`${baseURL}${author.tkkdl_anhdaidien}`}
                                alt=""
                            />
                            <div className={cx('infor-post')}>
                                <p className="name-tourist">
                                    {author.tkkdl_khachdulich.kdl_hoten}
                                </p>
                                <p className="datetime-post">
                                    {prettyDate(posts.bvcs_thoigian)}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <div className={cx('content-posts')}>
                    {contentPosts.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <div className={cx('interact-posts')}>
                    <div className={cx('interact-item')}>
                        <Checkbox
                            {...label}
                            icon={<Favorite className="favorite-icon" />}
                            checkedIcon={<Favorite className="favorite-icon" />}
                            className={cx('interact-checkbox')}
                        />
                        <p className={cx('interact-value')}>
                            {posts.bvcs_luotthich.length}
                        </p>
                    </div>

                    <div className={cx('interact-item')}>
                        <Checkbox
                            {...label}
                            icon={
                                <ForumOutlinedIcon className="interact-icon" />
                            }
                            checkedIcon={
                                <ForumOutlinedIcon className="interact-icon" />
                            }
                            className={cx('interact-checkbox')}
                        />
                        <p className={cx('interact-value')}>
                            {posts.bvcs_binhluan.length}
                        </p>
                    </div>
                    <div className={cx('interact-item')}>
                        <Checkbox
                            {...label}
                            icon={
                                <ShareOutlinedIcon className="interact-icon" />
                            }
                            checkedIcon={
                                <ShareOutlinedIcon className="interact-icon" />
                            }
                            className={cx('interact-checkbox')}
                        />
                        <p className={cx('interact-value')}>
                            {posts.bvcs_luotchiase.length}
                        </p>
                    </div>
                </div>
                {posts.bvcs_binhluan.length > 0 && (
                    <div className="comments-posts">
                        <div className="comment-list">
                            {posts.bvcs_binhluan.map((comment, index) => (
                                <div
                                    key={index}
                                    comment={comment}
                                    className="comment-item"
                                >
                                    {comment.blbv_taikhoan.tkkdl_anhdaidien && (
                                        <img
                                            src={`${baseURL}${comment.blbv_taikhoan.tkkdl_anhdaidien}`}
                                            alt=""
                                            className="avatar-comment"
                                        />
                                    )}
                                    {!comment.blbv_taikhoan
                                        .tkkdl_anhdaidien && (
                                        <img
                                            src="https://res.cloudinary.com/phtuandev/image/upload/v1666851369/GoTravel/360_F_340124934_ocif6t.jpg"
                                            alt=""
                                            className="avatar-comment"
                                        />
                                    )}
                                    <div>
                                        <div className="content-comment">
                                            <p className="user">
                                                {
                                                    comment.blbv_taikhoan
                                                        .tkkdl_khachdulich
                                                        .kdl_hoten
                                                }
                                            </p>
                                            <p className="detail">
                                                {comment.blbv_noidung}
                                            </p>
                                        </div>
                                        <div className="interact-comment">
                                            <p className="time">
                                                {prettyDate(
                                                    comment.blbv_thoigian
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PostsItem;
