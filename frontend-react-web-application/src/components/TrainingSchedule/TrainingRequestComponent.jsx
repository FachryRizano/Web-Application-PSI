import React, { Component} from 'react';
import authService from '../../services/auth/auth.service';
import TrainingRequestService from '../../services/TrainingRequest/TrainingRequestService';
import LeftNavbarMenu from '../LeftNavbarMenu';
import Button from '../Button';
import logo from '../../image/logo.jpg';

import ListTrainingSchedule from "../TrainingSchedule/ListTrainingScheduleComponent";


import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class TrainingRequestComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            user:authService.getCurrentUser(),
            userDetails:[],
            trainingSchedule:{},
            scheduleDetails:{},
            ukuranKaos:"",
            noHP:"",
            seen:false
        }
    }

    componentDidMount(){
        TrainingRequestService.getUserDetails(this.state.user.id).then(res=>{
            this.setState({userDetails:res.data})
        })

        // if(this.props.location.state !== undefined){
        //     this.setState({
        //         trainingSchedule:this.props.location.state.trainingSchedule,
        //         scheduleDetails:this.props.location.state.scheduleDetails,
        //     })
        // }

    }

    handleTraining = (trainingSchedule)=>{
        this.setState({
            trainingSchedule:trainingSchedule,
        })
        console.log(this.state.trainingSchedule)
    }

    handleSchedule = (scheduleDetails)=>{
        this.setState({
            scheduleDetails:scheduleDetails
        })
        console.log(this.state.scheduleDetails)
    }

    required = value => {
        if (!value) {
          return (
            <div className="alert alert-danger" role="alert">
              This field is required!
            </div>
          );
        }
      };

    handleChange =(e)=>{
        switch(e.target.name){
            case "ukuranKaos":
                this.setState({ukuranKaos:e.target.value})
                break;
            case "noHP":
                this.setState({noHP:e.target.value})
                break;
            default:
                ;break;
        }
    }

    togglePop = () =>{
        this.setState({
         seen: !this.state.seen
        });
    };
    render() {
        const {userDetails,trainingSchedule,scheduleDetails} = this.state
        return (
          <div className="row">
              {/*menu disebelah kiri */}
              <div className="container col-md-2 text border-right ml-auto sidebarCustom">
                  <div className="row p-4">
                    <span className="container">
                      <button className="btn bg-light w-100">
                          My Outstanding<span className="badge badge-light">(0)</span>
                      </button>
                    </span>
                  </div>
                  <LeftNavbarMenu
                      icon="save"
                      text=" New Request"
                      data={["By Employee", "By Topics", "By Company", "By Location"]}
                  />
                  <LeftNavbarMenu
                      icon="arrow-right"
                      text=" E-Certificate"
                      data={["My Certificate", "By Topic"]}
                  />
                  <LeftNavbarMenu
                      icon="bell"
                      text=" Training Evaluation"
                      data={["Open", "Close"]}
                  />
              </div>

              {/* column sebelah kanan */}
              <div className="container pt-3 col-md-9 text-left">
                  {/*button diatas user profile */}
                  <div className="container bg-danger rounded-pill row">
                      <div className="col-md-9 pt-3 pb-2">
                          <Button icon="save" text=" Save" />
                          <Button icon="arrow-right" text=" Submit" />
                          <Button icon="trash" text=" Cancel Request" />
                          <Button icon="bell" text=" Renotify to Karyawan/PIC HC" />
                      </div>
                      <div className="col-md-3 text-right pt-3">
                          <a href="#goToBottom">
                              <Button icon="arrow-down" text=" Go to bottom" />
                          </a>
                      </div>
                  </div>

                  <div className="container mb-4 mt-4 row-12 text-center">
                      <span className="formSignUpFormHeader">
                          <img
                              src={logo}
                              alt="Samudera Indonesia"
                              className="formSignUpFormLogo mt-2"
                          />
                          <h1>SAMUDERA INDONESIA</h1>
                      </span>
                      <h2 className="text-center">Training Request</h2>
                      {/* user profile */}
                      <div className="container col pt-4">
                          {/* Refactor */}
                          <div className="container border text-center pt-3">
                              <div className="row">
                                  <div className="col-md-6 text-left">
                                      <label>
                                          <span className="customTrainingRequestFormLabelSpacing">Name:</span>
                                          <input
                                              className="ml-3"
                                              type="text"
                                              name="name"
                                              value={userDetails.nama}
                                          />
                                      </label>
                                  </div>
                              </div>

                              <div className="row">
                                  <div className="col-md-6 text-justify">
                                      <label>
                                          <span className="customTrainingRequestFormLabelSpacing">Golongan:</span>
                                          <input
                                              className="border-0"
                                              type="text"
                                              name="golongan"
                                              value={userDetails.golongan}
                                          />
                                      </label>
                                      <label>
                                          <span className="customTrainingRequestFormLabelSpacing">NIK:</span>
                                          <input
                                              className="border-0"
                                              type="text"
                                              name="nik"
                                              value={userDetails.nik}
                                          />
                                      </label>
                                      <label>
                                          <span className="customTrainingRequestFormLabelSpacing">Posisi:</span>
                                          <input
                                              className="border-0"
                                              type="text"
                                              name="posisi"
                                              value={userDetails.posisi}
                                          />
                                      </label>
                                      <label>
                                          <span className="customTrainingRequestFormLabelSpacing">Keluarga Jabatan:</span>
                                          <input
                                              className="border-0"
                                              type="text"
                                              name="keluargaJabatan"
                                              value={userDetails.keluargaJabatan}
                                          />
                                      </label>
                                      <label>
                                          <span className="customTrainingRequestFormLabelSpacing">Level:</span>
                                          <input
                                              className="border-0"
                                              type="text"
                                              name="level"
                                              value={userDetails.level}
                                          />
                                      </label>
                                      {/* Override */}
                                      <label>
                                          <span className="customTrainingRequestFormLabelSpacing">No.HP:</span>
                                          <input
                                              className="ml-3"
                                              type="string"
                                              name="noHP"
                                              onChange={this.handleChange}
                                          />
                                      </label>
                                      {/* Override */}
                                      <label htmlFor="ukuranKaos">
                                          <span className="customTrainingRequestFormLabelSpacing">Ukuran Kaos:</span>
                                          <select
                                              className="ml-3"
                                              defaultValue={this.state.ukuranKaos}
                                              name="ukuranKaos"
                                              id="periodeTrainingSchedule"
                                              onChange={this.handleChange}
                                          >
                                              <option value=""></option>
                                              <option value="1">S</option>
                                              <option value="2">M</option>
                                              <option value="3">L</option>
                                              <option value="4">XL</option>
                                              <option value="5">XXL</option>
                                              <option value="6">XXXL</option>
                                          </select>
                                      </label>
                                  </div>

                                  <div className="col-md-6 text-justify">
                                      <label>
                                          <span className="customTrainingRequestFormLabelSpacing">Entitas:</span>
                                          <input
                                              className="border-0"
                                              type="text"
                                              name="entitas"
                                              value={userDetails.entitas}
                                          />
                                      </label>
                                      <label>
                                          <span className="customTrainingRequestFormLabelSpacing">Divisi:</span>
                                          <input
                                              className="border-0"
                                              type="text"
                                              name="divisi"
                                              value={userDetails.divisi}
                                          />
                                      </label>
                                      <label>
                                          <span className="customTrainingRequestFormLabelSpacing">Kota:</span>
                                          <input
                                              className="border-0"
                                              type="text"
                                              name="kota"
                                              value={userDetails.kota}
                                          />
                                      </label>
                                      <label>
                                          <span className="customTrainingRequestFormLabelSpacing">PIC HC:</span>
                                          <input
                                              className="border-0"
                                              type="text"
                                              name="picHC"
                                              value={userDetails.picHC}
                                          />
                                      </label>
                                  </div>
                              </div>
                          </div>

                          {/* pilihan training schedul yang ingin diikuti */}
                          <div className="container pt-4">
                              {/* Refactor */}

                              <form>
                                  <div
                                      className="container border row text-left"
                                      id="goToBottom"
                                  >
                                      <div className="col-md-6 trainingRequestBottomDataForm">
                                          <label htmlFor="ukuranKaos">
                                              <span className="customTrainingRequestFormLabelSpacing">Periode:</span>
                                              <select
                                                  name="periodeTrainingSchedule"
                                                  id="periodeTrainingSchedule"
                                              >
                                                  <option value=""></option>
                                                  <option value="2019">2019</option>
                                                  <option value="2020">2020</option>
                                                  <option value="2021">2021</option>
                                              </select>
                                          </label>
                                          <Popup
                                              trigger={
                                                  <button type="button">
                                                      Show Training Schedule
                                                  </button>
                                              }
                                              position="bottom center"
                                          >
                                              <div>
                                                  <ListTrainingSchedule
                                                      trainingSchedule={
                                                          this.handleTraining
                                                      }
                                                      scheduleDetails={
                                                          this.handleSchedule
                                                      }
                                                  />
                                              </div>
                                          </Popup>
                                          <label>
                                              <span className="customTrainingRequestFormLabelSpacing">Subject:</span>
                                              <input
                                                  type="text"
                                                  name=""
                                                  value={this.props.scheduleDetails}
                                              />
                                          </label>
                                          <label>
                                              <span className="customTrainingRequestFormLabelSpacing">Training Code:</span>
                                              <input
                                                  className="border-0"
                                                  type="text"
                                                  name="trainingCode"
                                                  value={trainingSchedule.code}
                                              />
                                          </label>
                                          <label>
                                              <span className="customTrainingRequestFormLabelSpacing">Group:</span>
                                              <input
                                                  className="border-0"
                                                  type="text"
                                                  name="kelompok"
                                                  value={trainingSchedule.kelompok}
                                              />
                                          </label>
                                          <label>
                                              <span className="customTrainingRequestFormLabelSpacing">Duration:</span>
                                              <input
                                                  className="border-0"
                                                  type="text"
                                                  name="duration"
                                                  value={trainingSchedule.duration}
                                              />
                                          </label>
                                          <label>
                                              <span className="customTrainingRequestFormLabelSpacing">Investment(IDR):</span>
                                              <input
                                                  className="border-0"
                                                  type="text"
                                                  name="price"
                                                  value={scheduleDetails.price}
                                              />
                                          </label>
                                          <label>
                                              <span className="customTrainingRequestFormLabelSpacing">Date:</span>
                                              <input
                                                  className="border-0"
                                                  type="text"
                                                  name="date"
                                                  value={scheduleDetails.date}
                                              />
                                          </label>
                                          <label>
                                              <span className="customTrainingRequestFormLabelSpacing">Area Training:</span>
                                              <input
                                                  className="border-0"
                                                  type="text"
                                                  name="location"
                                                  value={scheduleDetails.location}
                                              />
                                          </label>
                                          <label>
                                              <span className="customTrainingRequestFormLabelSpacing">Trainer:</span>
                                              <input
                                                  className="border-0"
                                                  type="text"
                                                  name="speakerName"
                                                  value={scheduleDetails.speakerName}
                                              />
                                          </label>
                                          <label>
                                              <span className="customTrainingRequestFormLabelSpacing">Vendor:</span>
                                              <input
                                                  className="border-0"
                                                  type="text"
                                                  name="kelompok"
                                                  value={scheduleDetails.vendor}
                                              />
                                          </label>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default TrainingRequestComponent;
