import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';

import animationData from '../animations/landinganimation/data.js'
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobile from '../assets/mobileIcon.svg';
import websitesIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";

import CallToAction from "./ui/CallToAction";

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
        height: "auto",
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
        [theme.breakpoints.down('xs')]: {
            marginRight: 0,
        }
    },
    serviceContainer: {
        marginTop: "7em",
        [theme.breakpoints.down('xs')]: {
            padding: "2em"
        }
    },
    mobileContainer: {
        marginTop: "5em",
        [theme.breakpoints.down('xs')]: {
            padding: "1em"
        }
    },
    revolutionDivBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: "15",
        padding: "10em",
        [theme.breakpoints.down("sm")]: {
            width: "98%",
            paddingTop: "8em",
            paddingBottom: "8em",
            paddingLeft: "0em",
            paddingRight: "0em",
            borderRadius: "0em"
        }
    },
    infoDivBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }
}));

const LandingPage = (props) => {
    const {setValue,setSelectedMenuIndex} = props;

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

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
                                    <Button color="secondary" component={Link} to="/estimate" onClick={()=>setValue(false)}  className={classes.estimate} variant="contained">Free Estimate</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" component={Link} to="/revolution" onClick={()=>setValue(2)} className={classes.learnButtonArrow}><span style={{ marginRight: 10 }}>Learn More </span> <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} /> </Button>
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
                            <Button className={classes.learnButton} onClick={()=>{setValue(1); setSelectedMenuIndex(1)}} component={Link} to="/customsoftware" variant="outlined"><span style={{ marginRight: 10 }}>Learn More </span> <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} /> </Button>
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
                            <Button className={classes.learnButton} onClick={()=>{setValue(1); setSelectedMenuIndex(2)}} component={Link} to="/mobileapps"  variant="outlined"><span style={{ marginRight: 10 }}>Learn More </span> <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} /> </Button>

                        </Grid>
                        <Grid item>
                            <img className={classes.mobileIcon} src={mobile} alt="mobileIcon" />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item > {/*--Website Development---*/}
                    <Grid container direction="row" className={classes.serviceContainer} style={{ marginTop: "5em" }} justify={matches ? "center" : undefined}>
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
                            <Button className={classes.learnButton} onClick={()=>{setValue(1); setSelectedMenuIndex(3)}} component={Link} to="/websites"  variant="outlined"><span style={{ marginRight: 10 }}>Learn More </span> <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} /> </Button>
                        </Grid>
                        <Grid item>
                            <img className={classes.icon} src={websitesIcon} alt="websitesIcon" />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item> {/*--- The Revolution Block---*/}
                    <Grid container style={{ height: "60em", marginTop: "5em", }} alignItems="center" justify="center">
                        <Card className={classes.revolutionCard}>
                            <CardContent>
                                <Grid container direction="column" style={{ textAlign: "center" }}>
                                    <Grid item>
                                        <Typography variant="h3" gutterBottom>
                                            The Revolution
                                        </Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography variant="subtitle1" gutterBottom>
                                            Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                                        </Typography>
                                        <Button className={classes.learnButtonArrow} onClick={()=>{setValue(2);}} component={Link} to="/revolution" variant="outlined"><span style={{ marginRight: 10 }}>Learn More </span> <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} /> </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <div className={classes.revolutionDivBackground} />
                    </Grid>
                </Grid>


                <Grid item> {/*--- The Information Block---*/}
                    <Grid container style={{ height: "60em" }} direction="row" alignItems="center">
                        <Grid item  container style={{position:"absolute", textAlign: matchesXS?"center":"inherit"}} direction= {matchesXS?"column":"row"}>
                            <Grid sm item   style={{ marginBottom:matchesXS?"10em":0, marginLeft: matchesXS? "0em": matches ? "2em"  : "5em",textAlign:matchesXS?"center":"left" }}>
                                <Grid container direction="column">
                                    <Typography variant="h2" style={{ color: "white" }} gutterBottom>
                                        About Us
                                </Typography>
                                    <Typography variant="subtitle2">
                                        Let's get personal.
                                </Typography>
                                    <Grid item>
                                        <Button className={classes.learnButton} onClick={()=>{setValue(3);}} component={Link} to="/about"  style={{ color: "white", borderColor: "white" }} variant="outlined"><span style={{ marginRight: 10 }}>Learn More </span> <ButtonArrow width={10} height={10} fill="white" /> </Button>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item sm  style={{marginRight: matchesXS? "0em": matches ? "2em"  : "5em", textAlign: matchesXS?"center":"right" }}>
                                <Grid container direction="column">
                                    <Typography variant="h2" style={{ color: "white" }} gutterBottom>
                                        Contact Us
                                </Typography>
                                    <Typography variant="subtitle2">
                                        Say hello!
                                    <span role="img" aria-label="waving hand">
                                            👋🏻
                                    </span>
                                    </Typography>
                                    <Grid item>
                                        <Button className={classes.learnButton} onClick={()=>{setValue(4);}} component={Link} to="/contact" style={{ color: "white", borderColor: "white" }} variant="outlined"><span style={{ marginRight: 10 }}>Learn More </span> <ButtonArrow width={10} height={10} fill="white" /> </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <div className={classes.infoDivBackground}></div>
                    </Grid>
                </Grid>

                <Grid item> {/*--- The CallToAction Block---*/}
                    <CallToAction {...props} />
                </Grid>

            </Grid>
        </React.Fragment>
    )

};


export default LandingPage;