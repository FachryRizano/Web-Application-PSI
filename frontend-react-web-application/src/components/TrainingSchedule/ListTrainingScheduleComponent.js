import React, { Component , Fragment} from 'react';
import TrainingScheduleService from '../../services/Schedule/TrainingScheduleService';
import {Redirect} from "react-router-dom";
import AuthService from "../../services/auth/auth.service";

import iconExpand from '../../image/icon-expand.png';
import iconPDFDownload from '../../image/icon-pdf-download.png';

class ListTrainingScheduleComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            trainingSchedules:[],
            getCurrentUser:AuthService.getCurrentUser(),
            detailsShown:[]
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
                },()=>console.log(this.state.trainingSchedules));
            }
            )
        }
    }

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
                <div className="container border pt-3">
                    <div className="d-inline">
                        <label>Periode Training:</label>
                    </div>
                    <div classname="d-inline">
                        
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown button
                            </button>
                        </div>
                    </div>

                    <div className="container">
                        
                        
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
                                {this.state.trainingSchedules.map(ts=>
                                <tbody keys={ts.id}>

                                        <tr>
                                            <td className="column1">{ts.id}</td>
                                            <td className="column2">{ts.code}</td>
                                            <td className="column3">{ts.subjectName}</td>
                                            <td className="column4">{ts.participant.map(p=>p.name + ", ")}</td>
                                            <td className="column5">{ts.duration}</td>
                                            <td className="column6"><img src={ iconExpand } alt="Expand" onClick={()=>this.handleToggleShown(ts.id)}/></td>
                                        </tr>
                                        {this.state.detailsShown.includes(ts.id) && (
                                            ts.schedules.map(s=>
                                                <tr keys={s.id}>
                                                    <td className="column1">{s.date}</td>
                                                    <td className="column2" colspan="2">{s.location}</td>
                                                    <td className="column4">{s.speakerName}</td>
                                                    <td className="column5">{s.price}</td>
                                                    <td className="column6"><a href={s.linkPDF}><img src={ iconPDFDownload } alt="PDF Download"/></a></td>

                                                </tr>
                                            )
                                        )}
                                        

                                </tbody>
                                )}
                            </table>

                        </div>

                    </div>
                </div>
            );
        }

    }
}
export default ListTrainingScheduleComponent;
