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
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { CgArrowLongRightC } from 'react-icons/cg';
import { BsCalendar3 } from 'react-icons/bs';
import { TiMinus, TiPlus } from 'react-icons/ti';

import styles from './MenuTour.scss';
import 'react-datepicker/dist/react-datepicker.css';
import {
    checkedAllDeparture,
    checkedAllPrice,
    checkedAllTime,
    handleChangeCheckboxAllDeparture,
    handleChangeCheckboxAllPrice,
    handleChangeCheckboxAllTime,
    handleChangeParamsFilter,
    handleChangeTimeTourFilter,
    handleSetTabMenuCurrentTour,
    maxPriceTours,
    paramsTourFilter,
    timeTourFilter,
} from '../../GlobalSlice';

const cx = classNames.bind(styles);

function valueTextPriceArange(value) {
    return `${value}`;
}

function MenuTour(props) {
    const { typeTourismList } = props;
    const dispatch = useDispatch();
    const checkedPriceAll = useSelector(checkedAllPrice);
    const checkedDepartureAll = useSelector(checkedAllDeparture);
    const checkedTimeAll = useSelector(checkedAllTime);
    const maxPriceTour = useSelector(maxPriceTours);
    const paramsFilter = useSelector(paramsTourFilter);
    const timeFilter = useSelector(timeTourFilter);
    const [currentIndexTourismTab, setCurrentIndexTourismTab] = useState(0);
    const [startDate, setStartDate] = useState(new Date());

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
        dispatch(handleChangeCheckboxAllPrice(false));
        dispatch(
            handleChangeParamsFilter({
                price: newValue,
                departure: paramsFilter.departure,
                time: paramsFilter.time,
            })
        );
    };

    const handleChangeCheckboxAllPriceFilter = () => {
        dispatch(handleChangeCheckboxAllPrice(!checkedPriceAll));
    };

    const handleChangeDeparture = (date) => {
        dispatch(handleChangeCheckboxAllDeparture(false));
        dispatch(
            handleChangeParamsFilter({
                price: paramsFilter.price,
                departure: date.getTime(),
                time: paramsFilter.time,
            })
        );
    };

    const handleChangeCheckboxDepartureFilter = () => {
        dispatch(handleChangeCheckboxAllDeparture(!checkedDepartureAll));
    };

    const handlePlusTimeFilter = () => {
        dispatch(handleChangeCheckboxAllTime(false));
        // dispatch(handleChangeTimeTourFilter(timeFilter + 1));
        dispatch(
            handleChangeParamsFilter({
                price: paramsFilter.price,
                departure: paramsFilter.departure,
                time: paramsFilter.time + 1,
            })
        );
    };

    const handleMinusTimeFilter = () => {
        dispatch(handleChangeCheckboxAllTime(false));
        // dispatch(handleChangeTimeTourFilter(timeFilter - 1));
        dispatch(
            handleChangeParamsFilter({
                price: paramsFilter.price,
                departure: paramsFilter.departure,
                time: paramsFilter.time - 1,
            })
        );
    };

    const handleChangeCheckboxAllTimeFilter = () => {
        dispatch(handleChangeCheckboxAllTime(!checkedTimeAll));
    };

    return (
        <div className={cx('menu-tour')}>
            <Box
                className={cx('menu-tourism')}
                sx={{
                    flexGrow: 1,
                    // maxWidth: {},
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
                    <p className={cx('label-filter')}>Lọc theo giá tour</p>
                    <Slider
                        className={cx('slider')}
                        getAriaLabel={() => 'Temperature range'}
                        min={0}
                        max={maxPriceTour}
                        step={500000}
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
                                checked={checkedPriceAll}
                                onChange={() =>
                                    handleChangeCheckboxAllPriceFilter()
                                }
                                // checked={paramsFilter.checkedAllPrice}
                                // onChange={() =>
                                //     handleChangeCheckboxAllPriceFilter()
                                // }
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                            />
                        }
                        label="Tất cả"
                    />
                </div>
                <div className={cx('filter-departure')}>
                    <p className={cx('label-filter')}>Chọn ngày khởi hành</p>
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
                                checked={checkedDepartureAll}
                                onChange={() =>
                                    handleChangeCheckboxDepartureFilter()
                                }
                                // checked={checkedAllDepartureFilter}
                                // onChange={() =>
                                //     setCheckedAllDepartureFilter(
                                //         !checkedAllDepartureFilter
                                //     )
                                // }
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                            />
                        }
                        label="Tất cả"
                    />
                </div>
                <div className={cx('filter-time')}>
                    <p className={cx('label-filter')}>Thời gian trải nghiệm</p>
                    <div className={cx('time')}>
                        <ButtonGroup
                            className={cx('button-group')}
                            variant="contained"
                            aria-label="outlined primary button group"
                        >
                            <Button
                                disabled={paramsFilter.time === 1}
                                className={cx('button-click')}
                                onClick={() => handleMinusTimeFilter()}
                            >
                                <TiMinus />
                            </Button>
                            <Button className={cx('btn-value')}>
                                {paramsFilter.time}
                                <span>&nbsp;ngày</span>
                                &nbsp;&nbsp;{paramsFilter.time - 1}
                                <span>&nbsp;đêm</span>
                            </Button>
                            <Button
                                className={cx('button-click')}
                                onClick={() => handlePlusTimeFilter()}
                            >
                                <TiPlus />
                            </Button>
                        </ButtonGroup>
                    </div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                className={cx('checkbox-select-all')}
                                checked={checkedTimeAll}
                                onChange={() =>
                                    handleChangeCheckboxAllTimeFilter()
                                }
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
