import React, { Component } from 'react';
import authService from '../../services/auth/auth.service';
import TrainingRequestService from '../../services/TrainingRequest/TrainingRequestService';
class TrainingRequestComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            user:authService.getCurrentUser()
            
        }
    }

    componentDidMount(){
        TrainingRequestService.getUserDetails(this.state.user.id).then(res=>{
            console.log(res.data)
        })
    }

    render() {
        return (
            <div className="container">
                <h3>Password</h3>
            </div>
        );
    }
}

export default TrainingRequestComponent;