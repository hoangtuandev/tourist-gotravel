import { React } from 'react';
import classNames from 'classnames/bind';

import styles from './SharePosts.scss';
import PostsItem from './PostsItem';
import RecipeReviewCard from './RecipeReviewCard';

const cx = classNames.bind(styles);

function SharePosts() {
    return (
        <div className={cx('share-posts')}>
            <div className="experiance-posts">
                <PostsItem></PostsItem>
                <PostsItem></PostsItem>
                <PostsItem></PostsItem>
            </div>
            <div className={cx('recipe-review')}>
                <RecipeReviewCard></RecipeReviewCard>
            </div>
        </div>
    );
}

export default SharePosts;
