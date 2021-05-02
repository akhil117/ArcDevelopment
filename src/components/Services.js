import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';

import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobile from '../assets/mobileIcon.svg';
import websitesIcon from "../assets/websiteIcon.svg";

//1800407267864

const useStyles = makeStyles(theme => ({
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
    mobileContainer: {
        [theme.breakpoints.down('xs')]: {
            padding: "1em"
        }
    },
    mobileIcon: {
        marginRight: "3em",
        [theme.breakpoints.down('xs')]: {
            marginRight: 0,
        }
    },
    subtitle: {
        marginBottom: "2em"
    },
}));

const Services = (props) => {
    const { setValue, setSelectedMenuIndex } = props;


    const classes = useStyles();
    const theme = useTheme();

    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));


    return (
        <React.Fragment>
            <Grid container direction="column">
                <Grid item style={{ marginLeft: matchesXS ? 0 : "5em", marginTop: matchesXS ? "1em" : "2em" }}> {/*---Services Title---*/}
                    <Typography variant="h2" gutterBottom style={{ textAlign: matchesSM ? "center" : undefined }}>
                        Services
                    </Typography>
                </Grid>

                <Grid item>
                    {" "}
                    {/*-----iOS/Android Block-----*/}
                    <Grid item container className={classes.mobileContainer}
                        style={{ marginTop: matchesSM ? "1em" : "5em" }}
                        direction="row" justify={matchesSM ? "center" : "flex-end"}
                    >
                        <Grid item style={{ textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }}>
                            <Typography variant="h4" gutterBottom>
                                iOS/Android App Development
                            </Typography>

                            <Typography variant="subtitle1" className={classes.subtitle}>
                                Extend Functionality. Extend Access. Increase Engagement.
                            </Typography>

                            <Typography variant="subtitle1" gutterBottom>
                                Integrate your web experience or create a standalone app
                            {matchesSM ? null : <br />} with either mobile platform.
                            </Typography>
                            <Button className={classes.learnButton} component={Link} onClick={() => { setValue(1); setSelectedMenuIndex(2) }} to="/mobileapps" variant="outlined"><span style={{ marginRight: 10 }}>Learn More </span> <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} /> </Button>
                        </Grid>

                        <Grid item>
                            <img src={mobile} className={classes.mobileIcon} alt="mobile icon" />
                        </Grid>
                    </Grid>

                </Grid>


                <Grid item>
                    {" "}
                    {/*-----Custom Software Block-----*/}
                    <Grid item container className={classes.mobileContainer}
                        style={{ marginTop: matchesSM ? "1em" : "5em" }}
                        direction="row" justify={matchesSM ? "center" : undefined}
                    >
                        <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }}>
                            <Typography variant="h4" gutterBottom>
                                Custom Software Development
                            </Typography>

                            <Typography variant="subtitle1" className={classes.subtitle}>
                                Save Energy. Save Time. Save Money.
                            </Typography>

                            <Typography variant="subtitle1" gutterBottom>
                                Complete digital solutions, from investigation to celebration.

                            </Typography>
                            <Button className={classes.learnButton} component={Link} onClick={() => { setValue(1); setSelectedMenuIndex(1) }} to="/customsoftware" variant="outlined"><span style={{ marginRight: 10 }}>Learn More </span> <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} /> </Button>
                        </Grid>

                        <Grid item>
                            <img src={customSoftwareIcon} className={classes.mobileIcon} alt="customsoftware icon" />
                        </Grid>
                    </Grid>

                </Grid>


                <Grid item>
                    {" "}
                    {/*-----Website Development-----*/}
                    <Grid item container className={classes.mobileContainer}
                        style={{ marginTop: matchesSM ? "1em" : "5em" }}
                        direction="row" justify={matchesSM ? "center" : "flex-end"}
                    >
                        <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }}>
                            <Typography variant="h4" gutterBottom>
                                Website Development
                            </Typography>

                            <Typography variant="subtitle1" className={classes.subtitle}>
                                Reach More. Discover More. Sell More.
                            </Typography>

                            <Typography variant="subtitle1" gutterBottom>
                                Optimized for Search Engines, built for speed.
                            </Typography>
                            <Button className={classes.learnButton} component={Link} to="/websites" onClick={() => { setValue(1); setSelectedMenuIndex(3) }} variant="outlined"><span style={{ marginRight: 10 }}>Learn More </span> <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} /> </Button>
                        </Grid>

                        <Grid item>
                            <img src={websitesIcon} className={classes.mobileIcon} alt="website icon" />
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>

        </React.Fragment>
    )
};

export default Services;