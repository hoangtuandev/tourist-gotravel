import { React } from 'react';
import classNames from 'classnames/bind';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { BiMapPin } from 'react-icons/bi';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './DetailsTour.scss';

const cx = classNames.bind(styles);

function ScheduleTour(props) {
    const { schedule } = props;

    return (
        <li>
            <Accordion className={cx('accordion')}>
                <AccordionSummary
                    className={cx('accordion-summary')}
                    expandIcon={
                        <ExpandMoreIcon className={cx('expandMore-icon')} />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className={cx('typography')}>
                        <p className={cx('name-shedule')}>
                            <BiMapPin className={cx('icon')} />
                            <span>
                                Ngày {schedule.ltt_ngay}: {schedule.ltt_ten}
                            </span>
                        </p>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={cx('accordion-details')}>
                    <div className={cx('typography')}>
                        <div className={cx('details-schedule')}>
                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td className={cx('label')}>
                                            Phương tiện
                                        </td>
                                        <td>
                                            {schedule.ltt_phuongtien
                                                .map(
                                                    (item, index) => item.pt_ten
                                                )
                                                .join(', ')}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={cx('label')}>
                                            Nội dung
                                        </td>
                                        <td>{schedule.ltt_noidung}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </li>
    );
}

export default ScheduleTour;
