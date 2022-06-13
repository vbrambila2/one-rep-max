import { CREATE_MOVEMENT } from '../actions/constants';

const initialState = []

const moveReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_MOVEMENT:
            return [ ...state, action.payload ];
        default: return state;
    }
}

export default moveReducer;