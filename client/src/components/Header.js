import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FitnessCenter from '@mui/icons-material/FitnessCenter';

const useStyles = makeStyles((theme) => ({
    homeHeader: {
        background: '#00BFFF',
        textAlign: 'center',
        boxShadow: '0rem 0.063rem 0.063rem #006bb3',
        color: '#F8F8F8',
        textShadow: '0.063rem 0.063rem #000000',
        fontFamily: 'PT Sans Caption',
        fontWeight: 'bold',
        fontSize: '2.25rem',
        marginBottom: '1.25rem',
        paddingTop: '0.938rem',
        paddingBottom: '0.625rem',
        textTransform: 'uppercase',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 9999
    },
    homeHeaderCaption: {
        fontSize: '0.938rem'
    },
    homeIcon: {
        marginLeft: '0.625rem',
        marginRight: '0.625rem'
    },
    addHeader: {
        background: '#00BFFF',
        textAlign: 'center',
        boxShadow: '0rem 0.063rem 0.063rem #006bb3',
        color: '#F8F8F8',
        textShadow: '0.063rem 0.063rem #000000',
        fontFamily: 'PT Sans Caption',
        fontSize: '2.25rem',
        marginBottom: '1.25rem',
        paddingTop: '0.938rem',
        paddingBottom: '0.625rem',
        textTransform: 'uppercase',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        zIndex: 9999
    },
    header: {
        background: '#00BFFF',
        textAlign: 'center',
        boxShadow: '0rem 0.063rem 0.063rem #006bb3',
        color: '#F8F8F8',
        textShadow: '0.063rem 0.063rem #000000',
        fontFamily: 'PT Sans Caption',
        fontSize: '2.25rem',
        marginBottom: '1.25rem',
        paddingTop: '0.938rem',
        paddingBottom: '0.625rem',
        textTransform: 'uppercase',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        zIndex: 9999
    },
    homeButton: {
        background: '#ffffff',
        boxShadow: '0.125rem 0.125rem 0.063rem #006bb3',
        color: '#000000',
        fontFamily: 'PT Sans Caption',
        fontSize: '1.25rem',
        marginLeft: '1.875rem',
        marginBottom: '0.625rem',
        marginTop: '0.313rem',
        borderRadius: '0.625rem',
        width: '6.25rem',
        '&:hover': {
            backgroundColor: '#00ace6',
        },
    },
    fakeText: {
        visibility: 'hidden',
    },
    [theme.breakpoints.down('sm')]: {
        homeButton: {
            background: '#ffffff',
            boxShadow: '0.125rem 0.125rem 0.063rem #006bb3',
            color: '#000000',
            fontFamily: 'PT Sans Caption',
            fontSize: '0.625rem',
            marginLeft: '0.625rem',
            marginBottom: '0.625rem',
            marginTop: '0.313rem',
            borderRadius: '0.625rem',
            width: '3.688rem',
            '&:hover': {
                backgroundColor: '#00ace6',
            },
        },
        addHeader: {
            background: '#00BFFF',
            textAlign: 'center',
            boxShadow: '0rem 0.063rem 0.063rem #006bb3',
            color: '#F8F8F8',
            textShadow: '0.063rem 0.063rem #000000',
            fontFamily: 'PT Sans Caption',
            fontSize: '2.25rem',
            marginBottom: '1.25rem',
            paddingTop: '0.938rem',
            paddingBottom: '0.625rem',
            textTransform: 'uppercase',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            zIndex: 9999
        },
        header: {
            background: '#00BFFF',
            boxShadow: '0rem 0.063rem 0.063rem #006bb3',
            color: '#F8F8F8',
            textShadow: '0.063rem 0.063rem #000000',
            fontFamily: 'PT Sans Caption',
            fontSize: '1.75rem',
            paddingTop: '0.938rem',
            paddingBottom: '0.625rem',
            textTransform: 'uppercase',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            zIndex: 9999
        },
    }
}));

const Header = (props) => {
    const classes = useStyles();
    const [ title ] = useState(props.title);
    const [ titleCaption ] = useState(props.titleCaption);
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const url = (pathArray[1]);
    const navigate = useNavigate();

    if (url === '') {
        return (
            <div className={classes.homeHeader}>
                <div>
                    <FitnessCenter className={classes.homeIcon} />
                    {title}
                    <FitnessCenter className={classes.homeIcon} />
                </div>
                <div className={classes.homeHeaderCaption}>{titleCaption}</div>
             </div>
        )
    } else if (title === 'Delete Movement' || title === 'Update Movement') {
        return (
            <div className={classes.header}>
                <div>
                    <Button
                        className={classes.homeButton}
                        variant="contained"
                        onClick={() => navigate("/")}>   
                        Home
                    </Button>
                    <Button 
                        className={classes.homeButton}
                        variant="contained" 
                        onClick={() => navigate(-1) } >
                        Back
                    </Button>
                </div>
                {title}
                <div className={classes.fakeText}>----------------</div>
            </div>
        )
    } else if (title === 'Add Movement') {
        return (
            <div className={classes.addHeader}>
                <Button
                    variant="contained"
                    className={classes.homeButton}
                    onClick={() => navigate("/")}>   
                    Home
                </Button>
                {title}
                <div className={classes.fakeText}>-------</div>
            </div>
        )
    } else {
        return (
            <div className={classes.header}>
                <Button
                    variant="contained"
                    className={classes.homeButton}
                    onClick={() => navigate("/")}>   
                    Home
                </Button>
                {title}
                <div className={classes.fakeText}>-------</div>
            </div>
        )
    } 
};

export default Header;