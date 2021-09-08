import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core';
import { bannerData } from '../../constants/data';


const useStyle = makeStyles(theme => ({
    container: {

    },
    image: {
        width: '100%',
        height: 275,
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            height: 180
        }
    }
}));
const Banner = () => {
    const classes = useStyle();
    return (
        <Carousel
            autoPlay={true}
            animation='slide'
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style: {
                    background: '#FFFFFF',
                    color: '#494949',

                }
            }}
        >
            {
                bannerData.map(image => (
                    <img src={image} className={classes.image} />
                ))
            }
        </Carousel >
    )
}

export default Banner;