import { GET_MOVEMENTS, CREATE_MOVEMENT, DELETE_MOVEMENT, UPDATE_MOVEMENT } from '../actions/constants';

const initialState = []

const moveReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_MOVEMENTS:
            return action.payload;
        case CREATE_MOVEMENT:
            return [ ...state, action.payload ];
        case UPDATE_MOVEMENT:
            return state.map((move) => move._id === action.payload._id ? action.payload : move);
        case DELETE_MOVEMENT:
            return state.filter(move => move._id !== action.payload);
        default: return state;
    }
}

export default moveReducer; 