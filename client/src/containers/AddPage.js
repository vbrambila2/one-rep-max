import React, { useState } from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { createMovement } from '../actions';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    addPage: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px'
    },
    addMovementDiv: {
        //background: '#0000ff',
        //fontFamily: 'PT Sans Caption',
        fontSize: '18px',
        //borderRadius: '10px',
        padding: '20px',
        marginTop: '50px',
        textAlign: 'center'
    },
    textDiv: {
        background: '#ffffff',
        padding: '8px',
        borderRadius: '10px',
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
    addButton: {
        background: '#33ccff',
        boxShadow: '2px 2px 1px #006bb3',
        color: '#F8F8F8',
        textShadow: '1px 1px #000000',
        fontFamily: 'PT Sans Caption',
        '&:hover': {
            backgroundColor: '#00ace6',
        },
    },
    buttonDiv: {
        paddingTop: '20px'
    },
    [theme.breakpoints.down('sm')]: {
        textFieldDiv: {
            display: 'flex', 
            padding: '0.5rem'
        }
    }
}));

const AddPage = () => {
    const classes = useStyles();
    const [moveData, setMoveData] = useState({ movementName:'', movementWeight: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //todo fix handlesubmit function
    const handleSubmit = (e) => {
        e.preventDefault();

        if (moveData.movementName === "" || moveData.movementWeight === "") {
            alert('Please add a name and/or weight');
        } else {
            dispatch(createMovement(moveData));
            navigate("/");
        }
    };

    const onChangeName = (e) => {
        const re = /^\b[a-zA-Z ]{0,20}$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setMoveData({ ...moveData, movementName: e.target.value })
        }
    };
    const onChangeWeight = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setMoveData({ ...moveData, movementWeight: e.target.value })
        }
    };

    return (
        <div>
            <Header title={"Add Movement"} />
            <div className={classes.addPage}>
                <div className={classes.addMovementDiv}>
                    <form onSubmit={handleSubmit} >
                        <div className={classes.textDiv}>
                            <TextField 
                                className={classes.textFieldDiv}
                                name="movementName"
                                variant="outlined"
                                label="Movement Name" 
                                style={{ width:200 }}
                                value={moveData.movementName}
                                onChange={onChangeName}
                            />
                            <TextField
                                className={classes.textFieldDiv}
                                name="movementWeight" 
                                variant="outlined"
                                label="One Rep Max"
                                style={{ width:200 }} 
                                value={moveData.movementWeight}
                                InputProps={{endAdornment: <InputAdornment position="end">lb</InputAdornment>}}
                                onChange={onChangeWeight}
                            />
                        </div>
                         <div className={classes.buttonDiv}>
                            <Button 
                                className={classes.addButton} 
                                variant="contained" 
                                type="submit" 
                                endIcon={<AddIcon />} 
                                fullWidth >
                                Submit
                            </Button>
                         </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPage;