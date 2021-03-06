import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

export default createMuiTheme({
    palette: {
        common: {
            orange: `${arcOrange}`,
            blue: `${arcBlue}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "1rem",
            textTransform: "none"
        },
        estimate: {
            fontFamily: "Pacifico",
            textTransform: 'none',
            fontSize: "1rem",
        },
        learnButton: {
            borderRadius: "50px",
            borderWidth: 2,
            fontFamily: "Roboto",
            color: `${arcBlue}`,
            textTransform: "none",
            fontWeight: "bold",
            borderColor: `${arcBlue}`,
        },
        h2: {
            fontFamily: "Raleway",
            fontSize: "2.5rem",
            color: `${arcBlue}`,
            fontWeight: 700,
            lineHeight: "1.25"
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            color: `${arcBlue}`,
        },
        h4: {
            fontFamily: "Raleway",
            fontSize: "1.75rem",
            color: `${arcBlue}`,
            fontWeight: 700,
            lineHeight: "1.235"
        },
        subtitle1: {
            color: `${arcGrey}`,
            fontSize: "1.15rem",
            lineHeight: "1.25rem",
            fontWeight: 300
        },
        subtitle2: {
            color: "white",
            fontSize: "1.15rem",
            fontWeight: 300
        },
        body1: {
            fontSize: "1.25rem",
            color: `${arcGrey}`,
            fontWeight: 300
        },
        caption: {
            fontSize: "1rem",
            color: `${arcGrey}`,
            fontWeight: 300
        },
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: `${arcBlue}`,
                fontSize: "1rem",
            }
        },
        MuiInput: {
            root: {
                color: `${arcGrey}`,
                fontWeight:"300"
            },
             underline: {
                 "&:before":{
                    borderBottom: `2px solid ${arcBlue}`,
                 },
                 "&:hover:not($disabled):not($focused):not($error):before":{
                    borderBottom: `2px solid ${arcBlue}`,
                 }
            }
        }
    }
});