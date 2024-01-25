import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    changeButton: {
        borderRadius: '0.625rem',
        width: '10%',
        textAlign: 'center',
        marginLeft: '0.313rem',
        marginRight: '0.313rem',
        background: '#00BFFF',
        color: '#F8F8F8',
        boxShadow: '0rem 0.063rem 0.063rem #006bb3',
        textShadow: '0.063rem 0.063rem #000000',
        '&:hover': {
            backgroundColor: '#0099cc',
        },
    },
    [theme.breakpoints.between('xs', 'sm')]: {
        changeButton: {
            width: '40%', 
        }
    }
}));

const ChangeButton = (props) => {
    const {
        movement,
        buttonName,
        urlName
    } = props;
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <Button 
            className={classes.changeButton}
            onClick={() => navigate(`/${urlName}/${movement.movementName}`, {state: {id: movement.id, movementName: movement.movementName, movementWeight: movement.movementWeight}})}
        >
        {buttonName}
        </Button> 
    )
};

export default ChangeButton;