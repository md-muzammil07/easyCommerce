import { useEffect } from 'react';
import { Box, makeStyles, Typography, Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productActions';
import { LocalOffer as Badge} from '@material-ui/icons';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import clsx from'clsx'

//componenets
import ActionItem from './ActionItem';


const useStyles = makeStyles (theme => ({
    component: {
        marginTop: 55,
        background: '#F2F2F2'
    },
    container: {
        background: '#FFFFFF',
       // margin: '0 80px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    smallText: {
        fontSize: 14,
        verticalAlign: 'baseline',
        '& >*': {
            marginTop:10
        }
    },
    greyTextColor: {
        color: '#878787'
    },
    price: {
        fontSize:28
    },
    badge: {
        fontSize: 14,
        marginRight: 10,
        color: '#00CC00'
    }
}));

const DetailView = ({match}) => {
    const classes = useStyles();
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const { product } = useSelector(state => state.getProductDetails);

    const date = new Date(new Date().getTime() + (5*24*60*60*1000));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetails(match.params.id))     
    }, [dispatch,match])

    return (
        <Box className = {classes.component}>
        { product && Object.keys(product).length &&
                <Grid container className = {classes.container}>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product}/>
                    </Grid>
                
                    <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography className={clsx(classes.greyTextColor, classes.smallText)}>9 Ratings & 1 Reviews</Typography>
                        <Typography>
                            <span className={classes.price}>₹{product.price.cost}</span> &nbsp;&nbsp;&nbsp;
                            <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                            <span style={{color: '#388E3C'}}>{product.price.discount} off</span>
                        </Typography>
                            <Typography style={{ marginTop:20, fontWeight: 600}}>Available offers</Typography>
                        <Box className={classes.smallText}>
                            <Typography><Badge className={classes.badge} />Special PriceGet extra 15% off (price inclusive of discount)</Typography>
                            <Typography><Badge className={classes.badge} />Combo OfferBuy 2 items save 5%;Buy 3 or more save 10%</Typography>                   
                            <Typography><Badge className={classes.badge} />Avail No Cost EMI on select cards for orders above ₹2999</Typography>               
                        </Box>

                        <Table>
                            <TableBody>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Delivery</TableCell> 
                                    <TableCell style={{fontWeight: 600}}>{date.toDateString()} |₹40 </TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Warranty</TableCell> 
                                    <TableCell>No Warranty</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Seller</TableCell> 
                                     <TableCell className={classes.smallText}>
                                        <span style={{color: '#8A2BE2'}}>SuperComNet</span>
                                        <Typography>GST invoice Available</Typography>
                                        <Typography>10 Days Return Policy</Typography>
                                        <Typography>View more sellers starting from ₹300</Typography>
                                     </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}> 
                                    <img src={sellerURL} style={{width:390}} alt="productImage"/>
                                    </TableCell> 
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Description</TableCell> 
                                    <TableCell>{product.description}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
        }  
        </Box>
    )
}

export default DetailView
