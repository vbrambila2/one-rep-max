import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChangeButton from './ChangeButton';

const useStyles = makeStyles((theme) => ({
    oneRepMaxWeight: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.625rem',
        fontFamily: 'PT Sans Caption',
        fontSize: '1.125rem',
        marginTop: '7rem'
    },
    oneRepMaxWeightNumber: {
        padding: '0.313rem',
    },
    oneRepMaxChart: {
        background: '#FFFFFF',
        borderRadius: '0.625rem',
        borderCollapse: 'separate',
        borderSpacing: '0.625rem',
        display: 'flex',
        flexDirection: 'column',
    },
    chartHeader: {
        padding: '0.5rem',
        fontSize: '1.5rem', 
        display: 'flex',
        justifyContent: 'space-around',
        fontFamily: 'PT Sans Caption',
        color: '#000000',
        textTransform: 'uppercase',
    },
    chartBox: {
        background: '#FFFFFF',
        border: '0.1rem solid #000000',
        color: '#000000',
        padding: '0.5rem',
        fontSize: '1.5rem',
        display: 'flex',
        justifyContent: 'space-around',
        fontFamily: 'PT Sans Caption',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
        oneRepMaxWeight: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.6rem',
            fontFamily: 'PT Sans Caption',
            fontSize: '1.2rem',
            marginTop: '5.5rem'
        },
        oneRepMaxWeightNumber: {
            padding: '0.5rem',
        },
    },
}));

const PercentChart = (props) => {
    const {
        movement
    } = props;
    const classes = useStyles();
    const [results, setResults] = useState([]);

    useEffect(() => {
        const arr = [];
        let percentage = 100;
        while (percentage > 50 ) {
            arr.push([percentage, (movement.movementWeight * percentage) / 100]);
            percentage -= 5;
        }
        setResults(arr);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const displayMax = () => {
        if (!movement.movementWeight) {    
            return <div>No 1RM recorded</div> 
        };

        return <div>{movement.movementWeight}</div>
    };

    return (
        <div>
            <div className={classes.oneRepMaxWeight}>One Rep Max:
                <div className={classes.oneRepMaxWeightNumber}>{displayMax()}</div>
            </div> 
            <div className={classes.buttons}>
                <ChangeButton movement={movement} buttonName="Update" urlName="update" />
                <ChangeButton movement={movement} buttonName="Delete" urlName="delete" />
            </div>
            <div className={classes.oneRepMaxChart}>
                <h1 className={classes.chartHeader} >Percent<div>Weight</div></h1>
                <div>
                    {results.map((result) => (
                        <div key={result[0]} className={classes.chartBox} >{result[0]}% <div>{result[1]}</div></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default (PercentChart);