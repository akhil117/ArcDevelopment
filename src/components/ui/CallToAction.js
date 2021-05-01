import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import ButtonArrow from './ButtonArrow';
import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7em",
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: "2em"
        }
    },

    background: {
        backgroundImage: `url(${background})`,
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: "inherit"
        },
        backgroundRepeat: "no-repeat",
        height: "60em",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
    },
    estimate: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginRight: "5em",
        marginLeft: "2em",
        height: 80,
        width: 205,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        fontSize: "0.9em",
        padding: 8,

        [theme.breakpoints.down("sm")]: {
            marginRight: "0em",
            marginLeft:"0em"
        },


    },

}));


const CallToAction = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
    const {setValue} = props;

    return (
        <Grid container
            className={classes.background}
            alignItems="center"
            justify= {matches?"center":"space-between"}
            direction= {matches?"column":"row"}
        >
            <Grid item style={{ marginLeft: matchesXS? "0em": matches ? "2em"  : "5em",textAlign:matches?"center":"inherit" }}>
                <Grid container direction="column">
                    <Grid >
                        <Typography variant="h2">
                            Simple Software. <br />
                            Revolutionary Results.
                        </Typography>
                        <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
                            Take advantage of the 21st Century.
                        </Typography>
                        <Grid item >
                            <Button onClick={()=>setValue(2)} className={classes.learnButton} component={Link} to="/revolution" variant="outlined"><span style={{ marginRight: 5 }}>Learn More </span> <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} /> </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button color="secondary" component={Link} onClick={()=>setValue(false)} to="/estimate" className={classes.estimate} variant="contained">Free Estimate</Button>
            </Grid>
        </Grid>
    );

}

export default CallToAction;