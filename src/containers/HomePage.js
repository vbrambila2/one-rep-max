import React from 'react';
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

   return (
       <div className={classes.homePageContent} >
            <Header title={"One Rep Max"} titleCaption={"- Percentage Calculator -"}/>
            <div className={classes.moveList}>
                <MovementButtons />
            </div>
            <FabButton />
       </div>
   );
};

export default (HomePage);
