import { Fragment, React } from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import ChatBot from 'react-simple-chatbot';
import classNames from 'classnames/bind';
import styles from './ChatBotSimple.scss';
import {
    baseURLServer,
    handleChangeKeySearching,
    handleSetSearchingTour,
    handleToggleResultSearchingChatBot,
    setResultSearchingChatBot,
} from '../../GlobalSlice';
import * as api from '../../api';

const cx = classNames.bind(styles);
const cookies = new Cookies();

function ChatBotSimple() {
    const dispatch = useDispatch();
    const baseURL = useSelector(baseURLServer);
    const [userLogin, setUserLogin] = useState(null);

    const steps = [
        {
            id: 'Hello',
            message: `Xin chào ${userLogin &&
                userLogin.tkkdl_khachdulich.kdl_hoten}`,
            trigger: '3',
        },
        {
            id: '3',
            message: 'Chúng tôi có thể giúp gì cho bạn?',
            trigger: '4',
        },
        {
            id: '4',
            options: [
                {
                    value: 'searchTour',
                    label: 'Tìm kiếm tour',
                    trigger: '5',
                },
                {
                    value: 'routerLink',
                    label: 'Chuyển trang',
                    trigger: 'router',
                },
            ],
        },
        {
            id: '5',
            message: 'Nơi bạn muốn đến?',
            trigger: 'search',
        },
        {
            id: 'search',
            user: true,
            trigger: '6',
        },
        {
            id: '6',
            message: 'Điểm đến của bạn "{previousValue}"...',
            end: true,
        },
        {
            id: 'router',
            options: [
                {
                    value: 'guidePage',
                    label: 'Hướng dẫn đặt tour',
                    trigger: 'end-message',
                },
                {
                    value: 'toursPage',
                    label: 'Tất cả tour',
                    trigger: 'end-message',
                },
                {
                    value: 'advertisementPage',
                    label: 'Điểm đến hấp dẫn',
                    trigger: 'end-message',
                },
                {
                    value: 'sharePage',
                    label: 'Cộng đồng',
                    trigger: 'end-message',
                },
            ],
        },
        {
            id: 'end-message',
            message: 'Bạn vui lòng chờ trong giây lát...',
            end: true,
        },
    ];

    useEffect(() => {
        api.getTouristAccountById({
            idAccount: cookies.get('user').others._id,
        }).then((res) => {
            setUserLogin(res.data[0]);
        });
    }, []);

    const handleSearchingTour = (steps, values) => {
        console.log(steps.values);
        if (steps.values[0] === 'searchTour') {
            console.log('search: ', steps.values[1]);
            api.searchingTour({ keySearch: steps.values[1] }).then((res) => {
                console.log('RESULR: ', res.data);
                dispatch(handleSetSearchingTour(res.data));
                dispatch(setResultSearchingChatBot(res.data));
                dispatch(handleChangeKeySearching(''));
                dispatch(handleToggleResultSearchingChatBot(true));
            });
        } else if (steps.values[0] === 'routerLink') {
            if (steps.values[1] === 'guidePage') {
                window.location.href = '/huong-dan';
            } else if (steps.values[1] === 'toursPage') {
                window.location.href = '/tours';
            } else if (steps.values[1] === 'advertisementPage') {
                window.location.href = '/kham-pha';
            } else if (steps.values[1] === 'sharePage') {
                window.location.href = '/chia-se';
            }
        }
    };

    return (
        <Fragment>
            {userLogin && (
                <ChatBot
                    userAvatar={
                        userLogin.tkkdl_anhdaidien
                            ? `${baseURL}${userLogin.tkkdl_anhdaidien}`
                            : 'https://res.cloudinary.com/phtuandev/image/upload/v1666851369/GoTravel/360_F_340124934_ocif6t.jpg'
                    }
                    handleEnd={handleSearchingTour}
                    headerTitle="Chatbot GO Travel"
                    className={cx('chatbot-simple')}
                    steps={steps}
                ></ChatBot>
            )}
        </Fragment>
    );
}

export default ChatBotSimple;
