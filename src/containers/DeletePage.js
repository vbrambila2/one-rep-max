import React from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
//import { deleteMovement } from '../actions/index';
import { connect } from 'react-redux';
import { useLocation } from 'react-router';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    deletePage: {
        marginTop: '100px',
        display: 'flex',
        justifyContent: 'center',
    },
    deleteMovementDiv: {
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


 
 
    const handleSubmit = (formValues) => {
       
    };

    return (
        <div>
            <Header title="Delete Movement" />
            <div className={classes.deletePage} >
                <div className={classes.deleteMovementDiv} >Hello</div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        move: state.move,
    };
  };

//   const mapDispatchToProps = (dispatch) => {
//     return({
//         deleteMovement: (selectedID, formValues) => dispatch(deleteMovement(selectedID, formValues)),
//     })
// };

export default connect(mapStateToProps)(DeletePage);