import * as React from 'react';
import { default as Header } from "../header/Header";
import {  EventsCalender } from "../eventsCalender/EventsCalender";
import { connect } from 'react-redux';
import { IAppState } from "../../store/AppStore";
import { IState } from "./types/IState";
import { IProps } from "./types/IProps";
import * as moment from 'moment';
export class Container extends React.Component<{}, IState> {

    constructor(props: any) {
        super(props);
        let todaysDate = (new Date());
        this.state = {
            currentDate: moment(todaysDate).format("DD MMM, YYYY").toString(),
            updateState: Function
        }
    }
    updateState = (updatedDate: any) => {
        this.setState({
            currentDate: updatedDate
        });
    }
    render() {
        console.log("kkk")
        return (
            <div>
                <Header currentDate={this.state.currentDate} updateState={this.updateState}></Header>
                <EventsCalender currentDate={this.state.currentDate} ></EventsCalender>
            </div>
        )
    }
}
