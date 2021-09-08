import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Box, makeStyles, Typography, Button, Grid } from '@material-ui/core';
import { removeFromCart } from "../../redux/actions/cartActions";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utiles/paytm";

//compoenents
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import TotalView from "./TotalView";

const useStyles = makeStyles( theme => ({
    component: {
        // marginTop: 55,
        padding: '30px 135px',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            padding: '15px 0'
        }
    },
    leftComponent: {
        //width: '67%',
        paddingRight: 15,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 15
        }
    },
    header: {
        padding: '15px 24px',
        background: '#fff'
    },
    placeOrder: {
        background: '#fb641b',
        color: '#fff',
        borderRadius: 2,
        width: 250,
        heght: 50,
        display: 'flex',
        marginLeft: 'auto'
    },
    bottom: {
        padding:'16px 22px',
        background: '#fff',
        boxShadow: '0 -2px 10px 0 rgb( 0 0 0/10%)',
        borderTop: '1px solid #f0f0f0'
    }

}));
const Cart = () => {
    const classes = useStyles();
    const { cartItems } = useSelector(state => state.cart);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(cartItems);
    })

    const removeItemFromCart = (id) => {                    //id is paas from cartitem in fun
        dispatch(removeFromCart(id))
    }

    const buyNow = async() => {
        let response = await payUsingPaytm({ amount: 500, email: 'muzz0540@gmail.com'});

        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }

        post(information);
    }

    return (
        <>
            {
                cartItems.length ? 
                    <Grid container  className={classes.component}>
                        <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftComponent}>
                            <Grid className={classes.header}>
                                <Typography style={{fontWeight: 600, fontSize: 18}}>Shopping Cart({cartItems.length})</Typography>
                            </Grid>
                            {
                                cartItems.map(item => (
                                    <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                                ))
                            }
                            <Box className={classes.bottom}>
                                <Button onClick={() => buyNow()} className={classes.placeOrder} variant='contained'>Place Order</Button>
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalView cartItems={cartItems}/>
                        </Grid>                        
                        
                    </Grid>
                    : <EmptyCart/>
            }
        </>
    )
}

export default Cart;