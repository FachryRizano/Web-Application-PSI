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
        if(this.state.getCurrentUser == null){
            return 
        }else{
        TrainingRequestService.getUserDetails().then(
            res=>{
                this.setState({
                    userDetails : res.data      
                },()=>console.log(localStorage));
            }
            
            )
        }
        console.log(this.state.userDetails)
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