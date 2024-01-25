import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import FabButton from '../components/FabButton';
import WeightConverter from '../components/WeightConverter';
import MovementButtons from '../components/MovementButtons';
import { getMovements } from '../actions/index';
 
const useStyles = makeStyles(() => ({
   homePageContent: {
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
   },
   newDiv: {
       marginTop: '6.25rem'
   },
   moveList: {
       marginTop: '0.5rem'
   }
}));

const HomePage = (props) => {
    const {
        movements
    } = props;
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    const toggleChecked = () => setChecked(value => !value);
    const dispatch = useDispatch();
    const convert = (_id) => {
        const kg = movements.map((movement) => {
            return {_id: movement._id, movementName: movement.movementName, movementWeight: (movement.movementWeight * 0.453592).toFixed(1)}   
        })
            return kg; 
    } 
    useEffect(() => {
        setChecked(JSON.parse(window.sessionStorage.getItem("checked")));
    }, []);
    
    useEffect(() => {
        window.sessionStorage.setItem("checked", checked);
    }, [checked]);
    
    useEffect(() => {
        dispatch(getMovements());
    }, [dispatch])

   return (
       <div className={classes.homePageContent} >
            <Header title={"One Rep Max"} titleCaption={"- Percentage Calculator -"}/>
            <div>
                <WeightConverter checked = {checked} onChange={toggleChecked} />
            </div> 
            <div className={classes.moveList}>
                <MovementButtons movements={checked === false ? movements : convert()} conversion={checked === false ? 'lb' : 'kg'} />
            </div>
            <div>
                <FabButton />
            </div> 
            
       </div>
   );
};

export default HomePage;
