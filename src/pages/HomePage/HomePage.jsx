import { React, Fragment, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './HomePage.scss';
import PreferDestination from '../../components/PreferDestination/PreferDestination';
import Slideshow from '../../components/Slideshow/Slideshow';
import NewDestination from '../../components/NewDestination/NewDestination';
import ExploreDestination from '../../components/ExploreDestination/ExploreDestination';
import Footer from '../../components/Footer/Footer';
import SlickMultiple from '../../components/SlickMultiple/SlickMultiple';
import ChatBotSimple from '../../components/ChatBot/ChatBotSimple';
import { openChatBot } from '../../GlobalSlice';
import ToggleChatBotButton from '../../components/ChatBot/ToggleChatBotButton';

const cx = classNames.bind(styles);

function HomePage() {
    const openChatbot = useSelector(openChatBot);

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <div className={cx('home-page')}>
            <Header></Header>
            <Sidebar></Sidebar>
            <div className={cx('home')}>
                <Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl">
                        <Slideshow></Slideshow>
                        <SlickMultiple></SlickMultiple>
                        <PreferDestination></PreferDestination>
                        <NewDestination></NewDestination>
                        <ExploreDestination></ExploreDestination>
                    </Container>
                </Fragment>
            </div>
            <Footer></Footer>
            {/* <ToggleChatBotButton></ToggleChatBotButton>
            {openChatbot && <ChatBotSimple></ChatBotSimple>} */}
        </div>
    );
}

export default HomePage;
