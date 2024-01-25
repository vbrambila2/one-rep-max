import React, { useState } from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { updateMovement } from '../actions';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import LoopIcon from '@mui/icons-material/Loop';

const useStyles = makeStyles((theme) => ({
    updatePage: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '6.25rem'
    },
    updateMovementDiv: {
        padding: '1.25rem',
        marginTop: '3.125rem',
    },
    textDiv: {
        background: '#ffffff',
        padding: '0.5rem',
        borderRadius: '0.625rem',
    },
    textFieldDiv: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000000"
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0080ff"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0080ff"
          },
          "& .MuiOutlinedInput-input": {
            color: "black"
          },
          "&:hover .MuiOutlinedInput-input": {
            color: "black"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "black"
          },
          "& .MuiInputLabel-outlined": {
            color: "grey"
          },
          "&:hover .MuiInputLabel-outlined": {
            color: "#0080ff"
          },
          "& .MuiInputLabel-outlined.Mui-focused": {
            color: "#0080ff"
          }
    },
    buttonDiv: {
        paddingTop: '1.25rem',
    },
    updateButton: {
        background: '#33ccff',
        boxShadow: '0.125rem 0.125rem 0.063rem #006bb3',
        color: '#F8F8F8',
        textShadow: '0.063rem 0.063rem #000000',
        '&:hover': {
            backgroundColor: '#00ace6',
        },
    },
    [theme.breakpoints.down('sm')]: {
        textFieldDiv: {
            display: 'flex', 
            padding: '0.5rem'
        }
    }
}));

const UpdatePage = () => {
    const classes = useStyles();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const [moveData, setMoveData] = useState({ movementName:'', movementWeight: '' });
    const moveName = location.state.movementName;
    
    const onChangeWeight = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
           setMoveData({ id: location.state.id, movementName: moveName, movementWeight: e.target.value })
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (moveData.movementWeight === '') {
            alert('Please update the weight');
        } else {
            dispatch(updateMovement(moveData.id, moveData));
            navigate(`/movement/${moveName}/${moveData.movementWeight}`, { state: { id: location.state.id, movementName: moveName, movementWeight: moveData.movementWeight } });
        }
    };

    return (
        <div>
            <Header title="Update Movement" />
            <div className={classes.updatePage}>
                <div className={classes.updateMovementDiv}>
                    <form onSubmit={handleSubmit} >
                        <div className={classes.textDiv}>
                            <TextField 
                                className={classes.textFieldDiv}
                                name="movementName"
                                variant="outlined"
                                label="Movement Name" 
                                style={{ width:200 }}
                                value={moveName}
                            />
                            <TextField
                                className={classes.textFieldDiv}
                                name="movementWeight" 
                                variant="outlined"
                                label="New One Rep Max" 
                                style={{ width:200 }}
                                InputProps={{endAdornment: <InputAdornment position="end">lb</InputAdornment>}}
                                onChange={onChangeWeight}
                            />
                        </div>
                        <div className={classes.buttonDiv}>
                            <Button 
                                className={classes.updateButton} 
                                variant="contained" 
                                type="submit" 
                                endIcon={<LoopIcon />} 
                                fullWidth 
                                >
                                Update
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePage;