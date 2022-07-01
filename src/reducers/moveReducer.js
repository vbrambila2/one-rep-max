import { CREATE_MOVEMENT, UPDATE_MOVEMENT } from '../actions/constants';

const initialState = []

const moveReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_MOVEMENT:
            return [ ...state, action.payload ];
        case UPDATE_MOVEMENT:
            return state.map((move) => move.movementName === action.payload.movementName ? action.payload : move);
            // console.log(state, "reducer");
            // return action.payload;
        default: return state;
    }
}

export default moveReducer;