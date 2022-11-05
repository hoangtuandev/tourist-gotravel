import { React, Fragment, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';
import ListTour from '../../components/ListTour/ListTour';
import MenuTour from '../../components/MenuTour/MenuTour';

import * as api from '../../api';
import styles from './ToursPage.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { openChatBot } from '../../GlobalSlice';
import ToggleChatBotButton from '../../components/ChatBot/ToggleChatBotButton';
import ChatBotSimple from '../../components/ChatBot/ChatBotSimple';
const cx = classNames.bind(styles);

function ToursPage() {
    const openChatbot = useSelector(openChatBot);
    const [typeTourismList, setTypeTourismList] = useState([]);

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    useEffect(() => {
        api.getAllTypeTourism().then((res) => {
            setTypeTourismList(res.data);
        });
    }, []);

    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <div className={cx('tours-page')}>
                <Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl">
                        <div className={cx('content-page')}>
                            <MenuTour
                                typeTourismList={typeTourismList}
                            ></MenuTour>
                            <ListTour></ListTour>
                        </div>
                    </Container>
                </Fragment>
            </div>
            <Footer></Footer>
            {/* <ToggleChatBotButton></ToggleChatBotButton> */}
            {/* {openChatbot && <ChatBotSimple></ChatBotSimple>} */}
        </div>
    );
}

export default ToursPage;
