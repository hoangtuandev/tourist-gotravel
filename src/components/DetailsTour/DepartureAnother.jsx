import { React } from 'react';
import classNames from 'classnames/bind';
import moment from 'moment';
import Cookies from 'universal-cookie';
import { useSelector, useDispatch } from 'react-redux';

import { FaPlaneDeparture } from 'react-icons/fa';
import { GrFormNextLink } from 'react-icons/gr';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import {
    handleCloseDetailsTour,
    handleSetDeparture,
    isOpenDetailsTour,
    tourSelected,
} from './DetailsTourSlice';
import { handleSetTourBooked } from '../../GlobalSlice';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './DetailsTour.scss';

const cx = classNames.bind(styles);
const cookies = new Cookies();

function DepartureAnother(props) {
    const { departure } = props;
    const dispatch = useDispatch();
    const tour = useSelector(tourSelected);
    const user = cookies.get('user');

    const handleClickBookingTour = () => {
        if (!user) {
            window.location.href = '/dang-nhap';
        } else {
            window.location.href = `/dat-tour?tour=${tour.t_ma}&departure=${departure._id}`;
        }
        dispatch(handleSetTourBooked(tour));
        dispatch(handleSetDeparture(departure));
    };

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
                            <Button
                                variant="contained"
                                onClick={() => handleClickBookingTour()}
                            >
                                ĐẶT TOUR
                            </Button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            )}
        </li>
    );
}

export default DepartureAnother;
