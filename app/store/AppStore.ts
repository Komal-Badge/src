import { createStore } from 'redux';
import allReducers from "./reducers/AllReducers";
import { Events } from "../model/Events";
import { Name } from "../model/Name";
import * as moment from 'moment';

let todaysDate = (new Date());

this.state = {
    currentDate: moment(todaysDate).format("DD MMM, YYYY"),
}

export interface IAppState {
    name: Name
}

const INITIAL_STATE: IAppState = {
    name: { "date": this.state.currentDate,"eventList":this.state.eventList}
}

const appStore = createStore(
    allReducers,
    INITIAL_STATE as any,
    ((window) as any).devToolsExtension &&
    ((window) as any).devToolsExtension());
export { appStore };