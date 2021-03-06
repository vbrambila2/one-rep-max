import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import { deleteMovement } from '../actions/index';
import { connect } from 'react-redux';
import { useLocation } from 'react-router';
import { Button } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles((theme) => ({
    deletePage: {
        marginTop: '100px',
        display: 'flex',
        justifyContent: 'center',
    },
    deleteMovementDiv: {
        background: '#0080ff',
        fontSize: '18px',
        borderRadius: '10px',
        padding: '20px',
        marginTop: '50px',
        width: '300px'
    },
    textDiv: {
        background: '#ffffff',
        padding: '8px',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'PT Sans Caption',
    },
    buttonDiv: {
        paddingTop: '20px',
    },
    updateButton: {
        background: '#33ccff',
        boxShadow: '2px 2px 1px #006bb3',
        color: '#F8F8F8',
        textShadow: '1px 1px #000000',
        '&:hover': {
            backgroundColor: '#00ace6',
        },
    },
    [theme.breakpoints.down('sm')]: {
        textFieldDiv: {
            display: 'flex', 
        }
    }
}));

const NameLocationFunction = () => {
    const location = useLocation();
    const pathArray = location.pathname.split('/');
    const movementNameURL = (pathArray[3]);
    return movementNameURL
};

const renderInputName = ({ input, label }) => {
    return (
        <div>
            <label>{label}:   </label>  
            <input {...input} readOnly autoFocus={true} type="text" value={NameLocationFunction()} /> 
        </div>    
    )  
};

const DeletePage = (props) => {
    const classes = useStyles();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const moveName = location.state.movement.movementName;


 
 
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(deleteMovement(moveName));
        navigate("/");
    };

    return (
        <div>
            <Header title="Delete Movement" />
            <div className={classes.deletePage} >
                <div className={classes.deleteMovementDiv} >
                    <form onSubmit={handleSubmit}>
                        <div className={classes.textDiv}>{moveName}</div>
                        <div className={classes.buttonDiv}>
                            <Button 
                                className={classes.updateButton} 
                                variant="contained" 
                                type="submit" 
                                endIcon={<DeleteIcon />}
                                fullWidth 
                                >
                                Delete
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        deleteMovement: () => {
            dispatch(deleteMovement())
        }
    }
}

export default connect(mapDispatchToProps)(DeletePage);