import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React, { useState, useEffect } from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbar: {
        ...theme.mixins.toolbar,
        marginBottom: "2rem",
        [theme.breakpoints.down('md')]: {
            marginBottom: "1.5rem",
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: "1rem",
        },
    },
    appBar: {
        zIndex: theme.zIndex.modal + 1
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    logo: {
        height: "7em",
        textTransform: 'none',
        [theme.breakpoints.down('md')]: {
            height: "6em"
        },
        [theme.breakpoints.down('xs')]: {
            height: "5em"
        },
    },
    tabsContainer: {
        marginLeft: "auto"
    },
    tab: {
        minWidth: 10,
        marginLeft: "25px",
        ...theme.typography.tab,
    },
    button: {
        borderRadius: "50px",
        marginLeft: "40px",
        marginRight: "25px",
        ...theme.typography.estimate,
        height: "2.8rem",
        "&:hover":{
            backgroundColor:theme.palette.secondary.light
        },
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: "0"
    },
    menuItem: {
        ...theme.typography.tab,
        "&:hover": {
            opacity: 0.85
        }
    },
    selectedItem: {
        ...theme.typography.tab,
        opacity: 1
    },
    menuSelected: {
        color: "#fff",
        opacity: 1
    },
    menuDeselect: {
        color: "#fff",
        opacity: 0.7
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawerIcon: {
        height: "40px",
        width: "40px"
    },
    drawerItemEstimate: {
        ...theme.typography.estimate,
        color: "black",
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            background: theme.palette.common.orange,
        }
    },
    drawerItemTextEstimate: {
        ...theme.typography.estimate,
    },
}));

/** 
 * Basically Here wer are toolbar tag for placing element horizontally direction 
 * 
 * 
 * *
*/
const Header = (props) => {
    const {value,setValue,selectedMenuIndex,setSelectedMenuIndex} = props;
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    //any thing medium and below

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const [anchorEl, setAnchorEl] = useState(null);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClick = (event) => {
        setOpenMenu(true);
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedMenuIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setOpenMenu(false);
        setAnchorEl(null);
    };

    const menuServiceProperties = [
        { name: "Services", url: "/services" },
        { name: "Custom Software Development", url: "/customsoftware" },
        { name: "IOS/Android Development", url: "/mobileapps" },
        { name: "Website Development", url: "/websites" }
    ]

    const tabProperties = [
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "The Revolutionary", url: "/revolution" },
        { name: "About Us", url: "/about" },
        { name: "Contact Us", url: "/contact" },
    ]

    useEffect(() => {
        const pathName = window.location.pathname;
        const tabIndex = tabProperties.findIndex(option => option.url === pathName);
        const menuIndex = menuServiceProperties.findIndex(option => option.url === pathName);
        if (pathName === "/estimate") {
            setValue(false);
        }
        else {
            if (tabIndex !== -1) {
                setValue(tabIndex);
            }
            else {
                setValue(1);
            }
        }
        setSelectedMenuIndex(menuIndex)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer classes={{ paper: classes.menu }} disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>
            <div className={classes.toolbar}></div>
                <List disablePadding>
                    {
                        tabProperties.map((option, index) => (
                            <ListItem key={option.name} selected={value === index}
                                onClick={(e) => { handleChange(e, index); setOpenDrawer(false) }} divider button component={Link} to={option.url}>
                                <ListItemText classes={{ root: value !== index ? classes.menuItem : classes.selectedItem }} disableTypography>{option.name}</ListItemText>
                            </ListItem>
                        ))
                    }
                    <ListItem selected={value === 5} className={classes.drawerItemEstimate} onClick={(e) => { handleChange(e, 5); setOpenDrawer(false) }} divider button component={Link} to="/estimate">
                        <ListItemText classes={{ root: classes.drawerItemTextEstimate }} disableTypography	>Free Estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    );

    const tabs = (
        <React.Fragment>
            <Tabs indicatorColor="primary" value={value} onChange={handleChange} className={classes.tabsContainer}>
                {
                    tabProperties.map((option) => {
                        if (option.url === "/services") {
                            return (<Tab key={option.name} aria-owns={anchorEl ? "simple-menu" : undefined} aria-haspopup={anchorEl ? "true" : undefined} className={classes.tab}
                                onMouseOver={(e) => handleClick(e)}
                                component={Link} to={option.url}
                                label={option.name}
                            />)
                        }
                        return <Tab key={option.name} className={classes.tab} component={Link} to={option.url} label={option.name} />
                    })
                }
            </Tabs>
            <Button variant="contained" onClick={()=>setValue(false)} color="secondary" component={Link} to="/estimate" className={classes.button}>Free Estimate</Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={openMenu}
                onClose={handleClose}
                classes={{ paper: classes.menu }}
                MenuListProps={{
                    onMouseLeave: handleClose,
                }}
                elevation={0}
                style={{zIndex:1302}}
            >
                {
                    menuServiceProperties.map((option, index) => {
                        const selectedClass = index === selectedMenuIndex && value === 1 ? classes.menuSelected : classes.menuDeselect
                        return <MenuItem key={option.name} selected={index === selectedMenuIndex && value === 1} className={selectedClass} classes={{ root: classes.menuItem }} component={Link} to={option.url} onClick={(event) => { handleClose(); setValue(1); handleMenuItemClick(event, index) }}>{option.name}</MenuItem>
                    })
                }
            </Menu>
        </React.Fragment>
    );



    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar disableGutters>
                        <Button disableRipple className={classes.logoContainer} component={Link} to="/" onClick={() => setValue(0)} >
                            <svg
                                className={classes.logo}
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 480 139"
                            >
                                <style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight: 300}.st6{fill:none;stroke:#000; stroke-width:3; stroke-miterlimit:10}`}</style>
                                <path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z" />
                                <path className="st0" d="M-1 139h479.92v.01H-1z" />
                                <text
                                    transform="translate(261.994 65.233)"
                                    className="st1 st2"
                                    fontSize="57"
                                >
                                    Arc
                </text>
                                <text
                                    transform="translate(17.692 112.015)"
                                    className="st1 st2"
                                    fontSize="54"
                                >
                                    Development
                </text>
                                <path
                                    className="st0"
                                    d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153"
                                />
                                <path
                                    d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z"
                                    fill="#0b72b9"
                                />
                                <path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z" />
                                <g id="Group_186" transform="translate(30.153 11.413)">
                                    <g id="Group_185">
                                        <g id="Words">
                                            <path
                                                id="Path_59"
                                                className="st1"
                                                d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z"
                                            />
                                        </g>
                                    </g>
                                </g>
                                <path
                                    className="st0"
                                    d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155"
                                />
                            </svg>
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbar}></div>
        </React.Fragment>
    )
};

export default Header;

/**
 * Glutter to disable extra padding
 * onMouseOver
 * ToolbarTip for horizontal display
 * SetMultiple functions in onclick= {()=>{function1();function2()}}
 * Fluid Design allows to renders based on screen size
 * localrunning command adb reverse tcp:3000 tcp:3000
 */