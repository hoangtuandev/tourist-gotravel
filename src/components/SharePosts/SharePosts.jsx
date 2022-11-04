import { React, useState } from 'react';
import classNames from 'classnames/bind';
import Cookies from 'universal-cookie';
import { useSelector, useDispatch } from 'react-redux';
import styles from './SharePosts.scss';
import PostsItem from './PostsItem';
import RecipeReviewCard from './RecipeReviewCard';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import AddPosts from './AddPosts';
import * as api from '../../api';
import {
    handleSetUserLogined,
    handleToggleAddSharePosts,
    openAddPosts,
    openViewPosts,
} from './SharePostsSlice';
import { useEffect } from 'react';
import { baseURLServer } from '../../GlobalSlice';
import ViewPosts from './ViewPosts';

const cx = classNames.bind(styles);
const cookies = new Cookies();

const datas = [
    {
        avatar: 'https://res.cloudinary.com/phtuandev/image/upload/v1666082437/Avatar/anh-chan-dung-nghe-thuat-top-aphoto3_drf4vc.jpg',
        fullname: 'Đặng Hồ Mỹ Duyên',
        image: 'https://res.cloudinary.com/phtuandev/image/upload/v1663816809/GoTravel/sun-2-7210_u1iqjl.jpg',
    },
    {
        avatar: 'https://res.cloudinary.com/phtuandev/image/upload/v1666082021/Avatar/anh-chan-dung-nam_j0kahx.jpg',
        fullname: 'Trần Khánh Nam',
        image: 'https://res.cloudinary.com/phtuandev/image/upload/v1663818516/GoTravel/Khu_du_l%E1%BB%8Bch_%C4%90%C3%A0_L%E1%BA%A1t_Fresh_oxy8si.jpg',
    },
];

function SharePosts() {
    const dispatch = useDispatch();
    const openAdd = useSelector(openAddPosts);
    const openView = useSelector(openViewPosts);
    const baseURL = useSelector(baseURLServer);

    const [postsList, setPostsList] = useState([]);
    const [userLogin, setUserLogin] = useState(null);

    useEffect(() => {
        api.getTouristAccountById({
            idAccount: cookies.get('user').others._id,
        }).then((res) => {
            setUserLogin(res.data[0]);
        });
    }, []);

    useEffect(() => {
        dispatch(handleSetUserLogined(userLogin));
    }, [userLogin]);

    useEffect(() => {
        api.getAcceptedSharePosts().then((res) => {
            setPostsList(res.data);
        });
    }, []);

    return (
        <div className={cx('share-posts')}>
            <div className="experiance-posts">
                <div
                    className={cx('experience-share')}
                    onClick={() => dispatch(handleToggleAddSharePosts(true))}
                >
                    {userLogin && (
                        <div className={cx('user-experience')}>
                            {userLogin.tkkdl_anhdaidien && (
                                <img
                                    className={cx('avatar')}
                                    src={`${baseURL}${userLogin.tkkdl_anhdaidien}`}
                                    alt=""
                                />
                            )}
                            {!userLogin.tkkdl_anhdaidien && (
                                <img
                                    className={cx('avatar')}
                                    src="https://res.cloudinary.com/phtuandev/image/upload/v1666851369/GoTravel/360_F_340124934_ocif6t.jpg"
                                    alt=""
                                />
                            )}
                            <p className={cx('label')}>
                                Chia sẻ trải nghiệm của bản thân !
                            </p>
                        </div>
                    )}
                    <button variant="contained" className="button-share">
                        <ShareOutlinedIcon className="icon-share" />
                    </button>
                </div>
                {postsList.length !== 0 &&
                    postsList.map((posts, index) => (
                        <PostsItem key={index} posts={posts}></PostsItem>
                    ))}
            </div>
            <div>
                <div className={cx('recipe-review')}>
                    {datas.map((review, index) => (
                        <RecipeReviewCard
                            key={index}
                            review={review}
                        ></RecipeReviewCard>
                    ))}
                </div>
            </div>
            {openAdd && <AddPosts></AddPosts>}
            {openView && <ViewPosts setPostsList={setPostsList}></ViewPosts>}
        </div>
    );
}

export default SharePosts;
