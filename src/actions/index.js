import { CREATE_MOVEMENT } from "./constants";
import history from "../history";

export function createMovement(move) {
    history.push("/")
    
    return {
        type: CREATE_MOVEMENT,
        payload: move
    }
}