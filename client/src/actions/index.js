import { GET_MOVEMENTS, CREATE_MOVEMENT, DELETE_MOVEMENT, UPDATE_MOVEMENT } from "./constants";
import * as api from '../api';
import history from "../history";

export const getMovements = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMovements();

        dispatch({ type: GET_MOVEMENTS, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

// export function createMovement(move) {
//     history.push("/");
    
//     return {
//         type: CREATE_MOVEMENT,
//         payload: move
//     }
// };

export const createMovement = (move) => async (dispatch) => {
    try {
        const { data } = await api.createMovement(move);

        dispatch({ type: CREATE_MOVEMENT, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export function updateMovement(move) {
    return {
        type: UPDATE_MOVEMENT,
        payload: move
    }
};

export function deleteMovement(move) {
    return {
        type: DELETE_MOVEMENT,
        payload: move
    }
};