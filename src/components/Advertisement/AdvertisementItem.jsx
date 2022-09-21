import { React, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Cookies from 'universal-cookie';
import { useDispatch } from 'react-redux';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import Favorite from '@mui/icons-material/Favorite';
import * as api from '../../api';
import styles from './Advertisement.scss';
import {
    handleSelectAdvertisement,
    handleToggleViewAdvertisement,
} from './AdvertisementSlice';

const cx = classNames.bind(styles);
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const cookies = new Cookies();

function AdvertisementItem(props) {
    const { advertisement, setAdvertisementList } = props;
    const dispatch = useDispatch();
    const userID = cookies.get('user').others._id;

    const [interactAdvertisements, setInteractAdvertisements] = useState({});
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        api.deleteInteractAdvertisement();
    }, []);

    useEffect(() => {
        api.getInteractAdvertisementByParams({
            userID: userID,
            advertisement: advertisement,
        }).then((res) => {
            setInteractAdvertisements(res.data[0]);
            res.data.length === 0 ||
            (res.data.length !== 0 && res.data[0].ttbqb_dathich === false)
                ? setIsLiked(false)
                : setIsLiked(true);
        });
    }, [advertisement, userID]);

    useEffect(() => {
        api.getInteractAdvertisementByParams({
            userID: userID,
            advertisement: advertisement,
        }).then((res) => {
            setInteractAdvertisements(res.data[0]);
            res.data.length === 0 ||
            (res.data.length !== 0 && res.data[0].ttbqb_daluu === false)
                ? setIsSaved(false)
                : setIsSaved(true);
        });
    }, [advertisement, userID]);

    const resetInteractAdvertisement = () => {
        api.getInteractAdvertisementByParams({
            userID: userID,
            advertisement: advertisement,
        }).then((res) => {
            setInteractAdvertisements(res.data[0]);
            res.data.length === 0 ||
            (res.data.length !== 0 && res.data[0].ttbqb_dathich === false)
                ? setIsLiked(false)
                : setIsLiked(true);

            res.data.length === 0 ||
            (res.data.length !== 0 && res.data[0].ttbqb_daluu === false)
                ? setIsSaved(false)
                : setIsSaved(true);
        });
    };

    const handleViewAdvertisement = () => {
        dispatch(handleSelectAdvertisement(advertisement));
        dispatch(handleToggleViewAdvertisement(true));
    };

    const handleToggleLikeAdvertisement = (checked) => {
        // console.log(checked);
        // console.log(interactAdvertisements);
        // console.log('-------------');

        if (checked && !interactAdvertisements) {
            api.createInteractAdvertisement({
                ttbqb_taikhoan: userID,
                ttbqb_baiviet: advertisement,
                ttbqb_daluu: false,
                ttbqb_dathich: true,
            }).then((res) => {
                api.likeAdvertisement({
                    _id: advertisement._id,
                    bvqb_luotthich: advertisement.bvqb_luotthich,
                }).then((res) => {
                    api.getActiveAdvertisement().then((res) => {
                        resetInteractAdvertisement();
                        setAdvertisementList(res.data);
                    });
                });
            });
        } else if (!checked && !interactAdvertisements) {
            api.updateLikeInteractAdvertisement({
                interactID: interactAdvertisements._id,
                status: false,
            }).then((res) => {
                api.dislikeAdvertisement({
                    _id: advertisement._id,
                    bvqb_luotthich: advertisement.bvqb_luotthich,
                }).then((res) => {
                    api.getActiveAdvertisement().then((res) => {
                        resetInteractAdvertisement();
                        setAdvertisementList(res.data);
                    });
                });
            });
        } else if (!checked && interactAdvertisements.ttbqb_dathich) {
            api.updateLikeInteractAdvertisement({
                interactID: interactAdvertisements._id,
                status: false,
            }).then((res) => {
                api.dislikeAdvertisement({
                    _id: advertisement._id,
                    bvqb_luotthich: advertisement.bvqb_luotthich,
                }).then((res) => {
                    api.getActiveAdvertisement().then((res) => {
                        resetInteractAdvertisement();
                        setAdvertisementList(res.data);
                    });
                });
            });
        } else if (checked && interactAdvertisements.ttbqb_dathich) {
            api.updateLikeInteractAdvertisement({
                interactID: interactAdvertisements._id,
                status: false,
            }).then((res) => {
                api.dislikeAdvertisement({
                    _id: advertisement._id,
                    bvqb_luotthich: advertisement.bvqb_luotthich,
                }).then((res) => {
                    api.getActiveAdvertisement().then((res) => {
                        resetInteractAdvertisement();
                        setAdvertisementList(res.data);
                    });
                });
            });
        } else if (checked && !interactAdvertisements.ttbqb_dathich) {
            api.updateLikeInteractAdvertisement({
                interactID: interactAdvertisements._id,
                status: true,
            }).then((res) => {
                api.likeAdvertisement({
                    _id: advertisement._id,
                    bvqb_luotthich: advertisement.bvqb_luotthich,
                }).then((res) => {
                    api.getActiveAdvertisement().then((res) => {
                        resetInteractAdvertisement();
                        setAdvertisementList(res.data);
                    });
                });
            });
        }
    };

    const handleToggleSaveAdvertisement = (checked) => {
        // console.log(checked);
        // console.log(interactAdvertisements);
        // console.log('-------------');

        if (checked && !interactAdvertisements) {
            api.createInteractAdvertisement({
                ttbqb_taikhoan: userID,
                ttbqb_baiviet: advertisement,
                ttbqb_daluu: true,
                ttbqb_dathich: false,
            }).then((res) => {
                api.getActiveAdvertisement().then((res) => {
                    resetInteractAdvertisement();
                    setAdvertisementList(res.data);
                });
            });
        } else if (!checked && !interactAdvertisements) {
            api.updateSaveInteractAdvertisement({
                interactID: interactAdvertisements._id,
                status: false,
            }).then((res) => {
                api.getActiveAdvertisement().then((res) => {
                    resetInteractAdvertisement();
                    setAdvertisementList(res.data);
                });
            });
        } else if (!checked && interactAdvertisements.ttbqb_daluu) {
            api.updateSaveInteractAdvertisement({
                interactID: interactAdvertisements._id,
                status: false,
            }).then((res) => {
                api.getActiveAdvertisement().then((res) => {
                    resetInteractAdvertisement();
                    setAdvertisementList(res.data);
                });
            });
        } else if (checked && interactAdvertisements.ttbqb_daluu) {
            api.updateSaveInteractAdvertisement({
                interactID: interactAdvertisements._id,
                status: false,
            }).then((res) => {
                api.getActiveAdvertisement().then((res) => {
                    resetInteractAdvertisement();
                    setAdvertisementList(res.data);
                });
            });
        } else if (checked && !interactAdvertisements.ttbqb_daluu) {
            api.updateSaveInteractAdvertisement({
                interactID: interactAdvertisements._id,
                status: true,
            }).then((res) => {
                api.getActiveAdvertisement().then((res) => {
                    resetInteractAdvertisement();
                    setAdvertisementList(res.data);
                });
            });
        }
    };

    return (
        <li className={cx('advertisement-item')}>
            <div className={cx('images-list')}>
                <img
                    src={advertisement.bvqb_hinhanh[0]}
                    alt=""
                    onClick={() => handleViewAdvertisement()}
                />
            </div>
            <div className={cx('detailts')}>
                <div className={cx('title')}>
                    <PinDropIcon className={cx('icon')} />
                    <span onClick={() => handleViewAdvertisement()}>
                        {advertisement.bvqb_tieude}
                    </span>
                </div>
                <div className={cx('content')}>
                    {advertisement.bvqb_noidung}
                </div>
                <div className={cx('interact')}>
                    <div className={cx('interact-heart')}>
                        {isLiked && (
                            <Checkbox
                                defaultChecked
                                className={cx('checkbox-heart')}
                                {...label}
                                icon={
                                    <FavoriteBorder
                                        className={cx('favorite-border')}
                                    />
                                }
                                checkedIcon={
                                    <Favorite className={cx('favorite')} />
                                }
                                onChange={(e) =>
                                    handleToggleLikeAdvertisement(
                                        e.target.checked
                                    )
                                }
                            />
                        )}
                        {!isLiked && (
                            <Checkbox
                                className={cx('checkbox-heart')}
                                {...label}
                                icon={
                                    <FavoriteBorder
                                        className={cx('favorite-border')}
                                    />
                                }
                                checkedIcon={
                                    <Favorite className={cx('favorite')} />
                                }
                                onChange={(e) =>
                                    handleToggleLikeAdvertisement(
                                        e.target.checked
                                    )
                                }
                            />
                        )}

                        <span>{advertisement.bvqb_luotthich}</span>
                    </div>
                    <div className={cx('interact-orther')}>
                        {isSaved && (
                            <Checkbox
                                defaultChecked
                                className={cx('checkbox-heart')}
                                {...label}
                                icon={
                                    <BookmarkBorderIcon
                                        className={cx('bookmark-border')}
                                    />
                                }
                                checkedIcon={
                                    <BookmarkAddedIcon
                                        className={cx('bookmark')}
                                    />
                                }
                                onChange={(e) =>
                                    handleToggleSaveAdvertisement(
                                        e.target.checked
                                    )
                                }
                            />
                        )}
                        {!isSaved && (
                            <Checkbox
                                className={cx('checkbox-heart')}
                                {...label}
                                icon={
                                    <BookmarkBorderIcon
                                        className={cx('bookmark-border')}
                                    />
                                }
                                checkedIcon={
                                    <BookmarkAddedIcon
                                        className={cx('bookmark')}
                                    />
                                }
                                onChange={(e) =>
                                    handleToggleSaveAdvertisement(
                                        e.target.checked
                                    )
                                }
                            />
                        )}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default AdvertisementItem;
