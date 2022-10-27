import { React, Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import ProfileTourist from '../../components/ProfileTourist/ProfileTourist';

function ProfileTouristPage() {
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <div style={{ padding: '89px 90px 0 90px' }}>
                <Fragment>
                    <CssBaseline />
                    <Container maxWidth="xl">
                        <ProfileTourist></ProfileTourist>
                    </Container>
                </Fragment>
            </div>
        </div>
    );
}

export default ProfileTouristPage;
