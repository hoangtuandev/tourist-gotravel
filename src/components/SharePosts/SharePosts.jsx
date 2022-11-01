import { React } from 'react';
import classNames from 'classnames/bind';
import Cookies from 'universal-cookie';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import styles from './SharePosts.scss';
import PostsItem from './PostsItem';
import RecipeReviewCard from './RecipeReviewCard';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import AddPosts from './AddPosts';
import {
    handleSetUserLogined,
    handleToggleAddSharePosts,
    openAddPosts,
} from './SharePostsSlice';
import { useEffect } from 'react';
import { baseURLServer } from '../../GlobalSlice';

const cx = classNames.bind(styles);
const cookies = new Cookies();

function SharePosts() {
    const dispatch = useDispatch();
    const openAdd = useSelector(openAddPosts);
    const baseURL = useSelector(baseURLServer);

    useEffect(() => {
        dispatch(handleSetUserLogined(cookies.get('user').others));
    }, []);

    return (
        <div className={cx('share-posts')}>
            <div className="experiance-posts">
                <div
                    className={cx('experience-share')}
                    onClick={() => dispatch(handleToggleAddSharePosts(true))}
                >
                    <div className={cx('user-experience')}>
                        <img
                            className={cx('avatar')}
                            src={`${baseURL}${
                                cookies.get('user').others.tkkdl_anhdaidien
                            }`}
                            alt=""
                        />
                        <p className={cx('label')}>
                            Chia sẻ trải nghiệm của bản thân !
                        </p>
                    </div>
                    <button variant="contained" className="button-share">
                        <ShareOutlinedIcon className="icon-share" />
                    </button>
                </div>
                <PostsItem></PostsItem>
                <PostsItem></PostsItem>
                <PostsItem></PostsItem>
            </div>
            <div>
                <div className={cx('recipe-review')}>
                    <RecipeReviewCard></RecipeReviewCard>
                    <RecipeReviewCard></RecipeReviewCard>
                </div>
            </div>
            {openAdd && <AddPosts></AddPosts>}
        </div>
    );
}

export default SharePosts;
