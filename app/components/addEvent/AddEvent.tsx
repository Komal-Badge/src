import * as React from 'react';
// import { Header } from "../header/Header";
import { default as Header } from "../header/Header";
import { addEvent } from "../../store/actions/events-actions";
import { connect } from 'react-redux';
import { IAppState } from "../../store/AppStore";
import "./addEvent.css";
import { IProps } from '../container/types/IProps';
import {  Router, Route, Link } from "react-router-dom";
import { Container } from '../container/Container';
interface IState {
    formData: any
}
class AddEvent extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = { "formData": props.location.param.formData }

    }

    setFormValue = (flag: string, event: any) => {
        this.setState({
            "formData": event.target.value
        });
    }
    render() {

        let formData = this.state.formData;
        // const {formData}=this.props;
        console.log(this.state.formData)
        let timeInhrOptions, timeInMinOptions, timingOption;
        let timeInhr = ["Select Time", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        let timeInMin = ["Select Time", "00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
        let timeOption = ["AM", "PM"]
        timeInhrOptions = timeInhr.map((item, index) =>
            <option key={index} value={item}>{item}</option>
        );
        timeInMinOptions = timeInMin.map((item, index) =>
            <option key={index} value={item}>{item}</option>
        );
        timingOption = timeOption.map((item, index) =>
            <option key={index} value={item}>{item}</option>
        );
        return (
            <div >
                <div className="eventHeader">
                    <h3>Add Event</h3>
                </div>
                <form className="formOuter"  method="POST">
                    <div className="row">
                        <div className="col-25">
                            <label >Title</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="title" name="title" value={this.state.formData.title} onChange={(e) => this.setFormValue("title", e)} placeholder="Title.." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label >Start Time</label>
                        </div>
                        <div className="col-75">
                            <select className="selectWidth" id="startTimeHr" value={this.state.formData.startTimeHr} onChange={(e) => this.setFormValue("startTimeHr", e)} name="startTimeHr"  >
                                {timeInhrOptions}
                            </select>
                            <select className="selectWidth" id="startTimeMin" value={this.state.formData.startTimeMin} onChange={(e) => this.setFormValue("startTimeMin", e)} name="startTimeMin">
                                {timeInMinOptions}
                            </select>
                            <select className="selectTimeWidth" value={this.state.formData.startTime} onChange={(e) => this.setFormValue("startTime", e)} name="startTime">
                                {timingOption}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label >End Time</label>
                        </div>
                        <div className="col-75">
                            <select className="selectWidth" id="endTimeHr" value={this.state.formData.endTimeHr} onChange={(e) => this.setFormValue("endTimeHr", e)} name="endTimeHr"  >
                                {timeInhrOptions}
                            </select>
                            <select className="selectWidth" id="endTimeMin" value={this.state.formData.endTimeMin} onChange={(e) => this.setFormValue("endTimeMin", e)} name="endTimeMin">
                                {timeInMinOptions}
                            </select>
                            <select className="selectTimeWidth" value={this.state.formData.endTime} onChange={(e) => this.setFormValue("endTime", e)} name="endTime">
                                {timingOption}
                            </select>

                        </div>
                    </div>
                   
                    <div className="row">
                        <div className="col-25">

                        </div>
                        <div className="col-75">
                            <button className="addButton" type="submit"> <Link to='/'  className="hrefDecoration">Add</Link></button>
                        </div>
                    </div>

                </form>
            </div>

        )
    }
}
const mapStateToProps = (state: IAppState) => ({
    addEvent: addEvent
})

export default connect(mapStateToProps)(AddEvent);
