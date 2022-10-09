import { React, useState } from 'react';
import classNames from 'classnames/bind';
import DatePicker from 'react-datepicker';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Slider from '@mui/material/Slider';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CgArrowLongRightC } from 'react-icons/cg';
import { BsCalendar3 } from 'react-icons/bs';
import styles from './MenuTour.scss';
import 'react-datepicker/dist/react-datepicker.css';
import {
    handleChangeParamsFilter,
    handleSetTabMenuCurrentTour,
    paramsTourFilter,
} from '../../GlobalSlice';

const cx = classNames.bind(styles);

function valueTextPriceArange(value) {
    return `${value}`;
}

function MenuTour(props) {
    const { typeTourismList } = props;
    const dispatch = useDispatch();

    const paramsFilter = useSelector(paramsTourFilter);
    const [currentIndexTourismTab, setCurrentIndexTourismTab] = useState(0);

    useState(true);

    const handleChangeTourismTab = (event, newValue) => {
        setCurrentIndexTourismTab(newValue);
        if (typeTourismList[newValue - 1]) {
            dispatch(
                handleSetTabMenuCurrentTour(typeTourismList[newValue - 1])
            );
        } else {
            dispatch(
                handleSetTabMenuCurrentTour({
                    lht_ma: 'all',
                    lht_ten: 'Tất cả tour',
                })
            );
        }
    };

    const handleChangePriceArange = (event, newValue) => {
        dispatch(
            handleChangeParamsFilter({
                price: newValue,
                departure: paramsFilter.departure,
                time: paramsFilter.time,
                allPrice: false,
                allDeparture: paramsFilter.allDeparture,
                allTime: paramsFilter.allTime,
            })
        );
    };

    const handleCheckAllPriceFilter = () => {
        dispatch(
            handleChangeParamsFilter({
                price: [0, 20000000],
                departure: paramsFilter.departure,
                time: paramsFilter.time,
                allPrice: !paramsFilter.allPrice,
                allDeparture: paramsFilter.allDeparture,
                allTime: paramsFilter.allTime,
            })
        );
    };

    const handleChangeDeparture = (newDate) => {
        dispatch(
            handleChangeParamsFilter({
                price: paramsFilter.price,
                departure: newDate.getTime(),
                time: paramsFilter.time,
                allPrice: paramsFilter.allPrice,
                allDeparture: false,
                allTime: paramsFilter.allTime,
            })
        );
    };

    const handleCheckAllDepartureFilter = () => {
        dispatch(
            handleChangeParamsFilter({
                price: paramsFilter.price,
                departure: paramsFilter.departure,
                time: paramsFilter.time,
                allPrice: paramsFilter.allPrice,
                allDeparture: !paramsFilter.allDeparture,
                allTime: paramsFilter.allTime,
            })
        );
    };

    const handleCheckAllTimeFilter = () => {
        dispatch(
            handleChangeParamsFilter({
                price: paramsFilter.price,
                departure: paramsFilter.departure,
                time: paramsFilter.time,
                allPrice: paramsFilter.allPrice,
                allDeparture: paramsFilter.allDeparture,
                allTime: !paramsFilter.allTime,
            })
        );
    };

    const handlePlusTimeTourFilter = () => {
        dispatch(
            handleChangeParamsFilter({
                price: paramsFilter.price,
                departure: paramsFilter.departure,
                time: paramsFilter.time + 1,
                allPrice: paramsFilter.allPrice,
                allDeparture: paramsFilter.allDeparture,
                allTime: false,
            })
        );
    };

    const handleRemoveTimeTourFilter = () => {
        dispatch(
            handleChangeParamsFilter({
                price: paramsFilter.price,
                departure: paramsFilter.departure,
                time: paramsFilter.time - 1,
                allPrice: paramsFilter.allPrice,
                allDeparture: paramsFilter.allDeparture,
                allTime: false,
            })
        );
    };

    return (
        <div className={cx('menu-tour')}>
            <Box
                className={cx('menu-tourism')}
                sx={{
                    flexGrow: 1,
                    bgcolor: 'background.paper',
                }}
            >
                <Tabs
                    value={currentIndexTourismTab}
                    onChange={handleChangeTourismTab}
                    variant="scrollable"
                    scrollButtons
                    aria-label="visible arrows tabs example"
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                            '&.Mui-disabled': { opacity: 0.3 },
                        },
                    }}
                >
                    <Tab label="Tất cả tour" />
                    {typeTourismList.map((type, index) => (
                        <Tab key={index} label={type.lht_ten} />
                    ))}
                </Tabs>
            </Box>
            <div className={cx('filter')}>
                <div className={cx('filter-price')}>
                    <p className={cx('label-filter')}>Giá tour</p>
                    <Slider
                        className={cx('slider')}
                        getAriaLabel={() => 'Temperature range'}
                        size="small"
                        min={0}
                        max={20000000}
                        step={1000000}
                        value={paramsFilter.price}
                        onChange={handleChangePriceArange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valueTextPriceArange}
                    />
                    <div className={cx('price-text')}>
                        <span className={cx('value')}>
                            {paramsFilter.price[0].toLocaleString('vi', {
                                style: 'currency',
                                currency: 'VND',
                            })}
                        </span>
                        <span>
                            <CgArrowLongRightC className="icon" />
                        </span>
                        <span className={cx('value')}>
                            {paramsFilter.price[1].toLocaleString('vi', {
                                style: 'currency',
                                currency: 'VND',
                            })}
                        </span>
                    </div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                className={cx('checkbox-select-all')}
                                checked={paramsFilter.allPrice}
                                onChange={() => handleCheckAllPriceFilter()}
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                            />
                        }
                        label="Tất cả"
                    />
                </div>
                <div className={cx('filter-departure')}>
                    <p className={cx('label-filter')}>Ngày khởi hành</p>
                    <div className={cx('departure')}>
                        <DatePicker
                            dateFormat="dd / MM / yyyy"
                            placeholderText="ngày / tháng / năm"
                            selected={paramsFilter.departure}
                            onChange={(date) => {
                                handleChangeDeparture(date);
                            }}
                        />
                        <BsCalendar3 className={cx('icon-calendar')} />
                    </div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                className={cx('checkbox-select-all')}
                                checked={paramsFilter.allDeparture}
                                onChange={() => handleCheckAllDepartureFilter()}
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                            />
                        }
                        label="Tất cả"
                    />
                </div>
                <div className={cx('filter-time')}>
                    <p className={cx('label-filter')}>Thời gian</p>
                    <div className={cx('field-text')}>
                        <Fab
                            className={cx('fab')}
                            color="primary"
                            size="small"
                            aria-label="add"
                            onClick={() => handleRemoveTimeTourFilter()}
                        >
                            <RemoveIcon className={cx('icon')} />
                        </Fab>
                        <span className={cx('input-field')}>
                            {paramsFilter.time} ngày {paramsFilter.time - 1} đêm
                        </span>
                        <Fab
                            className={cx('fab')}
                            color="primary"
                            size="small"
                            aria-label="add"
                            onClick={() => handlePlusTimeTourFilter()}
                        >
                            <AddIcon className={cx('icon')} />
                        </Fab>
                    </div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                className={cx('checkbox-select-all')}
                                checked={paramsFilter.allTime}
                                onChange={() => handleCheckAllTimeFilter()}
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                            />
                        }
                        label="Tất cả"
                    />
                </div>
            </div>
        </div>
    );
}

export default MenuTour;
