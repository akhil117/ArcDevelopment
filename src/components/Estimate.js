import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { cloneDeep } from 'lodash'
import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import people from "../assets/people.svg";
import usersIcon from "../assets/users.svg";
import iPhone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";
import estimateAnimation from "../animations/estimateAnimation/data.json";

const useStyles = makeStyles(theme => ({

    icon: {
        width: "12em",
        height: "10em"
    },
    arrow: {
        width: "15em",
        marginTop: "3em"
    },
    estimate: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.secondary.light,
        borderRadius: 50,
        height: 50,
        width: 225,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        fontSize: "1.25rem",
        marginTop: "5em",
    },
    message: {
        marginTop: "5em",
        border: `2px solid ${theme.palette.common.blue}`,
        borderRadius: 5
    },
    specialText: {
        fontFamily: "Raleway",
        fontWeight: 700,
        fontSize: "1.5rem",
        color: theme.palette.common.orange
    }
}));

const defaultQuestions = [
    {
        id: 1,
        title: "Which service are you interested in?",
        active: true,
        options: [
            {
                id: 1,
                title: "Custom Software Development",
                subtitle: null,
                icon: software,
                iconAlt: "three floating screens",
                selected: false,
                cost: 0
            },
            {
                id: 2,
                title: "iOS/Android App Development",
                subtitle: null,
                icon: mobile,
                iconAlt: "outlines of phones and tablets",
                selected: false,
                cost: 0
            },
            {
                id: 3,
                title: "Website Development",
                subtitle: null,
                icon: website,
                iconAlt: "computer outline",
                selected: false,
                cost: 0
            }
        ]
    }
];
const softwareQuestions = [
    { ...defaultQuestions[0], active: false },
    {
        id: 2,
        title: "Which platforms do you need supported?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Web Application",
                subtitle: null,
                icon: website,
                iconAlt: "computer outline",
                selected: false,
                cost: 100
            },
            {
                id: 2,
                title: "iOS Application",
                subtitle: null,
                icon: iPhone,
                iconAlt: "outline of iphone",
                selected: false,
                cost: 100
            },
            {
                id: 3,
                title: "Android Application",
                subtitle: null,
                icon: android,
                iconAlt: "outlines of android phone",
                selected: false,
                cost: 100
            }
        ],
        active: true
    },
    {
        id: 3,
        title: "Which features do you expect to use?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Photo/Video",
                subtitle: null,
                icon: camera,
                iconAlt: "camera outline",
                selected: false,
                cost: 25
            },
            {
                id: 2,
                title: "GPS",
                subtitle: null,
                icon: gps,
                iconAlt: "gps pin",
                selected: false,
                cost: 25
            },
            {
                id: 3,
                title: "File Transfer",
                subtitle: null,
                icon: upload,
                iconAlt: "outline of cloud with arrow pointing up",
                selected: false,
                cost: 25
            }
        ],
        active: false
    },
    {
        id: 4,
        title: "Which features do you expect to use?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Users/Authentication",
                subtitle: null,
                icon: usersIcon,
                iconAlt: "outline of a person with a plus sign",
                selected: false,
                cost: 25
            },
            {
                id: 2,
                title: "Biometrics",
                subtitle: null,
                icon: biometrics,
                iconAlt: "fingerprint",
                selected: false,
                cost: 25
            },
            {
                id: 3,
                title: "Push Notifications",
                subtitle: null,
                icon: bell,
                iconAlt: "outline of a bell",
                selected: false,
                cost: 25
            }
        ],
        active: false
    },
    {
        id: 5,
        title: "What type of custom features do you expect to need?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "Low Complexity",
                subtitle: "(Informational)",
                icon: info,
                iconAlt: "'i' inside a circle",
                selected: false,
                cost: 25
            },
            {
                id: 2,
                title: "Medium Complexity",
                subtitle: "(Interactive, Customizable, Realtime)",
                icon: customized,
                iconAlt: "two toggle switches",
                selected: false,
                cost: 50
            },
            {
                id: 3,
                title: "High Complexity",
                subtitle: "(Data Modeling and Computation)",
                icon: data,
                iconAlt: "outline of line graph",
                selected: false,
                cost: 100
            }
        ],
        active: false
    },
    {
        id: 6,
        title: "How many users do you expect?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "0-10",
                subtitle: null,
                icon: person,
                iconAlt: "person outline",
                selected: false,
                cost: 1
            },
            {
                id: 2,
                title: "10-100",
                subtitle: null,
                icon: persons,
                iconAlt: "outline of two people",
                selected: false,
                cost: 1.25
            },
            {
                id: 3,
                title: "100+",
                subtitle: null,
                icon: people,
                iconAlt: "outline of three people",
                selected: false,
                cost: 1.5
            }
        ],
        active: false
    }
];


