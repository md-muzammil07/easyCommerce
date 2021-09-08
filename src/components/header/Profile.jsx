import { useState } from "react";
import { Typography, Menu, MenuItem, makeStyles } from "@material-ui/core";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link } from "react-router-dom";

const useStyles = makeStyles ({
    component: {
        marginTop: 40
    },
    logout: {
        marginLeft: 18,
        fontSize: 14
    }
})
 const Profile = ({account, setAccount}) => {
     const [open, setOpen] = useState(false);
     const classes = useStyles();

     const handleClick = (event) => {
        setOpen(event.currentTarget);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const logout = () => {
        setAccount('');
      };

    return(
        <>
            <Link><Typography onClick={handleClick} style={{marginTop:4}}>{account}</Typography></Link>
            <Menu
                 anchorEl={open}
                 open={Boolean(open)}
                 onClose={handleClose}
                 className={classes.component}
            >
                <MenuItem onClick={() => {handleClose(); logout(); }}>
                <PowerSettingsNewIcon fontSize= 'small' color='primary'/>
                <Typography className={classes.logout}> Logout </Typography></MenuItem>
          </Menu>
        </>
     )
}

export default Profile;