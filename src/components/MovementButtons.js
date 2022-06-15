import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    movementButtons: {
        fontFamily: 'PT Sans Caption',
        marginTop: '30px',
        borderRadius: '10px',
        background: '#C4C4C4',
        boxShadow: '0px 2px 2px #A9A9A9',
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
    },
    noMovementsMessage: {
        marginTop: '130px',
        fontFamily: 'PT Sans Caption',
        fontSize: '20px',
        textTransform: 'uppercase',
    },
}));

const MovementButtons = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const {
        move
    } = props;
    console.log(move, "homepage props")

    const mapMoves = move.map((movement) => {
        return (
            <Button
                key={movement.movementName}
                className={classes.movementButtons} 
                onClick={() => navigate(`/movement/${movement.movementName}/${movement.movementWeight}`, 
                {state: {movementName: movement.movementName, movementWeight: movement.movementWeight}})}
            >
            {movement.movementName} - {movement.movementWeight}
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