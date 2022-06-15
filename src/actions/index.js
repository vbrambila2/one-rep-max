import { CREATE_MOVEMENT, UPDATE_MOVEMENT } from "./constants";
import history from "../history";

export function createMovement(move) {
    history.push("/")
    
    return {
        type: CREATE_MOVEMENT,
        payload: move
    }
};

export function updateMovement(move) {
    console.log(move, "in update action");
    
    return {
        type: UPDATE_MOVEMENT,
        payload: move
    }
};