import { React } from 'react';
import classNames from 'classnames/bind';
import moment from 'moment';

import { FaPlaneDeparture } from 'react-icons/fa';

import { GrFormNextLink } from 'react-icons/gr';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './DetailsTour.scss';

const cx = classNames.bind(styles);

function DepartureAnother(props) {
    const { departure } = props;

    return (
        <li>
            {departure && (
                <Accordion className={cx('accordion')}>
                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon className={cx('expandMore-icon')} />
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={cx('accordion-summary')}
                    >
                        <div className={cx('typography')}>
                            <FaPlaneDeparture
                                className={cx('icon-departure')}
                            />
                            <span>
                                {moment(departure.lkh_ngaykhoihanh).format(
                                    'DD / MM / YYYY'
                                )}
                            </span>
                            <GrFormNextLink className={cx('icon-next')} />
                            <span>
                                {moment(departure.lkh_ngayketthuc).format(
                                    'DD / MM / YYYY'
                                )}
                            </span>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className={cx('accordion-details')}>
                        <div className={cx('typography')}>
                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td className={cx('label')}>
                                            Phương tiện
                                        </td>
                                        <td>
                                            {departure.lkh_phuongtien
                                                .map(
                                                    (item, index) => item.pt_ten
                                                )
                                                .join(', ')}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={cx('label')}>
                                            Địa điểm
                                        </td>
                                        <td>{departure.lkh_diadiem}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Button variant="contained">CHỌN</Button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            )}
        </li>
    );
}

export default DepartureAnother;
