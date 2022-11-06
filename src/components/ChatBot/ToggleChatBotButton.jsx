import { React } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import ForumIcon from '@mui/icons-material/Forum';
import CancelIcon from '@mui/icons-material/Cancel';
import { FcReddit, FcVoicePresentation, FcFaq } from 'react-icons/fc';
import styles from './ChatBotSimple.scss';
import { handleToggleChatBot, openChatBot } from '../../GlobalSlice';

const cx = classNames.bind(styles);
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function ToggleChatBotButton() {
    const dispatch = useDispatch();
    const openChatbot = useSelector(openChatBot);
    return (
        <div className={cx('toggle-chatbot-button')}>
            <Checkbox
                {...label}
                icon={<FcReddit className="checked-icon" />}
                checkedIcon={<CancelIcon className="unChecked-icon" />}
                onChange={(e) => {
                    dispatch(handleToggleChatBot(e.target.checked));
                }}
            />
        </div>
    );
}

export default ToggleChatBotButton;
