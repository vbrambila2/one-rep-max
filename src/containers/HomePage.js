import React from 'react';
import { connect } from "react-redux";
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import FabButton from '../components/FabButton';
import MovementButtons from '../components/MovementButtons';
// import MovementsList from './FetchedMovements';
 
const useStyles = makeStyles(() => ({
   homePageContent: {
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
   },
   newDiv: {
       marginTop: '100px'
   },
   moveList: {
       marginTop: '7rem'
   }
}));

const HomePage = (props) => {
    const classes = useStyles();
    const {
        move
    } = props;
    console.log(move);

   return (
       <div className={classes.homePageContent} >
            <Header title={"One Rep Max"} titleCaption={"- Percentage Calculator -"}/>
            <div className={classes.moveList}>
                <MovementButtons move={move} />
            </div>
            <FabButton />
       </div>
   );
};

const mapStateToProps = state => {
    return {
      move: state.moveReducer
    }
  };

export default connect(mapStateToProps)(HomePage);
