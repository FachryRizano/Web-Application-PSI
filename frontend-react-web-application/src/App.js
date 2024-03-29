import React, { Component, Fragment} from 'react';
import {Route, Link, Switch}from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/main.css";
import AuthService from "./services/auth/auth.service";

import Login from "./components/login.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/BoardRole/board-user.component";
import BoardModerator from "./components/BoardRole/board-moderator.component";
import BoardAdmin from "./components/BoardRole/board-admin.component";


import logoWithText from './image/logo-with-text.png';
import ListTrainingSchedule from "./components/TrainingSchedule/ListTrainingScheduleComponent";
import TrainingRequest from "./components/TrainingSchedule/TrainingRequestComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      // showModeratorBoard: false,
      // showAdminBoard: false,
      currentUser: undefined,
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }
  logOut(){
    AuthService.logout(this.state.currentUser.email);
  }
  render() {
    const { currentUser} = this.state;
    return (
      <div>
        {currentUser ? (
        <Fragment>
            
              <nav className="navbar navbar-expand navbar-dark bg-dark nav-praweda-head">
                <Link to={"/"} className="navbar-brand">
                  <img src={ logoWithText } alt="Logo"/>
                </Link>
                {/* ANEH
                <li className="nav-item">
                  <Link to={"/home"} className="nav-link">Home</Link>
                </li>

                {showModeratorBoard && (
                  <li className="nav-item">
                    <Link to={"/mod"} className="nav-link">Moderator Board</Link>
                  </li>
                )}

                {showAdminBoard && (
                  <li className="nav-item">
                    <Link to={"/admin"} className="nav-link">Admin Board</Link>
                  </li>
                )}

                {currentUser && (
                  <li className="nav-item">
                    <Link to={"/user"} className="nav-link">User</Link>
                  </li>
                )}
                */}
                <div className="navbar-nav ml-auto">

                  <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
                      {currentUser.email}
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={this.logOut}>
                      LogOut
                    </a>
                  </li>
                </div>
              </nav>
            

            
              <nav className="navbar navbar-expand navbar-dark bg-dark nav-praweda-dashboard">
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a href="/training-schedules" className="nav-link">
                      Training Schedules
                    </a>
                  </li>

                  <li className="nav-item">
                    <Link to={"/training-request"} className="nav-link">
                      Training Request
                    </Link>
                  </li>
                </div>

              </nav>

            
          </Fragment>
            
            ) : (
              null
              // <div className="navbar-nav ml-auto">
              //   <li className="nav-item">
              //     <Link to={"/login"} className="nav-link">
              //       Login
              //     </Link>
              //   </li>
              //   <li className="nav-item">
              //     <Link to={"/register"} className="nav-link">
              //       Sign Up
              //     </Link>
              //   </li>
              // </div>
            )}

            

        {/* Nav need fix UI */}

        
          
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={BoardUser} />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} />
          <Route exact path="/training-schedules" render={props=><ListTrainingSchedule currentUser={this.state.currentUser} {...props}/>}/>
          <Route exact path="/training-request" component={TrainingRequest}/>
        </Switch>
    
      </div>
    );
  }
}
export default App;
