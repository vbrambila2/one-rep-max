import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
import Switch, { SwitchProps } from '@mui/material/Switch';
import { withStyles } from '@material-ui/core';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
    // components: {
    //     MuiSwitch: {
    //         styleOverrides: {
    //           switchBase: {
    //             //thumb - unchecked
    //             color: "orange"
    //           },
    //           colorPrimary: {
    //             "&.Mui-checked": {
    //               // thumb - checked
    //               color: "red"
    //             }
    //           },
    //           track: {
    //             // track - unchecked
    //             opacity: 0.2,
    //             backgroundColor: "blue",
    //             ".Mui-checked.Mui-checked + &": {
    //               // track - checked
    //               opacity: 0.9,
    //               backgroundColor: "pink"
    //             }
    //           }}
    // }
    // ,
    // toggle: {
    //    '& .Mui-unchecked': {
    //     backgroundColor:'#00BFFF',
    //   },
    //   '& .MuiSwitch-track': {
    //       backgroundColor:'#00BFFF'
    //   }
//   },
    fabDiv: {
        position: 'absolute',
        top: theme.spacing(15),
        right: theme.spacing(2),
      },
    switch: {
        //background: '#00BFFF',
        color: '#00BFFF',
        colorSecondary: '#00BFFF',
        '&$checked': {
            color: '#FFFFFF'
        }
        
    },
    [theme.breakpoints.down('sm')]: {
        switch: {
            size:"small",
            '&$checked': {
                color: '#FFFFFF'
            }
        }
    }
}));

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
                //size="small"
                checked={checked}
                //className={classes.MuiSwitch}
                onChange={onChange}
                >  
            </Switch>
            kg
        </div> 
        </ThemeProvider>
          
    )
};

export default WeightConverter;