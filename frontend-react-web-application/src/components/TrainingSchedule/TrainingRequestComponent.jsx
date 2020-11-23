import React, { Component } from 'react';
import authService from '../../services/auth/auth.service';
import TrainingRequestService from '../../services/TrainingRequest/TrainingRequestService';
class TrainingRequestComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            currentUser : authService.getCurrentUser(),
            userDetails:[]
        }
    }

    componentDidMount() {
        TrainingRequestService.getUserDetails().then(
            res=>{
                console.log(res);
            }
            )
    }

    render() {
        return (
            <div>
                <p>Password</p>
            </div>
        );
    }
}

export default TrainingRequestComponent;