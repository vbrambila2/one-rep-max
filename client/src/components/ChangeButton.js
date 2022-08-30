import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router';

const useStyles = makeStyles((theme) => ({
    changeButton: {
        borderRadius: '10px',
        width: '10%',
        textAlign: 'center',
        marginLeft: '5px',
        marginRight: '5px',
        background: '#00BFFF',
        color: '#F8F8F8',
        boxShadow: '0px 1px 1px #006bb3',
        textShadow: '1px 1px #000000',
        '&:hover': {
            backgroundColor: '#0099cc',
        },
    },
}));

const ChangeButton = (props) => {
    const {
        movement,
        buttonName,
        urlName
    } = props;
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Button 
            className={classes.changeButton}
            onClick={() => navigate(`/${urlName}/${location.state.movementName}`, {state: {id: movement.id, movementName: movement.movementName, movementWeight: movement.movementWeight}})}
        >
        {buttonName}
        </Button> 
    )
};

export default ChangeButton;