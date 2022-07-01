import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router';

const useStyles = makeStyles((theme) => ({
    updateButton: {
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

const UpdateButton = (props) => {
    const {
        movement
    } = props;
    console.log(movement, "movement in UpdateButton");
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state, "updatebutton location");

    return (
        <Button 
            className={classes.updateButton}
            onClick={() => navigate(`/update/${location.state.movementName}`, {state: {movement}})}
        >
        Update
        </Button> 
    )
};

export default UpdateButton;