import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import FabButton from '../components/FabButton';
import MovementButtons from '../components/MovementButtons';
import { getMovements } from '../actions/index';
 
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
    const {
        movements
    } = props;
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovements());
    }, [dispatch])

   return (
       <div className={classes.homePageContent} >
            <Header title={"One Rep Max"} titleCaption={"- Percentage Calculator -"}/>
            <div className={classes.moveList}>
                <MovementButtons movements={movements} />
            </div>
            <FabButton />
       </div>
   );
};

export default HomePage;