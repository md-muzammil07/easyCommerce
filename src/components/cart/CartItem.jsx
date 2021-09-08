import { Card, Box, Typography, Button, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

//components
import GroupButtons from './GroupButtons';

const useStyles = makeStyles({
    component: {
        display: 'flex',
        borderRadius:0,
        borderTop: '1px solid #f0f0f0'
    },
    leftComponent: {
        margin: 20,
        display: 'flex',
        flexDirection: 'column'
    },
    rightComponent: {
        margin: 20
    },
    smallText: {
        fontSize: 14
    },
    greyTextColor: {
        color: '#878787'
    },
    price: {
        fontSize: 18,
        fontWeight:600
    },
    image: {
        width: 110, 
        height: 110
    },
    remove: {
        marginTop: '20'
    }
})
const CartItem = ({item, removeItemFromCart}) => {
    const classes = useStyles();
    return (
       <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                <img src= {item.url} className={classes.image} />
                <GroupButtons />
            </Box>
            <Box className={classes.rightComponent}>
                <Typography>{item.title.longTitle}</Typography>
                <Typography className={clsx(classes.smallText, classes.greyTextColor)} style={{marginTop:10}}>Seller:SuperComnet</Typography>
                <Typography style={{margin: '20px 0'}}>
                    <span className={classes.price}>₹{item.price.cost}</span> &nbsp;&nbsp;&nbsp;
                    <span className={classes.greyTextColor}><strike>₹{item.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                    <span style={{color: '#388E3C'}}>₹{item.price.discount} off</span>
                </Typography>
                <Button className={classes.remove} onClick= {()=> removeItemFromCart(item.id)} >Remove</Button>
            </Box>
       </Card>
    )
}

export default CartItem;
