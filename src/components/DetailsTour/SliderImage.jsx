import { React, useState } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './DetailsTour.scss';
import { tourSelected } from './DetailsTourSlice';
const cx = classNames.bind(styles);

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SliderImage() {
    const theme = useTheme();
    const listImage = useSelector(tourSelected).t_hinhanh;
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = listImage.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ flexGrow: 1 }} className={cx('mui-box')}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                className={cx('mui-autoPlaySwipeableViews')}
            >
                {listImage.map((image, index) => (
                    <div key={index}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    display: 'block',
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={image}
                                alt={index}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                className={cx('mui-mobileStepper')}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        TIẾP THEO
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        TRƯỚC ĐÓ
                    </Button>
                }
            />
        </Box>
    );
}

export default SliderImage;
