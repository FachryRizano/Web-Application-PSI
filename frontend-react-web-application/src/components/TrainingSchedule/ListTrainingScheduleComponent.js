import React, { Component} from 'react';
import TrainingScheduleService from '../../services/Schedule/TrainingScheduleService';
import {Redirect} from "react-router-dom";
import AuthService from "../../services/auth/auth.service";

class ListTrainingScheduleComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            trainingSchedules:[],
            getCurrentUser:AuthService.getCurrentUser(),
            detailsShown:[],
        }
        this.handleRequestTraining.bind(this)
    }

    componentDidMount(){
        if(this.state.getCurrentUser == null){
            return
        }else{
        TrainingScheduleService.getAllTrainingSchedule().then(
            res=>{
                this.setState({
                    trainingSchedules : res.data
                });
            }
            )
        }
    }

    handleRequestTraining = (subjectName,scheduleDetails)=>{

    //   this.props.trainingSchedule(ts)
    //   this.props.scheduleDetails(s)
      this.props.history.push({
        pathname:'/training-request',
        state:{
          subjectName,
          scheduleDetails
        }
      })
    }

    // Toggle untuk display schedule details
    handleToggleShown= id=>{
        const shownState = this.state.detailsShown.slice();
        const index = shownState.indexOf(id);
        if(index>=0){
            shownState.splice(index,1);
            this.setState({
                detailsShown:shownState
            })
        }else{
            shownState.push(id);
            this.setState({
                detailsShown:shownState
            })
        }
    }

    render() {
        if(this.state.getCurrentUser==null){
            return <Redirect to="/login"/>
        }else{
            return (
              <div className="container">
                <div className="dropdownPeriodeTrainingSchedule">
                    <label htmlFor="periodeTrainingSchedule">
                        <div>Pilih Periode : </div>
                        <select name="periodeTrainingSchedule" id="periodeTrainingSchedule">
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                        </select>
                    </label>
                </div>

                <div className="table100">
                    <table>
                        <thead>
                            <tr className="table100-head">
                                <th className="column1">No</th>
                                <th className="column2">Code</th>
                                <th className="column3">Subject</th>
                                <th className="column4">Participant</th>
                                <th className="column5">Duration</th>
                                <th className="column6">Action</th>
                            </tr>
                        </thead>
                        {this.state.trainingSchedules.map((ts) => (
                            <tbody keys={ts.id}>
                                <tr>
                                    <td className="column1">{ts.id}</td>
                                    <td className="column2">{ts.code}</td>
                                    <td className="column3">{ts.subjectName}</td>
                                    <td className="column4">
                                        {ts.participant.map((p) => p.name + ", ")}
                                    </td>
                                    <td className="column5">{ts.duration}</td>
                                    <td className="column6">
                                        <button
                                            className="btn"
                                            onClick={() => this.handleToggleShown(ts.id)}
                                        >
                                            <i class="fa fa-angle-down"></i>
                                        </button>
                                    </td>
                                </tr>
                                {this.state.detailsShown.includes(ts.id) &&
                                    ts.schedules.map((s) => (
                                        <tr keys={s.id}>
                                            <td className="column1">{s.date}</td>
                                            <td className="column2" colSpan="2">{s.location}</td>
                                            <td className="column4">{s.speakerName}</td>
                                            <td className="column5">{s.price}</td>
                                            <td className="column6">
                                                <button
                                                    className="btn"
                                                    onClick={() =>
                                                        this.handleRequestTraining(ts.subjectName, s)
                                                    }
                                                >
                                                    <i className="fa fa-arrow-down"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
            );
        }

    }
}
export default ListTrainingScheduleComponent;
