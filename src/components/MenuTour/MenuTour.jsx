import { React, useState } from 'react';
import classNames from 'classnames/bind';
import DatePicker from 'react-datepicker';

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

const cx = classNames.bind(styles);

function valueTextPriceArange(value) {
    return `${value}`;
}

function MenuTour() {
    const [currentTourismTab, setCurrentTourismTab] = useState(0);
    const [priceArange, setPriceArange] = useState([0, 5000000]);
    const [startDate, setStartDate] = useState(new Date());

    const handleChangeTourismTab = (event, newValue) => {
        setCurrentTourismTab(newValue);
    };

    const handleChangePriceArange = (event, newValue) => {
        console.log(newValue);
        setPriceArange(newValue);
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
                    value={currentTourismTab}
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
                    <Tab label="Du lịch miền Bắc" />
                    <Tab label="Du lịch miền Trung" />
                    <Tab label="Du lịch miền Nam" />
                    <Tab label="Du lịch khám phá" />
                    <Tab label="Du lịch ẩm thực" />
                    <Tab label="Du lịch nghỉ dưỡng" />
                    <Tab label="Du lịch miền Bắc" />
                    <Tab label="Du lịch miền Trung" />
                    <Tab label="Du lịch miền Nam" />
                    <Tab label="Du lịch khám phá" />
                    <Tab label="Du lịch ẩm thực" />
                    <Tab label="Du lịch nghỉ dưỡng" />
                </Tabs>
            </Box>
            <div className={cx('filter')}>
                <div className={cx('filter-price')}>
                    <p className={cx('label-filter')}>Lọc theo giá tour</p>
                    <Slider
                        className={cx('slider')}
                        getAriaLabel={() => 'Temperature range'}
                        min={0}
                        max={20000000}
                        step={500000}
                        value={priceArange}
                        onChange={handleChangePriceArange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valueTextPriceArange}
                    />
                    <div className={cx('price-text')}>
                        <span className={cx('value')}>
                            {priceArange[0].toLocaleString('vi', {
                                style: 'currency',
                                currency: 'VND',
                            })}
                        </span>
                        <span>
                            <CgArrowLongRightC className="icon" />
                        </span>
                        <span className={cx('value')}>
                            {priceArange[1].toLocaleString('vi', {
                                style: 'currency',
                                currency: 'VND',
                            })}
                        </span>
                    </div>
                </div>
                <div className={cx('filter-departure')}>
                    <p className={cx('label-filter')}>Chọn ngày khởi hành</p>
                    <div className={cx('departure')}>
                        <DatePicker
                            dateFormat="dd / MM / yyyy"
                            placeholderText="ngày / tháng / năm"
                            selected={startDate}
                            onChange={(date) => {
                                return setStartDate(date);
                            }}
                        />
                        <BsCalendar3 className={cx('icon-calendar')} />
                    </div>
                </div>
                <div className={cx('filter-time')}>
                    <p className={cx('label-filter')}>Thời gian trải nghiệm</p>
                    <div className={cx('time')}>
                        <ButtonGroup
                            className={cx('button-group')}
                            variant="contained"
                            aria-label="outlined primary button group"
                        >
                            <Button className={cx('button-click')}>
                                <TiMinus />
                            </Button>
                            <Button className={cx('btn-value')}>
                                2<span>&nbsp;ngày</span>
                                &nbsp;&nbsp;1<span>&nbsp;đêm</span>
                            </Button>
                            <Button className={cx('button-click')}>
                                <TiPlus />
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuTour;