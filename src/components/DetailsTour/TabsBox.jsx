import { React, useState } from 'react';
import classNames from 'classnames/bind';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TbSignRight } from 'react-icons/tb';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './DetailsTour.scss';
import { useSelector } from 'react-redux';
import { tourSelected } from './DetailsTourSlice';
import * as api from '../../api';
import { useEffect } from 'react';
import RatingTour from './RatingTour';

const cx = classNames.bind(styles);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabsBox() {
    const tour = useSelector(tourSelected);

    const [ratingList, setRatingList] = useState([]);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        api.getAllRatingTourByTour({ idTour: tour._id }).then((res) => {
            setRatingList(res.data);
        });
    }, [tour]);

    return (
        <Box sx={{ width: '100%' }} className={cx('mui-tabs-box')}>
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="QUY ĐỊNH CHUNG" {...a11yProps(0)} />
                    <Tab label="ĐÁNH GIÁ TOUR" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel
                value={value}
                index={0}
                className={cx('mui-tabs-panels regulations')}
            >
                <span className={cx('regulation-list')}>
                    <span className={cx('regulation-item')}>
                        <TbSignRight className="icon" />
                        <span>
                            Xác nhận tiêm ngừa Vaccine Covid-19 đã tiêm đủ 2 mũi
                            trở lên.
                        </span>
                    </span>
                    <span className={cx('regulation-item')}>
                        <TbSignRight className="icon" />
                        <span>
                            Giữ gìn vệ sinh chung và tuân thủ quy định tại địa
                            điểm tham quan
                        </span>
                    </span>
                    <span className={cx('regulation-item')}>
                        <TbSignRight className="icon" />
                        <span>
                            Tour thuần túy du lịch, suốt chương trình Quý khách
                            vui lòng không rời đoàn.
                        </span>
                    </span>
                    <span className={cx('regulation-item')}>
                        <TbSignRight className="icon" />
                        <span>
                            Trẻ em dưới 15 tuổi phải có bố mẹ đi cùng hoặc người
                            được uỷ quyền phải có giấy uỷ quyền từ bố mẹ.
                        </span>
                    </span>

                    <span className={cx('regulation-item')}>
                        <TbSignRight className="icon" />
                        <span>
                            Hủy tour sau khi đăng ký phí phạt 50% tiền cọc.
                        </span>
                    </span>
                    <span className={cx('regulation-item')}>
                        <TbSignRight className="icon" />
                        <span>
                            Hủy tour trước 7 ngày phí phạt = 50% tổng giá tour
                            chương trình. (Tính theo ngày làm việc)
                        </span>
                    </span>
                    <span className={cx('regulation-item')}>
                        <TbSignRight className="icon" />
                        <span>
                            Hủy tour trong trước 5 ngày phí phạt = 75% tổng giá
                            tour chương trình. (Tính theo ngày làm việc)
                        </span>
                    </span>
                    <span className={cx('regulation-item')}>
                        <TbSignRight className="icon" />
                        <span>
                            Sau thời gian trên phí phạt = 100% tổng giá trị
                            chương trình. (Tính theo ngày làm việc)
                        </span>
                    </span>
                    <span className={cx('regulation-end')}>
                        Trong những trường hợp khách quan như: khủng bố, thiên
                        tai… hoặc do có sự cố, có sự thay đổi lịch trình của các
                        phương tiện vận chuyển công cộng như: máy bay, tàu hỏa…
                        thì Cty sẽ giữ quyền thay đổi lộ trình bất cứ lúc nào vì
                        sự thuận tiện, an toàn cho khách hàng và sẽ không chịu
                        trách nhiệm bồi thường những thiệt hại phát sinh .
                    </span>
                </span>
            </TabPanel>

            <TabPanel
                value={value}
                index={1}
                className={cx('mui-tabs-panels rating-tour')}
            >
                {ratingList.length !== 0 &&
                    ratingList.map((rating, index) => (
                        <RatingTour key={index} rating={rating}></RatingTour>
                    ))}
            </TabPanel>
        </Box>
    );
}

export default TabsBox;
