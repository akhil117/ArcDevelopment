import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import animationData from '../animations/landinganimation/data.js'
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobile from '../assets/mobileIcon.svg';
import websitesIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles(theme => ({
    animation: {
        minWidth: "21em",
        maxWidth: "50em",
        marginLeft: "10%",
        marginTop: "2em",
        [theme.breakpoints.down('xs')]: {
            maxWidth: "30em"
        },
    },
    buttonContainer: {
        marginTop: "1em",
    },
    estimate: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginRight: 40,
        width: 145,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        fontSize: "0.9em",
        padding: 8
    },
    celebrationText: {
        ...theme.typography.estimate,
        color: theme.palette.common.orange
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    learnButtonArrow: {
        ...theme.typography.learnButton,
        fontSize: "0.9em",
        padding: 8,
        width: 145,
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7em",
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: "2em"
        }
    },
    mainContainer: {
        marginTop: "5em",
        height:"auto",
        [theme.breakpoints.down('md')]: {
            marginTop: "3em",
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: "2em"
        },
    },
    textButtonContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
            width: "100%"
        }
    },
    subtitle: {
        marginBottom: "2em"
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
        }
    },
    mobileIcon: {
        marginRight: "3em",
    },
    serviceContainer: {
        marginTop: "5em",
        [theme.breakpoints.down('xs')]: {
            padding: "2em"
        }
    },
    mobileContainer: {
        marginTop: "5em",
        [theme.breakpoints.down('xs')]: {
            padding: "1em"
        }
    }
}));

const LandingPage = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    return (
        <React.Fragment>
            <Grid container direction="column" className={classes.mainContainer}>
                <Grid item>{ /*----Hero Block----*/}
                    <Grid container justify="flex-end" alignItems="center" direction="row">
                        <Grid sm item className={classes.textButtonContainer}>
                            <Typography align="center" variant="h2">Work on your ideas<br />And the<br />Trophy is yours</Typography>
                            <Grid container direction="row" justify="center" className={classes.buttonContainer}>
                                <Grid item>
                                    <Button color="secondary" className={classes.estimate} variant="contained">Free Estimate</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" className={classes.learnButtonArrow}><span style={{ marginRight: 10 }}>Learn More </span> <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} /> </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm className={classes.animation}>
                            <Lottie options={defaultOptions}
                                length={"100%"}
                                width={"90%"}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item > {/*---ServicesBlock---*/}
                    <Grid container direction="row" className={classes.serviceContainer} justify={matches ? "center" : undefined}>
                        <Grid item style={{ marginLeft: matches ? 0 : "5em", textAlign: matches ? "center" : undefined }}>
                            <Typography variant="h4">
                                Custom Software Development
                            </Typography>
                            <Typography variant="subtitle1" className={classes.subtitle}>
                                Save Energy. Save Time. Save Money
                            </Typography>
                            <Typography variant="subtitle1">
                                Complete digital solution, from investigation to{" "}
                                <span className={classes.celebrationText}>celebration</span>
                            </Typography>
                            <Button className={classes.learnButton} variant="outlined"><span style={{ marginRight: 10 }}>Learn More </span> <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} /> </Button>
                        </Grid>
                        <Grid item>
                            <img className={classes.icon} src={customSoftwareIcon} alt="CustomSoftwareIcon" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item> {/*---Mobile Block---*/}
                    <Grid container className={classes.mobileContainer} direction="row" justify={matches ? "center" : "flex-end"}>
                        <Grid item style={{ textAlign: matches ? "center" : undefined }}>
                            <Typography variant="h4">
                                iOS/Android App Development
                            </Typography>
                            <Typography variant="subtitle1" className={classes.subtitle}>
                                Extend Functionality. Extend Access.{matches ? null : <br />} Increase Engagement.
                            </Typography>
                            <Typography variant="subtitle1">

                                Integrate your web experience or create {matches ? null : <br />}a standalone app with either  {matches ? null : <br />}mobile platform

                            </Typography>
                        </Grid>
                        <Grid item>
                            <img className={classes.mobileIcon} src={mobile} alt="mobileIcon" />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item > {/*--Website Development---*/}
                    <Grid container direction="row" className={classes.serviceContainer} style={{marginTop:"5em"}} justify={matches ? "center" : undefined}>
                        <Grid item style={{ marginLeft: matches ? 0 : "5em", textAlign: matches ? "center" : undefined }}>
                            <Typography variant="h4">
                                Website Development
                            </Typography>
                            <Typography variant="subtitle1" className={classes.subtitle}>
                                Reach More. Discover More. Sell More.
                            </Typography>
                            <Typography variant="subtitle1">
                                Optimized for Search Engines, built for speed
                            </Typography>
                            <Button className={classes.learnButton} variant="outlined"><span style={{ marginRight: 10 }}>Learn More </span> <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} /> </Button>
                        </Grid>
                        <Grid item>
                            <img className={classes.icon} src={websitesIcon} alt="websitesIcon" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </React.Fragment>
    )

};


export default LandingPage;