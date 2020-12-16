import React, { Component, Fragment } from 'react';
import authService from '../../services/auth/auth.service';
import TrainingRequestService from '../../services/TrainingRequest/TrainingRequestService';
import LeftNavbarMenu from '../LeftNavbarMenu';
import Button from '../Button';
import logo from '../../image/logo.jpg';

import ListTrainingSchedule from "./ListTrainingScheduleComponent";


import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

class TrainingRequestComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            user:authService.getCurrentUser(),
            userDetails:[],
            // scheduleDetails:this.props.location.state.scheduleDetails,
            // subjectName:this.props.location.state.subjectName
        }
    }

    componentDidMount(){
        TrainingRequestService.getUserDetails(this.state.user.id).then(res=>{
            this.setState({userDetails:res.data})
        })
        console.log(this.state.subjectName)
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

    handlePopUp = ()=>{
      return(
      <div>
        <Popup trigger={<button> Trigger</button>} position="right center">
          <div><ListTrainingSchedule/></div>
        </Popup>
      </div>
    );
    }

    render() {
        const userDetails = this.state.userDetails
        return (
            <div className="row">
                {/*menu disebelah kiri */}
                <div className="container col-md-2 text border-right ml-auto">
                    <LeftNavbarMenu data={["My Outstanding"]}/>
                    <LeftNavbarMenu icon="save" text="New Request" data={['By Employee','By Topics','By Company','By Location']}/>
                    <LeftNavbarMenu icon="arrow-right" text="E-Certificate" data={['My Certificate','By Topic']}/>
                    <LeftNavbarMenu icon="bell" text="Training Evaluation" data={['Open','Close']}/>
                </div>

                {/* sebelah kanan */}
                <div className="container pt-3 col-md-9">
                    {/*button diatas user profile */}
                    <div className="container bg-danger pt-2 pb-2">
                        <Button icon="save" text="Save"/>
                        <Button icon="arrow-right" text="Submit"/>
                        <Button icon="trash" text="Cancel Request"/>
                        <Button icon="bell" text="Renotify to Karyawan/PIC HC"/>
                    </div>

                    <div className="container border mt-4">
                        <span className="formSignUpFormHeader">
                            <img src={logo} alt="Samudera Indonesia" className="formSignUpFormLogo"/>
                            <h1>SAMUDERA INDONESIA</h1>



<Fragment>
  <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Modal Title </div>
        <div className="content">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            nested
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
</Fragment>





                        </span>
                        <h2 className="text-center">Training Request</h2>
                        {/* user profile */}
                        <div className="container col pt-4">

                            <div className="container bg-warning text-center pt-3">
                                <div className="row">
                                    <div className="col-md-6 text-left">
                                        <label >Name:<input type="text" name="name" value={userDetails.nama}/></label>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-md-6 text-left">
                                        <label>Golongan: {userDetails.golongan}</label>
                                        <label>NIK:{userDetails.nik}</label>
                                        <label>Posisi:{userDetails.posisi}</label>
                                        <label>Keluarga Jabatan:{userDetails.keluargaJabatan}</label>
                                        <label>Level:{userDetails.level}</label>
                                        <label>No.HP:{userDetails.noHp}</label>
                                        <label>Ukuran Kaos:{userDetails.ukuran}</label>
                                    </div>

                                    <div className="col-md-6 text-left">
                                        <label>Entitas:{userDetails.entitas}</label>
                                        <label>Divisi:{userDetails.divisi}</label>
                                        <label>Kota:{userDetails.kota}</label>
                                        <label>PIC HC:{userDetails.picHC}</label>
                                    </div>
                                </div>
                            </div>

                            {/* pilihan training schedul yang ingin diikuti */}
                            <div className="container bg-light pt-4">
                                <form>
                                    <div className="container border row text-left">
                                        <div className="col-md-6">
                                            {/* ini harusnya periode dropdown year */}
                                            <label>Periode:<input type="text" name="periode" /></label>
                                            {/* masukkan subject name untuk memilih training yang diinginkan     */}
                                            <label>Subject:<input type="text" name="" value={this.props.scheduleDetails}/>

                                            {/*
                                              <Popup trigger={<div class="btn bg-success text-white ml-1">Trigger</div>} position="bottom center">
                                                <div><ListTrainingSchedule/></div>
                                              </Popup>
                                            */}




                                              <Popup
                                                trigger={<div className="button"> Open Modal </div>}
                                                modal
                                                nested
                                              >
                                                {close => (
                                                  <div className="modal">
                                                    <div className="close" onClick={close}>
                                                      &times;
                                                    </div>
                                                    <div className="header"> Modal Title </div>
                                                    <div className="content">
                                                      {' '}
                                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                                                      Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                                                      delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                                                      <br />
                                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                                                      commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                                                      explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                                                    </div>
                                                    <div className="actions">
                                                      <Popup
                                                        trigger={<div className="button"> Trigger </div>}
                                                        position="top center"
                                                        nested
                                                      >
                                                        <span>
                                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                                                          magni omnis delectus nemo, maxime molestiae dolorem numquam
                                                          mollitia, voluptate ea, accusamus excepturi deleniti ratione
                                                          sapiente! Laudantium, aperiam doloribus. Odit, aut.
                                                        </span>
                                                      </Popup>
                                                      <div
                                                        className="button"
                                                        onClick={() => {
                                                          console.log('modal closed ');
                                                          close();
                                                        }}
                                                      >
                                                        close modal
                                                      </div>
                                                    </div>
                                                  </div>
                                                )}
                                              </Popup>





                                            </label>
                                            <label>Training Code:</label>
                                            <label>Group:</label>
                                            <label>Duration:</label>
                                            <label>Investment(IDR):</label>
                                            <label>Date:</label>
                                            <label>Area Training:</label>
                                            <label>Trainer:</label>
                                            <label>Vendor:</label>
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
