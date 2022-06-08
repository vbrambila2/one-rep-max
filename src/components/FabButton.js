import history from '../history';
import Fab from '@material-ui/core/Fab';
//mport AddIcon from '@material-ui/icons/Add';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    fabDiv: {
        position: 'absolute',
        bottom: theme.spacing(1),
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

const FabButton = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.fabDiv} >
             <Fab 
                className={classes.fab}
                onClick={() => history.push(`/add`)}>  
                <AddIcon />      
            </Fab>
        </div>   
    )
};

export default FabButton;
