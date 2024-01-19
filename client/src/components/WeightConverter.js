import { makeStyles } from '@material-ui/core/styles';
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
    fabDiv: {
        position: 'absolute',
        top: theme.spacing(15),
        right: theme.spacing(2),
      },
    [theme.breakpoints.down('sm')]: {
        switch: {
            size:"small",
            }
        }
    }
));

const theme = createTheme({
    components: {
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            // Controls default (unchecked) color for the thumb
            color: "#00BFFF"
          },
          colorPrimary: {
            "&.Mui-checked": {
              // Controls checked color for the thumb
              color: "#00BFFF"
            }
          },
          track: {
            // Controls default (unchecked) color for the track
            opacity: 0.5,
            backgroundColor: "#00BFFF",
            ".Mui-checked.Mui-checked + &": {
              // Controls checked color for the track
              opacity: 0.5,
              backgroundColor: "#00BFFF"
            }
          }
        }
      }
    }
  });




const WeightConverter = (props) => {
    const {
        onChange,
        checked
    } = props;
    const classes = useStyles();
    
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.fabDiv} >
            lb
            <Switch 
                checked={checked}
                onChange={onChange}
                >  
            </Switch>
            kg
        </div> 
        </ThemeProvider>   
    )
};

export default WeightConverter;