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
                    <Tab label="QUY ?????NH CHUNG" {...a11yProps(0)} />
                    <Tab label="????NH GI?? TOUR" {...a11yProps(1)} />
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
                            X??c nh???n ti??m ng???a Vaccine Covid-19 ???? ti??m ????? 2 m??i
                            tr??? l??n.
                        </span>
                    </span>
                    <span className={cx('regulation-item')}>
                        <TbSignRight className="icon" />
                        <span>
                            Gi??? g??n v??? sinh chung v?? tu??n th??? quy ?????nh t???i ?????a
                            ??i???m tham quan
                        </span>
                    </span>
                    <span className={cx('regulation-item')}>
                        <TbSignRight className="icon" />
                        <span>
                            Tour thu???n t??y du l???ch, su???t ch????ng tr??nh Qu?? kh??ch
                            vui l??ng kh??ng r???i ??o??n.
                        </span>
                    </span>
                    <span className={cx('regulation-item')}>
                        <TbSignRight className="icon" />
                        <span>
                            Tr??? em d?????i 15 tu???i ph???i c?? b??? m??? ??i c??ng ho???c ng?????i
                            ???????c u??? quy???n ph???i c?? gi???y u??? quy???n t??? b??? m???.
                        </span>
                    </span>

                    <span className={cx('regulation-item')}>
                        <TbSignRight className="icon" />
                        <span>
                            H???y tour sau khi ????ng k?? ph?? ph???t 50% ti???n c???c.
                        </span>
                    </span>
                    <span className={cx('regulation-item')}>
                        <TbSignRight className="icon" />
                        <span>
                            H???y tour tr?????c 7 ng??y ph?? ph???t = 50% t???ng gi?? tour
                            ch????ng tr??nh. (T??nh theo ng??y l??m vi???c)
                        </span>
                    </span>
                    <span className={cx('regulation-item')}>
                        <TbSignRight className="icon" />
                        <span>
                            H???y tour trong tr?????c 5 ng??y ph?? ph???t = 75% t???ng gi??
                            tour ch????ng tr??nh. (T??nh theo ng??y l??m vi???c)
                        </span>
                    </span>
                    <span className={cx('regulation-item')}>
                        <TbSignRight className="icon" />
                        <span>
                            Sau th???i gian tr??n ph?? ph???t = 100% t???ng gi?? tr???
                            ch????ng tr??nh. (T??nh theo ng??y l??m vi???c)
                        </span>
                    </span>
                    <span className={cx('regulation-end')}>
                        Trong nh???ng tr?????ng h???p kh??ch quan nh??: kh???ng b???, thi??n
                        tai??? ho???c do c?? s??? c???, c?? s??? thay ?????i l???ch tr??nh c???a c??c
                        ph????ng ti???n v???n chuy???n c??ng c???ng nh??: m??y bay, t??u h???a???
                        th?? Cty s??? gi??? quy???n thay ?????i l??? tr??nh b???t c??? l??c n??o v??
                        s??? thu???n ti???n, an to??n cho kh??ch h??ng v?? s??? kh??ng ch???u
                        tr??ch nhi???m b???i th?????ng nh???ng thi???t h???i ph??t sinh .
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
