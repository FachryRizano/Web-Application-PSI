import React, { Component } from 'react';
import authService from '../../services/auth/auth.service';
import TrainingRequestService from '../../services/TrainingRequest/TrainingRequestService';
class TrainingRequestComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            currentUser : authService.getCurrentUser(),
            userDetails:null
        }
    }

    componentDidMount(){
        console.log(this.state.currentUser)
        TrainingRequestService.getSomething().then(res=>{
            this.setState({
                userDetails:res.data
            })
            console.log(res.data)
        })
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default TrainingRequestComponent;