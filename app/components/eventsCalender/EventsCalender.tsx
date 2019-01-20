import * as React from 'react';
import "./eventsCalender.css";
import { Router, Route } from 'react-router';
import timeJson = require('../../time.json');
import { ITimingListProps } from "./types/ITimingListProps";
import * as moment from 'moment';
import { Events } from '../../model/Events';
import { appStore } from '../../store/AppStore';
import { connect } from 'react-redux';
import eventsJson = require('../events.json');
import { onUpdateEventList } from '../../store/actions/events-actions';
export class EventsCalender extends React.Component<ITimingListProps, {}> {
    constructor(props: ITimingListProps, context: any) {
        super(props, context);
        console.log("okkkkkkkkkkk" + appStore.getState().name)
    }
    componentWillReceiveProps = () => {
        console.log("yeee")
    }
    renderTime = () => {
        return (timeJson || []).map((item: any, index: number) => {
            return (
                <tr key={index}>
                    <td className="width20">{item}</td>
                    <td className="width60"></td>
                </tr>
            );
        });
    }
    renderEvents = () => {
        let currentDate = appStore.getState().name.date;
        let eventListItems;
        
        let eventsList = (eventsJson || []).filter((items:any) => currentDate == items.date);
        console.log("eventsJson=="+eventsJson)
        return (eventsList[0].events || []).map((item: any, index: number) => {
           
            return (
                <div key={index}  className="position">
                    <table className="table fontSizeTable">
                        <tbody>
                            <tr>
                                <td className="width20">
                                    {item.startTime} -- {item.endTime}
                                </td>
                                <td>
                                    {item.title}
                                </td>
                                <td className="width10">
                                    <i className="fa fa-pencil fontSize" aria-hidden="true"></i>
                                </td>
                                <td className="width10">
                                    <i className="fa fa-close fontSize" aria-hidden="true"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        });
    }
    render() {
        return (
            <div className="header tableOuter ">
                <table className="table borderTd">
                    <tbody>
                        {this.renderTime()}

                    </tbody>
                </table>
                {this.renderEvents()}
            </div>
        )
    }
}
// const mapActionsToProps = {
//     renderEvents: onUpdateEventList
// };

// export default connect(undefined, mapActionsToProps)(EventsCalender);
