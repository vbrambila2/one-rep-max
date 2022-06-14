import React from 'react';
import Header from '../components/Header';
import PercentChart from '../components/PercentChart';
import { useLocation } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    notFound: {
        marginTop: '130px',
        fontSize: '24px',
        fontFamily: 'PT Sans Caption',
        display: 'flex',
        justifyContent: 'center',
    },
}));

const PercentPage = (props) => {
    const classes = useStyles();
    const {
        move
    } = props;
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const movementNameURL = (pathArray[2]);
    const notFound = () => {
        if (movementNameURL === undefined) {
            return (
                <div className={classes.notFound} >
                    Movement not found. Click Home button to return to Home Page.
                </div>
            )
        }
        
        return <PercentChart move={move} />
    };

    return (
        <div>
            <Header title={movementNameURL} />
            {notFound()}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        move: state.moveReducer,
    }
};

 export default connect(mapStateToProps)(PercentPage);