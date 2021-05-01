import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import footerAdornment from "../../assets/FooterAdornment.svg"
import medium from '../../assets/medium.svg';
import stackoverflow from '../../assets/stackOverflow.svg';
import linkedin from '../../assets/linkedin.svg';
//import linkedin from '../../assets/Linkedin.svg';


const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        margin:0,
        padding:0,
        minWidth: "100%",
        zIndex: "1302",
        position: "relative"
    },
    adornment: {
        width: "22em",
        [theme.breakpoints.down('md')]: {
            width: "18em",
        },
        [theme.breakpoints.down('xs')]: {
            width: "14em",
        },
        verticalAlign: "bottom"
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: "0.75rem",
        textDecoration: "none"
    },
    gridItem: {
        margin: "2.5em",
        marginRight: "0em", 
    },
    icon: {
        width: "3em",
        height: "3em",
        [theme.breakpoints.down('md')]: {
            width: "2.5em",
        height: "2.5em",
        },
        [theme.breakpoints.down('xs')]: {
            width: "2em",
            height: "2em",
        },
    },
    socialContainer:{
        position: "absolute",
        marginTop: "-6em",
        right:"1.5em",
        [theme.breakpoints.down('xs')]: {
            right:"0.5em",
        },
    }
}));

const Footer = (props) => {
    const classes = useStyles();
    const {setValue, setSelectedMenuIndex } = props;
    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container justify="center" className={classes.mainContainer}>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/" className={classes.link} onClick={() => setValue(0)}>
                                Home
                    </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/services" className={classes.link} onClick={() => { setValue(1); setSelectedMenuIndex(0) }}>
                                Services
                    </Grid>
                            <Grid item component={Link} to="/customsoftware" className={classes.link} onClick={() => { setValue(1); setSelectedMenuIndex(1) }}>
                                Custom Software Development
                    </Grid>
                            <Grid item component={Link} to="/mobileapps" className={classes.link} onClick={() => { setValue(1); setSelectedMenuIndex(2) }}>
                                IOS/Android Development
                    </Grid>
                            <Grid item component={Link} to="/websites" className={classes.link} onClick={() => { setValue(1); setSelectedMenuIndex(3) }}>
                                Website Development
                    </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/revolution" className={classes.link} onClick={() => setValue(2)}>
                                The Revolutionary
                    </Grid>
                            <Grid item component={Link} to="/vision" className={classes.link} onClick={() => setValue(2)}>
                                Vision
                    </Grid>
                            <Grid item component={Link} to="/technology" className={classes.link} onClick={() => setValue(2)}>
                                Technology
                    </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/about" className={classes.link} onClick={() => setValue(3)}>
                                About Us
                    </Grid>
                            <Grid item component={Link} to="/history" className={classes.link} onClick={() => setValue(3)}>
                                History
                    </Grid>
                            <Grid item component={Link} to="/team" className={classes.link} onClick={() => setValue(3)}>
                                Team
                    </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/contact" className={classes.link} onClick={() => setValue(4)}>
                                Contact Us
                    </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img className={classes.adornment} src={footerAdornment} alt="footer decorative with black slash" />
            <Grid container className={classes.socialContainer} spacing={2} justify="flex-end">
                <Grid item component={"a"} href="https://stackoverflow.com/users/7908077/akhil"  rel="noopener noreferrer" target="_blank">
                    <img alt="stackoverflow" src={stackoverflow} className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href="https://www.linkedin.com/in/akhilbatchu/"  rel="noopener noreferrer" target="_blank">
                    <img alt="Linkdin" src={linkedin} className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href="https://medium.com/akhil-batchu"  rel="noopener noreferrer" target="_blank">
                    <img alt="Medium" src={medium} className={classes.icon} />
                </Grid>
            </Grid>
        </footer>
    );
};

export default Footer;


/**
 * To move images we can use verticalAlign
 *  Relative Absolute
 *  Grid mastered break points
 */
