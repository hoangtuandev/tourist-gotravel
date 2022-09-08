import * as React from 'react';
import classNames from 'classnames/bind';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styles from './HistoryBooking.scss';

const cx = classNames.bind(styles);

export default function RatingTour() {
    return (
        <div className={cx('rating-tour')}>
            <Dialog>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email
                        address here. We will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button>Cancel</Button>
                    <Button>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
