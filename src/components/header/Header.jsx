import { AppBar, Toolbar, makeStyles, Typography, IconButton, withStyles, List, Drawer, Box } from '@material-ui/core';
import { Link } from "react-router-dom";
import { Menu } from '@material-ui/icons';
import { useState } from 'react';

//components
import SearchBar from "./SearchBar";
import HeaderButtons from './HeaderButtons';

const useStyle = makeStyles(theme => ({
    header: {
        background: "#8A2BE2",
        color: "black"

    },
    container: {
        justifyContent: 'center',
        textDecoration: 'center',
        display: "flex"
    },

    logo: {
        fontStyle: "italic",
        marginLeft: "10%",
        textDecoration: "none",
        color: "#FFF"
    },
    list: {
        width: 250
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm', 'xs')]: {
            display: 'block'
        }
    },
    headerButtons: {
        margin: '0 5% 0 auto', 
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        } 
    }
}));

const ToolBar = withStyles({
    root: {
        minHeight: 55
    }
})(Toolbar);

const Header = () => {
    const classes = useStyle();

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box className={classes.list} onClick={handleClose}>
            <List>
                <listItem button>
                    <HeaderButtons />
                </listItem>
            </List>
        </Box>
    );

    return (
        <AppBar position="fixed" className={classes.header}>
            <ToolBar className={classes.container}>
                <IconButton
                color="inherit"
                className={classes.menuButton}
                onClick={handleOpen}
            >
                <Menu />
            </IconButton>

            <Drawer open={open} onClose={handleClose}>
                {list()}
            </Drawer>

            <Link to='/'></Link>
                <Typography className={classes.logo}>Easy Commerce</Typography>
                <SearchBar />
                <span className={classes.headerButtons}><HeaderButtons /></span>
            </ToolBar>    
        </AppBar>
    )

}

export default Header;