const websiteQuestions = [
    { ...defaultQuestions[0], active: false },
    {
        id: 2,
        title: "Which type of website are you wanting?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "Basic",
                subtitle: "(Informational)",
                icon: info,
                iconAlt: "person outline",
                selected: false,
                cost: 100
            },
            {
                id: 2,
                title: "Interactive",
                subtitle: "(Users, API's, Messaging)",
                icon: customized,
                iconAlt: "outline of two people",
                selected: false,
                cost: 200
            },
            {
                id: 3,
                title: "E-Commerce",
                subtitle: "(Sales)",
                icon: globe,
                iconAlt: "outline of three people",
                selected: false,
                cost: 250
            }
        ],
        active: true
    }
];

const Estimate = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    const [questions, setQuestions] = useState(defaultQuestions);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [total, setTotal] = useState(0);

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');

    const [message, setMessage] = useState('');
    const [service, setService] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [features, setFeatures] = useState([]);
    const [customFeatures, setCustomFeatures] = useState("");
    const [category, setCategory] = useState("");
    const [users, setUsers] = useState("");
    const nextQuestions = () => {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.filter(x => x.active);
        const activeIndex = currentlyActive[0].id - 1;

        const nextIndex = activeIndex + 1;

        newQuestions[activeIndex] = { ...currentlyActive[0], active: false }
        newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };


        setQuestions(newQuestions)

    }

    const prevQuestions = () => {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.filter(x => x.active);
        const activeIndex = currentlyActive[0].id - 1;

        const prevIndex = activeIndex - 1;

        newQuestions[activeIndex] = { ...currentlyActive[0], active: false }
        newQuestions[prevIndex] = { ...newQuestions[prevIndex], active: true };


        setQuestions(newQuestions)

    }


    const navigationPrevDisable = () => {
        const currentlyActive = questions.filter(x => x.active);
        if (currentlyActive[0].id === 1) {
            return true;
        }
        else {
            return false;
        }
    }

    const navigationNextDisable = () => {
        const currentlyActive = questions.filter(x => x.active);
        if (currentlyActive[0].id === questions[questions.length - 1].id) {
            return true;
        }
        else {
            return false;
        }
    }


    const handleSelect = (id) => {
        const newQuestions = cloneDeep(questions);
        const activeQuestion = newQuestions.filter(x => x.active);
        const activeIndex = activeQuestion[0].id - 1;

        const selectedOption = newQuestions[activeIndex].options[id - 1];
        const previousSeleted = activeQuestion[0].options.filter(option => option.selected)

        switch (activeQuestion[0].subtitle) {
            case 'Select one.':
                if (previousSeleted[0]) {
                    previousSeleted[0].selected = !previousSeleted[0].selected
                }
                newQuestions[activeIndex].options[id - 1].selected = !selectedOption.selected;
                break;
            default:
                newQuestions[activeIndex].options[id - 1].selected = !selectedOption.selected;
                break;
        }
        const title = newQuestions[activeIndex].options[id - 1].title;
        switch (title) {
            case 'Custom Software Development':
                setQuestions(softwareQuestions);
                setService(title);
                break;
            case 'iOS/Android App Development':
                setQuestions(softwareQuestions);
                setService(title);
                break;
            case 'Website Development':
                setQuestions(websiteQuestions);
                setService(title);
                break;
            default:
                setQuestions(newQuestions)
                break;
        }

    }

    const getTotal = () => {
        let cost = 0;


        const selections = questions.map(question => question.options.filter(option => option.selected)).filter(question => question.length > 0);


        selections.map(options => options.map(option => (cost += option.cost)));

        if (questions.length > 2) {
            const userCost = questions.filter(question => question.title === "How many users do you expect?")
                .map(question => question.options.filter(option => option.selected))[0][0].cost;
            cost = (cost - userCost) * userCost;

        }

        setTotal(cost);
    }

    const getPlatForm = () => {
        let newPlatforms = [];
        if (questions.length > 2) {
            newPlatforms = questions.filter(question => question.title === "Which platforms do you need supported?").map(question => question.options.filter(option => option.selected))[0].map(Option => Option.title);
        }
        console.log('platforms', newPlatforms);
        setPlatforms(newPlatforms);
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
    const curveAnimations = {
        loop: true,
        autoplay: false,
        animationData: estimateAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Grid container direction="row">
            <Grid item container direction="column" lg>
                <Grid item style={{ marginTop: "2em", marginLeft: "5em" }}>
                    <Typography variant="h2">Estimate</Typography>
                </Grid>

                <Grid item style={{ marginRight: "10em", maxWidth: "50em", marginTop: "7.5em" }}>
                    <Lottie
                        options={curveAnimations}
                        height="100%"
                        width="100%"
                    />
                </Grid>
            </Grid>

            <Grid item container direction="column" lg alignItems="center" style={{ marginRight: "2em", marginBottom: "25em" }}>

                {questions.filter(questions => questions.active)
                    .map((question, index) => (
                        <React.Fragment key={index}>
                            <Grid item>
                                <Typography variant="h2" align="center" style={{ fontSize: "2.25em", fontWeight: "500", marginTop: "5em", lineHeight: 1 }} >{question.title}</Typography>
                                <Typography variant="body1" align="center" style={{ marginBottom: "2.5em" }} gutterBottom>{question.subtitle}</Typography>
                            </Grid>

                            <Grid item container>
                                {question.options.map((option, index) => (
                                    <Grid item container direction="column" onClick={() => handleSelect(option.id)} md component={Button} style={{ display: "grid", textTransform: "none", backgroundColor: option.selected ? theme.palette.common.orange : null, borderRadius: 0 }}>
                                        <Grid item style={{ maxWidth: "14em", textAlign: "center" }}>
                                            <Typography variant="h6" align="center" style={{ marginBottom: "1em", lineHeight: 1 }}>{option.title}</Typography>
                                            <Typography variant="caption" align="center" >{option.subtitle}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <img src={option.icon} alt={option.iconAlt} className={classes.icon} />
                                        </Grid>
                                    </Grid>

                                ))};
                            </Grid>
                        </React.Fragment>
                    ))
                }
                <Grid item container style={{ width: "18em", marginTop: "3em" }} justify="space-between">
                    <Grid item>
                        <IconButton disabled={navigationPrevDisable()} onClick={prevQuestions}>
                            <img src={navigationPrevDisable() ? backArrowDisabled : backArrow} alt="previous questions" />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton disabled={navigationNextDisable()} onClick={nextQuestions}>
                            <img src={navigationNextDisable() ? forwardArrowDisabled : forwardArrow} alt="next questions" />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button variant="contained" className={classes.estimate} onClick={() => { setDialogOpen(true); getTotal(); getPlatForm() }}>Get Estimate</Button>
                </Grid>

            </Grid>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <Grid container justify="center">
                    <Grid item>
                        <Typography variant="h2" align="center">Estimate</Typography>
                    </Grid>
                </Grid>
                <DialogContent>
                    <Grid container>
                        <Grid item container direction="column" md={7}>
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

                            <Grid item>
                                <Typography variant="body1" paragraph>
                                    We can create this digital solution for an estimated <span className={classes.specialText}>${total.toFixed(2)}</span>
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Fill out your name, number, and email, place your request, and we’ll get back to you with details moving forward and a final price.
                            </Typography>
                            </Grid>
                        </Grid>

                        <Grid item container direction="column" md={5}>
                            <Grid item>
                                <Grid container direction="column" >
                                    <Grid item container alignItems="center">
                                        <Grid item>
                                            <img src={check} alt="checkmark" />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body1">
                                                You want {service} {platforms.length > 0 ? ` for ${
                                                    //if only web application is selected...
                                                    platforms.indexOf("Web Application") > -1 &&
                                                        platforms.length === 1
                                                        ? //then finish sentence here
                                                        "a Web Application."
                                                        : //otherwise, if web application and another platform is selected...
                                                        platforms.indexOf("Web Application") > -1 &&
                                                            platforms.length === 2
                                                            ? //then finish the sentence here
                                                            `a Web Application and an ${platforms[1]}.`
                                                            : //otherwise, if only one platform is selected which isn't web application...
                                                            platforms.length === 1
                                                                ? //then finish the sentence here
                                                                `an ${platforms[0]}`
                                                                : //otherwise, if other two options are selected...
                                                                platforms.length === 2
                                                                    ? //then finish the sentence here
                                                                    "an iOS Application and an Android Application."
                                                                    : //otherwise if all three are selected...
                                                                    platforms.length === 3
                                                                        ? //then finish the sentence here
                                                                        "a Web Application, an iOS Application, and an Android Application."
                                                                        : null
                                                    }` : null}
                                            </Typography>

                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" className={classes.estimate}>
                                    Place request
                                    <img src={send} style={{ marginLeft: "0.5em" }} alt="paper aeroplane" />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </Grid>

    )
};

export default Estimate;



