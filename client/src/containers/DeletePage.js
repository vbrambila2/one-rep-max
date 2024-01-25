import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import { deleteMovement } from '../actions/index';
import { useLocation } from 'react-router';
import { Button } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles((theme) => ({
    deletePage: {
        marginTop: '6.25rem',
        display: 'flex',
        justifyContent: 'center',
    },
    deleteMovementDiv: {
        padding: '1.25rem',
        marginTop: '3.125rem',
        width: '18.75rem'
    },
    textDiv: {
        background: '#ffffff',
        padding: '0.5rem',
        border: 'solid ',
        borderRadius: '0.625rem',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'PT Sans Caption',
    },
    buttonDiv: {
        paddingTop: '1.25rem',
    },
    deleteButton: {
        background: '#33ccff',
        boxShadow: '0.125rem 0.125rem 0.063rem #006bb3',
        color: '#F8F8F8',
        textShadow: '0.063rem 0.063rem #000000',
        '&:hover': {
            backgroundColor: '#00ace6',
        },
    }
}));

const DeletePage = () => {
    const classes = useStyles();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const moveId = location.state.id;
    const moveName = location.state.movementName;

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(deleteMovement(moveId));
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
                                className={classes.deleteButton} 
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

export default DeletePage;