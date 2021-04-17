import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60"

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
        estimate:{
            fontFamily: "Pacifico",
            textTransform: 'none',
            fontSize: "1rem",
        }
    }
});