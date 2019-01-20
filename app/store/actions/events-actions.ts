import {Events} from "../../model/Events";

export const UPDATE_LIST = 'event:updateList';
export const DELETE_TASK = 'tasks:deleteTask';
export const ADDEVENT = 'event:addEvent';
export function onUpdateEventList(currentDate: any) {
    console.log("currentDate=="+JSON.stringify(currentDate))
    return {
        type: UPDATE_LIST,
        payload: {
            event: currentDate
        }
    }
}
export function addEvent(eventData: any) {
    console.log("eventData=="+JSON.stringify(eventData))
    return {
        type: ADDEVENT,
        payload: {
            event: eventData
        }
    }
}

export function deleteTask(id: number) {
    return {
        type: DELETE_TASK,
        payload: {
            id
        }
    }
}