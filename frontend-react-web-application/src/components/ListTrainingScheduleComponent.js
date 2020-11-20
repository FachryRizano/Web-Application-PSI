import React, { Component } from 'react';
import TrainingScheduleService from '../services/TrainingScheduleService';
import {Redirect} from "react-router-dom";
import AuthService from "../services/auth.service";
class ListTrainingScheduleComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            trainingSchedules:[],
            getCurrentUser:AuthService.getCurrentUser()
        }
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
    render() {
        if(this.state.getCurrentUser==null){
            return <Redirect to="/login"/>
        }else{
            return (
                <div>
                    <h2 className="text-center">Training Schedule List</h2>
                    <div className="table100">
                        <table>

                            <thead>
                            <tr className="table100-head">
                                <th className="column1">No</th>
                                <th className="column2">Code</th>
                                <th className="column3">Subject</th>
                                <th className="column4">Participant</th>
                                <th className="column6">Duration</th>
                            </tr>
                            </thead>

                            <tbody>
                            {this.state.trainingSchedules.map(ts=>
                                <tr key={ts.id}>
                                    <td className="column1">{ts.id}</td>
                                    <td className="column2">{ts.code}</td>
                                    <td className="column3">{ts.subjectName}</td>
                                    <td className="column4">{ts.participant.map(p=>p.name + ", ")}</td>
                                    <td className="column5">{ts.duration}</td>
                                </tr>
                            )}
                            </tbody>

                        </table>
                    </div>      

                </div>
            );
        }

    }
}
export default ListTrainingScheduleComponent;