import * as React from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import styles from './ResultSearchingPage.scss';
import {
    handleToggleResultSearchingChatBot,
    openResultSearchingChatBot,
    resultSearchingChatBotList,
} from '../../GlobalSlice';
import TourItem from './TourItem';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const cx = classNames.bind(styles);

export default function ResultSearchingChatBot() {
    const dispatch = useDispatch();
    const openDialog = useSelector(openResultSearchingChatBot);
    const resultSearching = useSelector(resultSearchingChatBotList);

    return (
        <div>
            <Dialog
                fullScreen
                open={openDialog}
                onClose={() =>
                    dispatch(handleToggleResultSearchingChatBot(false))
                }
                TransitionComponent={Transition}
                className={cx('result-searching-chatbot')}
            >
                <AppBar sx={{ position: 'relative' }} className="app-bar">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="close"
                            onClick={() =>
                                dispatch(
                                    handleToggleResultSearchingChatBot(false)
                                )
                            }
                        >
                            <CloseIcon className="icon-close" />
                        </IconButton>
                        <Typography
                            sx={{ ml: 2, flex: 1 }}
                            variant="h6"
                            component="div"
                            className="typography"
                        >
                            Kết quả tìm kiếm tour
                        </Typography>
                        <Button
                            autoFocus
                            color="inherit"
                            className="close-button"
                            onClick={() =>
                                dispatch(
                                    handleToggleResultSearchingChatBot(false)
                                )
                            }
                        >
                            THOÁT
                        </Button>
                    </Toolbar>
                </AppBar>
                <div
                    className={cx(
                        'result-searching-page result-searching-chatbot-list'
                    )}
                >
                    {resultSearching.length === 0 && (
                        <div className={cx('empty-tourList')}>
                            <p>Không tìm thấy tour phù hợp!</p>
                            <img
                                src="https://res.cloudinary.com/phtuandev/image/upload/v1660285963/GoTravel/undraw_Explore_re_8l4v_lvunn9.png   "
                                alt=""
                            />
                        </div>
                    )}

                    {resultSearching.length !== 0 && (
                        <ul className={cx('list-tour')}>
                            {resultSearching.map((tour, index) => (
                                <TourItem key={index} tour={tour}></TourItem>
                            ))}
                        </ul>
                    )}
                </div>
            </Dialog>
        </div>
    );
}
