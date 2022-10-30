import { React, Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import SharePosts from '../../components/SharePosts/SharePosts';

function SharePostsPage() {
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <div style={{ padding: '89px 90px 0 90px' }}>
                <Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl">
                        <SharePosts></SharePosts>
                    </Container>
                </Fragment>
            </div>
        </div>
    );
}

export default SharePostsPage;
