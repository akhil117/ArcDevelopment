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
        }
    }
});