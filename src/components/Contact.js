import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';



import background from '../assets/background.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';
import ButtonArrow from './ui/ButtonArrow';
import mobileBackground from '../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`,
        },
        backgroundRepeat: "no-repeat",
        height: "55em",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingBottom: "10em"
    },
    button: {
        borderRadius: "50px",
        marginLeft: "40px",
        marginRight: "25px",
        ...theme.typography.estimate,
        height: "2.8rem",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7em",
        height: 35,
        padding: 5,
        [theme.breakpoints.down('md')]: {
            marginBottom: "2em"
        }
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
        fontSize: "1.5em",
        padding: 8,
        [theme.breakpoints.down("md")]: {
            marginRight: "0em",
            marginLeft: "0em",
        },
    },
    message: {
        marginTop: "5em",
        border: `2px solid ${theme.palette.common.blue}`,
        borderRadius: 5
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        height: 45,
        width: 245,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]: {
            height: 40,
            width: 225,
        },
    }
}));

const Contact = (props) => {

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');

    const [open, setOpen] = useState(false);

    const [message, setMessage] = useState('');
    const { setValue } = props;

    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ open: false, message: "", backgroundColor: "" });

    const onConfirm = async () => {
       var body = {
            name: name,
            email: email,
            phone: phone,
            message: message
        }
        try {
            setLoading(true);
            const res = await axios.post('https://arcdevelpment-email-publisher.herokuapp.com/sendEmail',body);
            console.log("Response", res);
            setLoading(false);
            setOpen(false);
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setAlert({ open: true, message: "Message sent successfully", backgroundColor: "#4BB543" })

        } catch (error) {
            console.log("Error", error);
            setLoading(false);
            setAlert({ open: true, message: "Something went wrong, please try again!", backgroundColor: "#FF3232" })
        }
    }

    const onChange = (event) => {
        let valid;
        switch (event.target.id) {
            case 'email':
                setEmail(event.target.value);
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
                if (valid) {
                    setEmailHelper('');
                }
                else {
                    setEmailHelper('Please enter a valid email');
                }
                break;
            case 'phone':
                setPhone(event.target.value);
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);
                if (valid) {
                    setPhoneHelper('');
                }
                else {
                    setPhoneHelper('Please enter a valid phoneNumber');
                }
                break;
            default:
                break;
        }
    }

    const classes = useStyles();
    const theme = useTheme();

    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    const icon = loading ? <CircularProgress size={30} /> :
        <React.Fragment>Send Message <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} /></React.Fragment>

    return (
        <Grid item container direction="row">
            <Grid item container direction="column" justify="center" alignItems="center" lg={4} xl={3}>
                <Grid item >
                    <Grid item container direction="column">
                        <Grid item>
                            <Typography variant="h2" align={matchesMD ? "center" : undefined} style={{ lineHeight: 1, marginTop: matchesSM ? "0.5em" : matchesMD ? "1em" : 0 }}>
                                Contact Us
                    </Typography>

                            <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{ color: theme.palette.common.blue }}>
                                We're waiting.
                    </Typography>
                        </Grid>

                        <Grid item container direction="row" style={{ marginTop: "2em" }} >
                            <Grid item >
                                <img src={phoneIcon} alt="phone number" style={{ marginRight: "0.5em" }} />
                            </Grid>
                            <Grid item>
                                <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1rem" }}>
                                    <a href="tel:9848694733" style={{ color: "inherit", textDecoration: "none" }}>+91-9848694733</a>
                                </Typography>
                            </Grid>
                        </Grid>


                        <Grid item container direction="row" style={{ marginBottom: "2em" }}>
                            <Grid item>
                                <img src={emailIcon} alt="emailId" style={{ marginRight: "0.5em", verticalAlign: "bottom" }} />
                            </Grid>
                            <Grid item>
                                <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1rem" }}>
                                    <a href="mailto:akhilbatchu123@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>
                                        akhilbatchu123@gmail.com</a>
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item container direction="column" style={{ maxWidth: "20em" }}>
                            <Grid item style={{ marginBottom: "0.5em" }}>
                                <TextField fullWidth id="name" label="Name" value={name} onChange={event => setName(event.target.value)} />
                            </Grid>
                            <Grid item style={{ marginBottom: "0.5em" }}>
                                <TextField error={emailHelper.length !== 0} helperText={emailHelper} fullWidth id="email" label="Email" value={email} onChange={event => onChange(event)} />
                            </Grid>
                            <Grid item style={{ marginBottom: "0.5em" }}>
                                <TextField error={phoneHelper.length !== 0} helperText={phoneHelper} fullWidth id="phone" label="Phone" value={phone} onChange={event => onChange(event)} />
                            </Grid>
                        </Grid>

                        <Grid item style={{ maxWidth: "20em" }}>
                            <TextField fullWidth InputProps={{ disableUnderline: true }}
                                className={classes.message} multiline rows={10} value={message} id="message" onChange={event => setMessage(event.target.value)} />
                        </Grid>

                        <Grid item container justify="center" style={{ marginTop: "2em", marginBottom: matchesMD ? "5em" : "0" }}>
                            <Button onClick={() => setOpen(true)} disabled={!(name.length !== 0 && message.length !== 0 && emailHelper.length === 0 && phoneHelper.length === 0)} variant="contained" className={classes.sendButton}>
                                Send Message
                        <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Dialog style={{ zIndex: 1302 }} fullScreen={matchesSM} PaperProps={{
                style: {
                    paddingTop: matchesXS ? "1em" : "2em",
                    paddingBottom: matchesXS ? "1em" : "2em",
                    paddingLeft: matchesXS
                        ? 0
                        : matchesSM
                            ? 0
                            : matchesMD
                                ? "15em"
                                : "25em",
                    paddingRight: matchesXS
                        ? 0
                        : matchesSM
                            ? 0
                            : matchesMD
                                ? "15em"
                                : "25em"
                }
            }} open={open} onClose={() => setOpen(false)}>
                <DialogContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>
                                Confirm Message
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Grid item container direction="column" style={{ maxWidth: matchesSM ? "100%" : "20em" }}>
                                <Grid item style={{ marginBottom: "0.5em" }}>
                                    <TextField fullWidth id="name" label="Name" value={name} onChange={event => setName(event.target.value)} />
                                </Grid>
                                <Grid item style={{ marginBottom: "0.5em" }}>
                                    <TextField error={emailHelper.length !== 0} helperText={emailHelper} fullWidth id="email" label="Email" value={email} onChange={event => onChange(event)} />
                                </Grid>
                                <Grid item style={{ marginBottom: "0.5em" }}>
                                    <TextField error={phoneHelper.length !== 0} helperText={phoneHelper} fullWidth id="phone" label="Phone" value={phone} onChange={event => onChange(event)} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item style={{ maxWidth: matchesSM ? "100%" : "20em" }}>
                            <TextField fullWidth InputProps={{ disableUnderline: true }}
                                className={classes.message} multiline rows={10} value={message} id="message" onChange={event => setMessage(event.target.value)} />
                        </Grid>
                    </Grid>

                    <Grid item container direction={matchesSM ? "column" : "row"} style={{ marginTop: "2em" }} alignItems="center">
                        <Grid item>
                            <Button style={{ fontWeight: 300 }} color="primary" onClick={() => setOpen(false)}>Cancel</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={onConfirm} disabled={!(name.length !== 0 && message.length !== 0 && emailHelper.length === 0 && phoneHelper.length === 0)} variant="contained" className={classes.sendButton}>
                                {icon}
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>


            <Snackbar
                autoHideDuration={4000}
                open={alert.open}
                message={alert.message}
                ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                onClose={() => setAlert({ ...alert, open: false })}></Snackbar>
            <Grid item container direction={matchesMD ? "column" : "row"} justify={matchesMD ? "center" : undefined} className={classes.background} lg={8} xl={9} alignItems="center">
                <Grid item style={{ marginLeft: matchesMD ? "0em" : "3em" }}>
                    <Grid container direction="column" style={{ textAlign: matchesMD ? "center" : "inherit" }}>
                        <Grid >
                            <Typography variant="h2" gutterBottom>
                                Simple Software. <br />
                            Revolutionary Results.
                        </Typography>
                            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }} gutterBottom>
                                Take advantage of the 21st Century.
                        </Typography>
                            <Grid item >
                                <Button onClick={() => setValue(2)} className={classes.learnButton} component={Link} to="/revolution" variant="outlined"><span style={{ marginRight: 5 }}>Learn More </span> <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} /> </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button color="secondary" component={Link} onClick={() => setValue(false)} to="/estimate" className={classes.estimate} variant="contained">Free Estimate</Button>
                </Grid>
            </Grid>
        </Grid>
    );

};

export default Contact;