import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';

import history from "../assets/history.svg";
import MyProfile from "../assets/MyProfile.jpg"
import mrcooper from "../assets/mrcooper.png"
import cricket from "../assets/cricket.jpg"

import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles(theme => ({

    missionStatement: {
        fontStyle: "italic",
        fontWeight: "300",
        fontSize: "1.5rem",
        maxWidth: "50em",
        lineHeight: "1.4"
    },

    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
        }
    },


    Avatar: {
        height: "20em",
        width: "20em",
        [theme.breakpoints.down("sm")]: {
            height: "15em",
            width: "15em",
            maxWidth: 300,
            maxHeight: 300
        }
    },

    mrCooperAvatar: {
        height: "15em",
        width: "15em"
    }
}));

const AboutUs = (props) => {

    const classes = useStyles();
    const theme = useTheme();

    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));


    return (
        <Grid item container direction="column">
            <Grid item style={{ marginTop: matchesMD?"1em":"2em" }} className={classes.rowContainer}>
                <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                    About Us
                 </Typography>
            </Grid>
            <Grid item container justify="center" className={classes.rowContainer} style={{ marginTop:matchesMD?"1.5em": "3em" }}>
                <Grid item>
                    <Typography variant="h4" align="center" className={classes.missionStatement}>
                        Whether it be person to person, business to consumer, or an individual to their interests, technology is meant to bring us closer to what we care about in the best way possible. Arc Development will use that principle to provide fast, modern, inexpensive, and aesthetic software to the Midwest and beyond.
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} justify="space-around" style={{ alignItems: matchesMD ? "center" : undefined, marginTop: "10em", marginBottom: "10em" }}>
                <Grid item>
                    <Grid item container direction="column" lg style={{ maxWidth: "35em", textAlign: matchesMD ? "center" : undefined }}>
                        <Grid item>
                            <Typography variant="h4" gutterBottom>
                                History
                        </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" style={{ fontWeight: 700, fontStyle: "italic" }} >
                                We're the new kid on the block
                        </Typography>
                            <Typography variant="body1" paragraph>
                                Founded in 2021, we’re ready to get our hands on the world’s business problems.
                        </Typography>
                            <Typography variant="body1" paragraph>
                                It all started with one question: Why aren’t all businesses using available technology? There are many different answers to that question: economic barriers, social barriers, educational barriers, and sometimes institutional barriers.
                        </Typography>
                            <Typography variant="body1" paragraph>
                                We aim to be a powerful force in overcoming these obstacles. Recent developments in software engineering and computing power, compounded by the proliferation of smart phones, has opened up infinite worlds of possibility. Things that have always been done by hand can now be done digitally and automatically, and completely new methods of interaction are created daily. Taking full advantage of these advancements is the name of the game.
                        </Typography>
                            <Typography variant="body1" paragraph>
                                All this change can be a lot to keep up with, and that’s where we come in.
                        </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <img src={history} alt="History Icon" style={{ maxHeight: matchesMD ? 200 : "22em" }} />
                </Grid>
            </Grid>

            <Grid item container direction="column" className={classes.rowContainer} alignItems="center" style={{ marginBottom: "15em" }}>
                <Grid item >
                    <Typography variant="h4" gutterBottom align="center">
                        Team
                    </Typography>
                </Grid>

                <Grid item>

                    <Typography variant="body1" paragraph align="center">
                        Akhil Batchu, Founder
                    </Typography>

                    <Typography variant="body1" paragraph align="center">
                        I started Development when I was 17 years old.
                    </Typography>
                </Grid>

                <Grid item>
                    <Avatar alt="Akhil Batchu (founder)" src={MyProfile} className={classes.Avatar} />
                </Grid>

                <Grid item container justify={matchesMD ? "center" : undefined}>

                    <Hidden lgUp>
                        <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
                            <Typography variant="body1" align="center" paragraph>
                                I started Application Development from my college days, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.
                        </Typography>
                            <Typography variant="body1" align="center" paragraph>
                                Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed. I currently started sharing my learnings via Medium Blogs as well as started my work learning more about the cloud computing.
                         </Typography>
                        </Grid>
                    </Hidden>

                    <Grid item container direction="column" lg alignItems="center" style={{marginBottom:matchesMD?"2.5em":0}}>
                        <Grid item>
                            <Avatar src={mrcooper} alt="Mr Cooper Company Logo" className={classes.mrCooperAvatar} />
                        </Grid>
                        <Grid item>
                            <Typography variant="caption" align="center">
                                Software Engineer at Mr Cooper
                            </Typography>
                        </Grid>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
                            <Typography variant="body1" align="center" paragraph>
                                I started Application Development from my college days, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.
                        </Typography>
                            <Typography variant="body1" align="center" paragraph>
                                Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have developed. I currently started sharing my learnings via Medium Blogs as well as started my work learning more about the cloud computing.
                         </Typography>
                        </Grid>
                    </Hidden>
                    <Grid item container direction="column" lg alignItems="center">
                        <Grid item>
                            <Avatar src={cricket} alt="Cricket" className={classes.mrCooperAvatar} />
                        </Grid>
                        <Grid item>
                            <Typography variant="caption" align="center">
                                My Favourite Sport - Cricket
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item> {/*--- The CallToAction Block---*/}
                <CallToAction {...props} />
            </Grid>
        </Grid >
    )
};


export default AboutUs;