import { CREATE_MOVEMENT, DELETE_MOVEMENT, UPDATE_MOVEMENT } from '../actions/constants';

const initialState = []

const moveReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_MOVEMENT:
            return [ ...state, action.payload ];
        case UPDATE_MOVEMENT:
            return state.map((move) => move.movementName === action.payload.movementName ? action.payload : move);
        case DELETE_MOVEMENT:
            return state.filter(move => move.movementName !== action.payload);
        default: return state;
    }
}

export default moveReducer;