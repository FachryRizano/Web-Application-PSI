import React, { Component } from "react";

import UserService from "../services/User/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
        
        <div className="table100">
          <table>
            <thead>
              <tr className="table100-head">
                <th className="column1">No</th>
                <th className="column2">Code</th>
                <th className="column3">Subject</th>
                <th className="column4">Participant</th>
                <th className="column5">Duration</th>
              </tr>
            </thead>





            <tbody>
              <tr className="table100-row" onclick="toggle_visibility()">
                <td className="column1">1</td>
                <td className="column2">AI-001</td>
                <td className="column3">Samudera Indonesia Code of Ethnic & Conduct</td>
                <td className="column4">All Level</td>
                <td className="column5">2 hari</td>
              </tr>




              <tr className="table100-row-child">
                <td className="column1">06-01-2020</td>
                <td className="column2">SICU LEARNING CENTER</td>
                <td className="column3">DIYAN GEUMALA</td>
                <td className="column4">IDR 40,000-</td>
                <td className="column5">Icon Download</td>
              </tr>




              <tr>
                <td className="column1">2</td>
                <td className="column2">AI-002</td>
                <td className="column3">Basic Mentality & Work Ethos</td>
                <td className="column4">All Level</td>
                <td className="column5">2 hari</td>
              </tr>
              <tr>
                <td className="column1">3</td>
                <td className="column2">AI-003</td>
                <td className="column3">Synergy Team Building</td>
                <td className="column4">Staff, Supervisor</td>
                <td className="column5">2 hari</td>
              </tr>
              <tr>
                <td className="column1">4</td>
                <td className="column2">AI-004</td>
                <td className="column3">Communication Skill</td>
                <td className="column4">Staff, Supervisor</td>
                <td className="column5">3 jam</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
