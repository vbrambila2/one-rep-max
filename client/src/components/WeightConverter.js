import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
import Switch, { SwitchProps } from '@mui/material/Switch';

const useStyles = makeStyles((theme) => ({
    fabDiv: {
        position: 'absolute',
        top: theme.spacing(15),
        right: theme.spacing(2),
      },
    fab: {
        background: '#00BFFF',
        color: '#F8F8F8',
        '&:hover': {
            backgroundColor: '#00ace6',
        },
    },
}));

const WeightConverter = (props) => {
    const {
        onClick
    } = props;
    const classes = useStyles();
    
    return (
        <div className={classes.fabDiv} >
            lb
            <Switch 
                className={classes.Switch}
                onClick={onClick}
                >  
            </Switch>
            kg
        </div>   
    )
};

export default WeightConverter;