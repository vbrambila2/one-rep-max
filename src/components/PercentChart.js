import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import UpdateButton from './UpdateButton';
// import DeleteButton from './DeleteButton';

const useStyles = makeStyles((theme) => ({
    oneRepMaxWeight: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        fontFamily: 'PT Sans Caption',
        fontSize: '18px',
        marginTop: '100px'
    },
    oneRepMaxWeightNumber: {
        padding: '5px',
    },
    oneRepMaxChart: {
        background: '#FFFFFF',
        borderRadius: '10px',
        borderCollapse: 'separate',
        borderSpacing: '10px',
        display: 'flex',
        flexDirection: 'column',
    },
    chartHeader: {
        padding: '5px',
        fontSize: '24px', 
        display: 'flex',
        justifyContent: 'space-around',
        fontFamily: 'PT Sans Caption',
        color: '#000000',
        textTransform: 'uppercase',
    },
    chartBox: {
        background: '#FFFFFF',
        border: '1px solid #000000',
        color: '#000000',
        padding: '5px',
        fontSize: '24px',
        display: 'flex',
        justifyContent: 'space-around',
        fontFamily: 'PT Sans Caption',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '20px',
    },
    [theme.breakpoints.down('sm')]: {
        oneRepMaxWeight: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px',
            fontFamily: 'PT Sans Caption',
            fontSize: '18px',
            marginTop: '120px'
        },
        oneRepMaxWeightNumber: {
            padding: '5px',
        },
    },
}));

const PercentChart = (props) => {
    const classes = useStyles();
    // const [results, setResults] = useState([]);
    const {
        move
    } = props;
    console.log(move, "move")
    //const selected = props.move.find((e) => e.movementName === movementNameURL);
    useEffect(() => {
        const arr = [];
        let percentage = 100;
        while (percentage > 50 ) {
            //arr.push([percentage, (selected.movementWeight * percentage) / 100]);
            percentage -= 5;
        }
        // setResults(arr);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const displayWeight = () => {
        if (move.movementWeight.length === 0) {    
            return <div>No 1RM recorded</div> 
        };

        return <div>{move.movementWeight}</div>
    };
console.log(move.movementName, "name")
    return (
        <div>
            <div className={classes.oneRepMaxWeight}>One Rep Max:
                <div className={classes.oneRepMaxWeightNumber}>{displayWeight()}</div>
            </div> 
            <div className={classes.buttons}>
                {/* <UpdateButton />
                <DeleteButton /> */}
            </div>
            <div className={classes.oneRepMaxChart}>
                <h1 className={classes.chartHeader} >Percent<div>Weight</div></h1>
                <div>
                    {/* {results.map((result) => (
                        <div key={result[0]} className={classes.chartBox} >{result[0]}% <div>{result[1]}</div></div>
                    ))} */}
                </div>
            </div>
        </div>
    );
};

export default (PercentChart);