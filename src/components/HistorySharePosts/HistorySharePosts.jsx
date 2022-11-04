import { React, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Cookies from 'universal-cookie';
import styles from './HistorySharePosts.scss';
import * as api from '../../api';
import PostsItem from './PostsItem';

const cx = classNames.bind(styles);
const cookies = new Cookies();

function HistorySharePosts() {
    const userLogin = cookies.get('user').others;

    const [postsList, setPostsList] = useState([]);

    useEffect(() => {
        api.historySharePostsByTourist({ idAccount: userLogin._id }).then(
            (res) => {
                setPostsList(res.data);
            }
        );
    }, []);

    return (
        <div className="history-share-posts">
            <p className="history-panel-label"> BÀI VIẾT ĐÃ CHIA SẺ</p>
            {postsList.length !== 0 && (
                <div className={cx('share-posts-list')}>
                    {postsList.map((posts, index) => (
                        <PostsItem key={index} posts={posts}></PostsItem>
                    ))}
                </div>
            )}
            {postsList.length === 0 && (
                <div className={cx('empty-list')}>
                    <p>Không có địa điểm nào được lưu !</p>
                    <img
                        src="https://res.cloudinary.com/phtuandev/image/upload/v1660285963/GoTravel/undraw_Explore_re_8l4v_lvunn9.png"
                        alt="empty list"
                    />
                </div>
            )}
        </div>
    );
}

export default HistorySharePosts;
