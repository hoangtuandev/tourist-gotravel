import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { handleCloseBackdrop, openBackdrop } from '../../GlobalSlice';

export default function SimpleBackdrop() {
    const dispatch = useDispatch();
    const isOpen = useSelector(openBackdrop);
    // const [open, setOpen] = React.useState(false);
    // const handleClose = () => {
    //     setOpen(false);
    // };
    // const handleToggle = () => {
    //     setOpen(!open);
    // };

    return (
        <div>
            {/* <Button onClick={handleToggle}>Show backdrop</Button> */}
            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={isOpen}
                // onClose={() => dispatch(handleCloseBackdrop())}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
