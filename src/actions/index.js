import { CREATE_MOVEMENT } from "./constants";

export function createMovement(move) {
    console.log(move, "action");
    return {
        type: CREATE_MOVEMENT,
        payload: move
    }
}