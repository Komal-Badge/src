import { Events } from "../../model/Events";
import { ADDEVENT, DELETE_TASK } from "../actions/events-actions";

const eventsReducer = (state:any, action: any) => {
    let newState= [];
    if (!state) {
        state =null
    }

    switch (action.type) {
        case ADDEVENT:
            newState = [
                // ...state,
                action.payload.task
            ];
            console.log("reducer")
            return newState;
        case DELETE_TASK:
            // return state.filter(task => task.id !== action.payload.id);
        return state;
        default:
            return state;
    }
}

export default eventsReducer;