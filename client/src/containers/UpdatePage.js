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
        marginTop: '100px'
    },
    updateMovementDiv: {
        background: '#0080ff',
        fontFamily: 'PT Sans Caption',
        fontSize: '18px',
        borderRadius: '10px',
        padding: '20px',
        marginTop: '50px',
    },
    textDiv: {
        background: '#ffffff',
        padding: '8px',
        borderRadius: '10px',
    },
    textFieldDiv: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00BFFF"
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
        paddingTop: '20px',
    },
    updateButton: {
        background: '#33ccff',
        boxShadow: '2px 2px 1px #006bb3',
        color: '#F8F8F8',
        textShadow: '1px 1px #000000',
        fontFamily: 'PT Sans Caption',
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