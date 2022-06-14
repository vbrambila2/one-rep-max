import React from 'react';
import Header from '../components/Header';
import PercentChart from '../components/PercentChart';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

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

    const movementFound = () => {
        if (location.state.movementName === undefined) {
            return (
                <div className={classes.movementFound} >
                    Movement not found. Click Home button to return to Home Page.
                </div>
            )
        }
        
        return <PercentChart move={location.state} />
    };

    return (
        <div>
            <Header title={location.state.movementName} />
            {movementFound()}
        </div>
    );
};

 export default (PercentPage);