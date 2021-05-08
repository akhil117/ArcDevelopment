import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Lottie from 'react-lottie';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import swiss from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";
import integrationAnimation from "../animations/integrationAnimation/data.json";

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
}))

const MobileApps = (props) => {
    const { setValue, setSelectedMenuIndex } = props;

    const classes = useStyles();
    const theme = useTheme();

    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));



    const integrationAnimations = {
        loop: true,
        autoplay: false,
        animationData: integrationAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Grid item container direction="column" className={classes.mainContainer}>

            {/*Heading Row*/}
            <Grid item container direction="row" justify={matchesMD ? "center" : "flex-start"} className={classes.rowContainer}>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{ marginRight: "1em", marginLeft: "-3.5em" }}>
                        <IconButton  style={{ backgroundColor: "transparent" }} component={Link} to="/customsoftware" onClick={() => { setValue(1); setSelectedMenuIndex(1) }} >
                            <img src={backArrow} alt="Back to CustomSoftwarePage" />
                        </IconButton>
                    </Grid>
                </Hidden>

                <Grid item container direction="column" className={classes.heading} style={{ textAlign: matchesMD ? "center" : "inherit" }}>
                    <Grid item>
                        <Typography variant="h2" gutterBottom>
                            iOS/Android App Development
                        </Typography>

                        <Typography variant="body1" paragraph>
                            Mobile apps allow you to take your tools on the go.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            Convenience. Connection.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} >
                        <IconButton  component={Link} to="/websites" onClick={() => { setValue(1); setSelectedMenuIndex(3) }}>
                            <img src={forwardArrow} alt="Forward to Website Development Service" />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>

            {/*Integration Animation Row */}
            <Grid item container direction={matchesSM ? "column" : "row"} className={classes.rowContainer}>

                <Grid item container direction="column" md style={{ textAlign: matchesSM ? "center" : "inherit" }}>
                    <Grid item>
                        <Typography variant="h4">
                            Integration
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our technology enables an innate interconnection between web and mobile applications, putting everything you need right in one convenient place.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your users than ever before.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item md>
                    <Lottie
                        options={integrationAnimations}
                        style={{ maxWidth: "20em" }}
                    />
                </Grid>

                <Grid item container direction="column" md style={{ textAlign: matchesSM ? "center" : "right" }}>
                    <Grid item>
                        <Typography variant="h4">
                            Simultaneous Platform Support
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets — all at the same time.
                         </Typography>

                        <Typography variant="body1" paragraph>
                            This significantly reduces costs and creates a more unified brand experience across all devices.
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>

            {/*All Three Icons */}
            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{ marginBottom: "15em" }}>

                <Grid item container direction="column" md alignItems="center">
                    <Grid item>
                        <Typography variant="h4">
                            Extend Functionality
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={swiss} alt="swiss army knife" />
                    </Grid>
                </Grid>

                <Grid item container direction="column" md alignItems="center"
                    style={{
                        marginTop: matchesMD ? "10em" : 0,
                        marginBottom: matchesMD ? "10em" : 0
                    }}
                >
                    <Grid item>
                        <Typography variant="h4">
                            Extend Access
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img
                            src={access}
                            alt="tear-one-off sign"
                            style={{ maxWidth: matchesXS ? "20em" : "28em" }}
                        />
                    </Grid>
                </Grid>

                <Grid item container direction="column" md alignItems="center">
                    <Grid item>
                        <Typography variant="h4">
                            Increase Engagement
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={engagement} alt="app with notification" />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item> {/*--- The CallToAction Block---*/}
                <CallToAction {...props} />
            </Grid>
        </Grid>
    );
};


export default MobileApps;