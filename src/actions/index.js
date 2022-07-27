import { CREATE_MOVEMENT, DELETE_MOVEMENT, UPDATE_MOVEMENT } from "./constants";
import history from "../history";

export function createMovement(move) {
    history.push("/");
    
    return {
        type: CREATE_MOVEMENT,
        payload: move
    }
};

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