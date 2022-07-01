import React from 'react';
import Header from '../components/Header';
import PercentChart from '../components/PercentChart';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    movementFound: {
        marginTop: '130px',
        fontSize: '24px',
        fontFamily: 'PT Sans Caption',
        display: 'flex',
        justifyContent: 'center',
    },
}));

const PercentPage = (props) => {
    const classes = useStyles();
    const location = useLocation();
    const {
        move
    } = props;

    const headerTitle = () => {
        if (location.state === null) {
            return move.movementName
        } else {
            return location.state.movementName
        }
    }

    const switchBaby = () => {
        if (location.state === null) {
            return move
        } else {
            return location.state
        }
    }

    const movementFound = () => {
        if (location.state === null && move === null) {
            return (
                <div className={classes.movementFound} >
                    Movement not found. Click Home button to return to Home Page.
                </div>
            )   
        } else if (location.state === null) {
            return <PercentChart movement={switchBaby()} />
        } else {
            return <PercentChart movement={switchBaby()} />
        }
    };

    return (
        <div>
            <Header title={headerTitle} />
            {movementFound()}
        </div>
    );
};

const mapStateToProps = state => {
    return {
      move: state.moveReducer
    }
};

 export default connect(mapStateToProps)(PercentPage);