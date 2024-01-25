import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    movementButtons: {
        background: '#00BFFF',
        color: '#F8F8F8',
        textShadow: '0.063rem 0.063rem #000000',
        fontFamily: 'PT Sans Caption',
        marginTop: '2rem',
        borderRadius: '0.625rem',
        boxShadow: '0rem 0.125rem 0.125rem #006bb3',
        width: '25rem',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
            backgroundColor: '#0099cc',
        },
    },
    noMovementsMessage: {
        marginTop: '8.125rem',
        fontFamily: 'PT Sans Caption',
        fontSize: '1.25rem',
        textTransform: 'uppercase',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
        movementButtons: {
            width: '15.625rem', 
        }
    }
}));

const MovementButtons = (props) => {
    const {
        movements,
        conversion
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
            {movement.movementName} - {movement.movementWeight} {conversion}
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