import React, { Component } from "react";
import ListTrainingScheduleComponent from "./TrainingSchedule/ListTrainingScheduleComponent";
export default class PopUp extends Component {
  handleClick = () => {
   this.props.toggle();
  };
render() {
  return (
   <div className="modal">
     <div className="modal_content">
     <ListTrainingScheduleComponent/>
     <span className="close" onClick={this.handleClick}>&times;    </span>        
    </div>
   </div>
  );
 }
}