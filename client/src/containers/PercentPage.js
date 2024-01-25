import React from 'react';
import Header from '../components/Header';
import PercentChart from '../components/PercentChart';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    movementFound: {
        marginTop: '5rem',
        fontSize: '1.5rem',
        fontFamily: 'PT Sans Caption',
        display: 'flex',
        justifyContent: 'center',
    }
}));

const PercentPage = () => {
    const classes = useStyles();
    const location = useLocation();

    const movementFound = () => {
        if (location.state === null) {
            return (
                <div className={classes.movementFound} >
                    Movement not found. Click Home button to return to Home Page.
                </div>
            )   
        } else {
            return <PercentChart movement={location.state} />
        }
    };

    return (
        <div>
            <Header title={location.state.movementName} />
            {movementFound()}
        </div>
    );
};

 export default PercentPage;