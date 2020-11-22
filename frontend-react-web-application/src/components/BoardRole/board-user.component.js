import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import authService from "../../services/auth/auth.service";
import UserService from "../../services/User/user.service";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    if(authService.getCurrentUser()==null){
      return <Redirect to="/login"/>
    }else{
      return (
          <div className="container">
            <header className="jumbotron">
              <h3>{this.state.content}</h3>
            </header>
          </div>
      );
    }
  }
}
