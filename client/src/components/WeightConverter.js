import { makeStyles } from '@material-ui/core/styles';
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
    fabDiv: {
        position: 'absolute',
        top: theme.spacing(15),
        right: theme.spacing(2),
        padding: '0.2rem',
        textShadow: '0.06rem 0.06rem #000000',
        fontFamily: 'PT Sans Caption',
        boxShadow: '0px 2px 2px #006bb3',
        borderRadius: '0.6rem',
        background: '#00BFFF',
        color: '#F8F8F8',
        display: 'flex',
    },
    optionDiv: {
        display: 'flex',
        alignItems: 'center'
    },
    [theme.breakpoints.down('sm')]: {
        fabDiv: {
            transform: 'rotate(90deg)',
            top: theme.spacing(18.2),
            right: theme.spacing(-3),
        },
        optionDiv: {
            transform: 'rotate(-90deg)',
        },
    }
}));

const theme = createTheme({
    components: {
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            // Controls default (unchecked) color for the thumb
            color: "#F8F8F8"
          },
          colorPrimary: {
            "&.Mui-checked": {
              // Controls checked color for the thumb
              color: "#F8F8F8"
            }
          },
          track: {
            // Controls default (unchecked) color for the track
            opacity: 0.6,
            backgroundColor: "#F8F8F8",
            ".Mui-checked.Mui-checked + &": {
              // Controls checked color for the track
              opacity: 0.6,
              backgroundColor: "#F8F8F8"
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
            <div className={classes.optionDiv}>lb</div>
            <Switch 
                checked={checked}
                onChange={onChange}
                className={classes.switchStyle}
                >  
            </Switch>
            <div className={classes.optionDiv}>kg</div>
            </div> 
        </ThemeProvider>   
    )
};

export default WeightConverter;