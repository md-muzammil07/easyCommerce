import {useState} from 'react';
import { Dialog, DialogContent, makeStyles, Box, Typography, TextField, Button} from "@material-ui/core";
import img from './freeLogo.jpeg';
import { authenticateSignup, authenticateLogin } from '../../service/api';

const useStyles = makeStyles ({  
    component: {
        height: '90vh',
        width: '110vh',
        maxWidth: 'unset !important'
       
    },
    image: {
        backgroundImage: `url(${img}) `,
        height: '88.8vh',
        width: '45%',
        background: '#8A2BE2',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 85%',
        padding: '45px 35px',
        '& > *': {
            color: '#FFFFFF',
            fontWeight: 600
        }
    },
    login: {
        padding: '25px 35px',
        display:'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop:20
        }
    },
    loginbtn:{
        textTransform:'none',
        background:'orange',
        color: '#FFFFFF',
        height: 43,
        borderRadius: 3,
        boxShadow: '0 2px 4px 0',
        '&:hover': {
            backgroundColor: 'orange',
            // boxShadow: 'none',
          },
    },
    accbtn:{
        textTransform:'none',
        background:'#8A2BE2',
        color: '#FFFFFF',
        height: 43,
        borderRadius: 3,
        boxShadow: '0 2px 4px 0',
        '&:hover': {
            backgroundColor: '#8A2BE2',
            // boxShadow: 'none',
          },
        
    },
    error: {
        fontSize:10,
        color:'#ff6161',
        marginTop: 10,
        fontWeight:600,
        lineHeight: 0
    }
})

const initialValue ={ 
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: 'Welcome to you Easy Commerce',
        subHeading: 'Sign up with your mobile number to get started'
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    phone: '',
    password: ''
}

const LoginInitialValues = {
    username: '',
    password: ''
}

const Login = ({ open, setOpen, setAccount }) => {

    const classes = useStyles();

    const [account, toggleAccount] = useState(initialValue.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(LoginInitialValues);
    const [error, setError] = useState(false);
   

    const handleClose = () => {
        setOpen(false);
        toggleAccount(initialValue.login)
    }

    const toggleUserAccount = () => {
        toggleAccount(initialValue.signup)
    }

    const signupUser = async() => {       
        let response =  await authenticateSignup(signup);       
        if(!response) return;      
        handleClose();
        setAccount(signup.username)
    }

    const loginUser = async() => {
        let response = await authenticateLogin(login);
        if(!response) {
            setError(true);
            return
        } 
        handleClose();
        setAccount(login.username)
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
       console.log(signup);
    }
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className= {classes.component}>
                <Box style={{display:'flex'}}>
                    <Box className={classes.image}>
                    <Typography variant="h5">{account.heading}</Typography>
                    <Typography style={{marginTop:22}}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ?                    
                        <Box className={classes.login}>
                            <Typography style={{fontSize:18}}>Login/Sign Up On Easy Commerce</Typography>
                            <TextField onChange={(e) => onValueChange(e)} name='username' placeholder='Mobile number or Email'/>
                            <TextField onChange={(e) => onValueChange(e)} name='password' placeholder='Password'/>
                            { error && <Typography className={classes.error}>Invalid username and password</Typography>}
                            <Button variant='contained' onClick={() => loginUser()} className={classes.loginbtn}>Login</Button>
                            <Typography style={{textAlign:'center', color: '#878787', fontSize:15}}>or</Typography>
                            <Button variant='contained' className={classes.accbtn} onClick={() => toggleUserAccount()} >Create New Account</Button>
                        </Box> :
                        <Box className={classes.login}>
                            <Typography style={{fontSize:18}}>Login/Sign Up On Easy Commerce</Typography>
                            <TextField onChange={(e) => onInputChange(e)} name='firstname' placeholder='FirstName'/>
                            <TextField onChange={(e) => onInputChange(e)} name='lastname' placeholder='LastName'/> 
                            <TextField onChange={(e) => onInputChange(e)} name='username' placeholder='UserName'/> 
                            <TextField onChange={(e) => onInputChange(e)} name='email' placeholder='Email'/>
                            <TextField onChange={(e) => onInputChange(e)} name='phone' placeholder='Mobile'/>
                            <TextField onChange={(e) => onInputChange(e)} name='password' placeholder='Password'/>                         
                            <Button variant='contained' className={classes.loginbtn} onClick={() => signupUser()} >Signup</Button>
                        </Box>
                    }
                </Box>                  
            </DialogContent>
        </Dialog>

    )
}

export default Login;