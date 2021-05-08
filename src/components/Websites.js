import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import analytics from "../assets/analytics.svg";
import ecommerce from "../assets/ecommerce.svg";
import outreach from "../assets/outreach.svg";
import seo from "../assets/seo.svg";

import CallToAction from "./ui/CallToAction";
const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        paddingBottom: "10em",
        [theme.breakpoints.down('sm')]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
        }
    },
    heading: {
        maxWidth: "40em",
    },
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down('sm')]: {
            marginTop: "1em"
        }
    },
    arrowContainer: {
        marginTop: "0.5em"
    },
    paragraphContainer: {
        maxWidth: "30em"
    }
}));


const Websites = (props) => {

    const { setValue, setSelectedMenuIndex } = props;

    const classes = useStyles();
    const theme = useTheme();

    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid item container direction="column" className={classes.mainContainer}>

            <Grid item container direction="row" justify={matchesMD ? "center" : "flex-start"} className={classes.rowContainer}>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{ marginRight: "1em", marginLeft: "-3.5em" }}>
                        <IconButton style={{ backgroundColor: "transparent" }} component={Link} to="/mobileapps" onClick={() => {
                            setValue(1); setSelectedMenuIndex(2)
                        }} >
                            <img src={backArrow} alt="Back to MobileApps Page" />
                        </IconButton>
                    </Grid>
                </Hidden>

                <Grid item container direction="column" className={classes.heading} style={{ textAlign: matchesMD ? "center" : "inherit" }}>
                    <Grid item>
                        <Typography variant="h2" gutterBottom>
                            Website Development
                        </Typography>

                        <Typography variant="body1" paragraph>
                            Having a website is a necessity in today’s business world. They give you one central, public location to let people know who you are, what you do, and why you’re the best at it.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            From simply having your hours posted to having a full fledged online store, making yourself as accessible as possible to users online drives growth and enables you to reach new customers.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} >
                        <IconButton component={Link} to="/services" onClick={() => { setValue(1); setSelectedMenuIndex(0) }}>
                            <img src={forwardArrow} alt="Forward to Website Development Service" />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>

            <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center" className={classes.rowContainer} style={{ marginTop: "15em" }}>

                <Grid item>
                    <Grid item container direction="column">
                        <Grid item>
                            <Typography variant="h4" gutterBottom align={matchesSM ? "center" : undefined}>
                                Analytics
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={analytics} alt="graph with magnifying glass revealing 1's and 0's" style={{ marginLeft: matchesSM?0: "-2.75em" }} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer}>
                    <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                        Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business, empowering you to make smarter decisions with measurable effects.
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center" justify="flex-end" className={classes.rowContainer} style={{ marginTop: "15em", marginBottom: "15em" }}>
                <Grid item>
                    <Grid item container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>
                                E-Commerce
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={ecommerce} alt="world outline made of dollar signs" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer} style={{ marginLeft: matchesSM ? 0 : "1em" }}>
                    <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                        It’s no secret that people like to shop online.
                    </Typography>
                    <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                        In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie.
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center" className={classes.rowContainer}>
                <Grid item>
                    <Grid item container direction="column">
                        <Grid item>
                            <Typography variant="h4" gutterBottom align={matchesSM ? "center" : undefined}>
                                Outreach
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={outreach} alt="megaphone" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer} style={{ marginLeft: matchesSM ? 0 : "1em" }}>
                    <Typography variant="body1" align={matchesSM ? "center" : undefined}>
                        Draw people in with a dazzling website. Showing off your products
                        online is a great way to help customers decide what’s right for them
                        before visiting in person.
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center" justify="flex-end" className={classes.rowContainer} style={{ marginTop: "15em", marginBottom: "15em" }}>
                <Grid item>
                    <Grid item container direction="column">
                        <Grid item>
                            <Typography variant="h4" gutterBottom align={matchesSM?"center":"center"}>
                                Search Engine
                                <br />
                                Optimization
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={seo} alt="world outline made of dollar signs" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer} style={{ marginLeft: matchesSM ? 0 : "1em" }}>
                    <Typography variant="body1" paragraph align={matchesSM?"center":undefined}>
                        How often have you ever been to the second page of Google results?
                    </Typography>
                    <Typography variant="body1" paragraph align={matchesSM?"center":undefined} >
                        If you’re like us, probably never.
                    </Typography>
                    <Typography variant="body1" paragraph align={matchesSM?"center":undefined}>
                        Customers don’t go there either, so we make sure your website is designed to end up on top.
                    </Typography>
                </Grid>
            </Grid>
        
        
            <Grid item> {/*--- The CallToAction Block---*/}
                <CallToAction {...props} />
            </Grid>
        </Grid>
    );
}

export default Websites;