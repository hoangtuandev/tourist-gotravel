import { React } from 'react';
import classNames from 'classnames/bind';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Favorite from '@mui/icons-material/Favorite';

import styles from './SharePosts.scss';

const cx = classNames.bind(styles);

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function PostsItem() {
    return (
        <div className={cx('posts-item')}>
            <div className={cx('panel-posts')}>
                <img
                    className={cx('image-posts')}
                    src="https://res.cloudinary.com/phtuandev/image/upload/v1663819615/GoTravel/s-l-alya-nvb-mainpool-cr-800x450_o76p0r.jpg"
                    alt=""
                />
                <p className={cx('title-posts')}>
                    Mùa hoa dã quỳ Ba Vì: Còn chờ gì nữa mà không xách ba lô lên
                    và đi!
                </p>
            </div>
            <div className={cx('body-posts')}>
                <div className={cx('tourist-posts')}>
                    <div className={cx('account')}>
                        <img
                            className="avatar-account"
                            src="https://res.cloudinary.com/phtuandev/image/upload/v1664161366/GoTravel/avatar_fb_wmhyh2.jpg"
                            alt=""
                        />
                        <div className={cx('infor-post')}>
                            <p className="name-tourist">Pham Hoiang Tuan</p>
                            <p className="datetime-post">19:20 19/10/2022</p>
                        </div>
                    </div>
                </div>
                <div className={cx('content-posts')}>
                    Ba Vì trong thời tiết cuối thu, đầu đông có sức hút lạ
                    thường. Lúc này, sắc vàng nở rộ, làm rực rỡ cả sườn núi của
                    vườn quốc gia Ba Vì, tạo nên một khung cảnh lãng mạn và nên
                    thơ chưa từng có. Đó là lúc mùa hoa dã quỳ Ba Vì bắt đầu vào
                    mùa. Cách trung tâm Hà Nội hơn 60km, Ba Vì từ lâu đã là chốn
                    nghỉ dưỡng thân quen của nhiều gia đình và bạn trẻ dịp cuối
                    tuần. Không khí nơi đây lúc nào cũng trong lành, mang đến
                    một cảm giác khác lạ so với chốn thành phố ồn ã. Vào thời
                    gian cuối mùa thu, đầu mùa đông, khi thời tiết bắt đầu se
                    lạnh, Ba Vì lại trở nên sôi động hơn. Lúc này mùa hoa dã quỳ
                    Ba Vì bắt đầu chào đón du khách, trở thành điểm check in
                    không thể bỏ qua cho các tín đồ sống ảo.
                </div>
                <div className={cx('interact-posts')}>
                    <div className={cx('interact-item')}>
                        <Checkbox
                            {...label}
                            icon={<FavoriteBorder className="interact-icon" />}
                            checkedIcon={<Favorite className="favorite-icon" />}
                            className={cx('interact-checkbox')}
                        />
                        <p className={cx('interact-value')}>45</p>
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
                        <p className={cx('interact-value')}>45</p>
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
                        <p className={cx('interact-value')}>45</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostsItem;
