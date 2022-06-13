import React from "react";
import { connect } from "react-redux";
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

const MovementList = (props) => {
    const classes = useStyles();
    const {
        move
    } = props;

    const mapMoves = move.map((movement) => {
        return (
            <Button
                key={movement.movementName}
                className={classes.movementButtons} 
            >
            {movement.movementName} - {movement.movementWeight}
            </Button>
        )
    })

    return (
        <div>{mapMoves}</div>
    )
};

const mapStateToProps = state => {
    return {
      move: state.moveReducer
    }
  };
  
const mapDispatchToProps = dispatch => {
    return {
    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovementList);
