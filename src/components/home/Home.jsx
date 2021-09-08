import { Box, makeStyles } from "@material-ui/core";

//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSection from "./MidSection";

// import { products } from "../../constants/data";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts as listProducts } from '../../redux/actions/productActions'

const useStyle = makeStyles(theme => ({
    component: {
        padding: 10,
        background: '#F2F2F2'
    },
    leftComponent: {
        width: '83%',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    rightwrapper: {
        background: '#FFFFFF',
        padding: 5,
        margin: '12px 0 0 10px',
        width: '17%',
        [theme.breakpoints.down('md')]: {   //hiding midsection adds in medium screen
            display: 'none'
        }
    }
}));

const Home = () => {
    const classes = useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    const {products} = useSelector(state => state.getProducts)

    // const {products} = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div>
            <NavBar></NavBar >
            <Box className={classes.component}>
                <Banner></Banner>
                <Box style={{ display: 'flex' }}>
                    <Box className={classes.leftComponent}>
                    <Slide 
                       data={products} 
                       title='Deals of the Day'
                       timer={true} 
                       products={products}
                       multi={true} 
                       />
                            
                    </Box>
                    <Box className={classes.rightwrapper}>
                        <img src={adURL} style={{ width: 200 }} />
                    </Box>
                </Box>
                <MidSection />
                <Slide
                    timer={false}
                    title="Discounts for you"
                    products={products}
                     />
                <Slide
                    timer={false}
                    title="Top Selection"
                    products={products}
                     />
                <Slide
                    timer={false}
                    title="Best Sellers"
                    products={products}
                     />
                <Slide
                    timer={false}
                    title="Recommended Items"
                    products={products}
                     />
                <Slide
                    timer={false}
                    title="Suggested Items"
                    products={products}
                     />

            </Box>
        </div>

    )
}

export default Home;