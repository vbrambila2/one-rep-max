import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    movementButtons: {
        background: '#00BFFF',
        color: '#F8F8F8',
        textShadow: '1px 1px #000000',
        fontFamily: 'PT Sans Caption',
        marginTop: '30px',
        borderRadius: '10px',
        boxShadow: '0px 2px 2px #006bb3',
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
            backgroundColor: '#0099cc',
        },
    },
    noMovementsMessage: {
        marginTop: '130px',
        fontFamily: 'PT Sans Caption',
        fontSize: '20px',
        textTransform: 'uppercase',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
        movementButtons: {
            width: '250px', 
        }
    }
}));

const MovementButtons = (props) => {
    const {
        movements
    } = props;
    const classes = useStyles();
    const navigate = useNavigate();

    const mapMoves = movements.map((movement) => {
        return (
            <Button
                key={movement._id}
                className={classes.movementButtons} 
                onClick={() => navigate(`/movement/${movement.movementName}/${movement.movementWeight}`, 
                {state: {id: movement._id, movementName: movement.movementName, movementWeight: movement.movementWeight}})}
            >
            {movement.movementName} - {movement.movementWeight} lb
            </Button>
        )
    })
    
    const displayMovementButtons = () => {
        if (mapMoves.length === 0) {    
            return <div className={classes.noMovementsMessage} >Click add button to begin</div> 
        };

        return (
            <div>{mapMoves}</div>
        )
    }

    return <div>{displayMovementButtons()}</div>
};

export default (MovementButtons);