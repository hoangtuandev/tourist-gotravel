import { React } from 'react';
import { styled } from '@mui/material/styles';
import classNames from 'classnames/bind';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

import styles from './NewDestination.scss';
const cx = classNames.bind(styles);

const images = [
    {
        url: 'https://res.cloudinary.com/phtuandev/image/upload/v1659601312/GoTravel/HCM-lamdmark81_arhbtw.webp',
        title: 'Landmark 81 - TP. Hồ Chí Minh',
        width: '33.3%',
    },
    {
        url: 'https://res.cloudinary.com/phtuandev/image/upload/v1660571025/GoTravel/pexels-lu%C3%A2n-phan-7216414_owrgvg.jpg',
        title: 'Phố cổ Hội An - Đà Nẵng',
        width: '33.3%',
    },
    {
        url: 'https://res.cloudinary.com/phtuandev/image/upload/v1659140627/GoTravel/tour-phu-quoc-1_mdc8pa.jpg',
        title: 'Kingo Retreat Resort - Phú Quốc',
        width: '33.4%',
    },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                minWidth: 300,
                width: '100%',
            }}
            className={cx('button-bases')}
        >
            {images.map((image) => (
                <ImageButton
                    focusRipple
                    key={image.title}
                    style={{
                        width: image.width,
                    }}
                    className={cx('image-button')}
                >
                    <ImageSrc
                        style={{ backgroundImage: `url(${image.url})` }}
                    />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            sx={{
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: (theme) =>
                                    `calc(${theme.spacing(1)} + 6px)`,
                            }}
                        >
                            {image.title}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                </ImageButton>
            ))}
        </Box>
    );
}
