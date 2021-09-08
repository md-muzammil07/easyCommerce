import { Box, makeStyles, Typography, Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles({
    componenet: {
        margin: '80px 140px',
        width: '80%',
        height: '65vh',
        background: '#fff'
    },
    image: {
        width: '15%'
    },
    container: {
        textAlign: 'center',
        paddingTop:70,
        '& > *': {
            marginTop: 10,
            fontSize: 14
        }
    },
    button: {
        margibTop: 20,
        padding: '12px 70px',
        borderRadius: 2,
        fontSize: 14,
        background: '#00CC00',
        color: '#fff'
    }
})
const EmptyCart = () => {
    
    const emptycarturl = 'https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png';
    const classes = useStyles();
    const history = useHistory();

    const addItem = () => {
        history.push('/')
    }

    return (
        <Box className={classes.componenet}>
            <Box className={classes.container}>
                <img src = {emptycarturl} className={classes.image} />
                
                <Typography>Your Shopping is Cart is Empty!</Typography>
                <Typography>Please add Something in your Cart</Typography>
                <Button className={classes.button} variant="contained" onClick={() => addItem()} >Continue Shopping</Button>
            </Box>
        </Box>
    )
}

export default EmptyCart;
