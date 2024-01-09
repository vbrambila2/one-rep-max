import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";

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

const WeightConverter = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    
    return (
        <div className={classes.fabDiv} >
            <Fab 
                className={classes.fab}
                onClick={() => navigate(`/add`)}>  
                convert
            </Fab>
        </div>   
    )
};

export default WeightConverter;