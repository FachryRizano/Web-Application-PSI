import React, { Component } from 'react';
import TrainingScheduleService from '../services/TrainingScheduleService';
class ListTrainingScheduleComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            trainingSchedules:[]
        }
    }

    componentDidMount(){
        TrainingScheduleService.getAllTrainingSchedule().then(res=>{
            this.setState({
                trainingSchedules : res.data      
            });
        })
    }
    render() {
        return (
            
            <div>
                 <h2 className="text-center">Training Schedule List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <td>Training Schedule Id</td>
                                <td>Training Schedule Code</td>
                                <td>Training Duration</td>
                                <td>Training Subject Name</td>
                                <td>Participants</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.trainingSchedules.map(
                                    ts=>
                                    <tr key = {ts.id}>
                                        <td>{ts.id}</td>
                                        <td>{ts.code}</td>
                                        <td>{ts.duration}</td>
                                        <td>{ts.subjectName}</td>
                                        <td>{ts.participant.map(p=>p.name)}</td>
                                    </tr>
                                )   
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );

    }
}
export default ListTrainingScheduleComponent;