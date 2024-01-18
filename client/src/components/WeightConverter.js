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

const WeightConverter = (props) => {
    const {
        movements
    } = props;
    const classes = useStyles();
    const convert = () => {
        const kg = movements.map((movement) => {
            return movement.movementWeight * 0.453592
        })
        return kg;
    }
    
    return (
        <div className={classes.fabDiv} >
            <Fab 
                className={classes.fab}
                onClick={() => console.log(convert())}>  
                convert
            </Fab>
        </div>   
    )
};

export default WeightConverter;