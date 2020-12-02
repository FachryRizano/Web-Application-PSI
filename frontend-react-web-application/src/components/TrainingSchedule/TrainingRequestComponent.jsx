import React, { Component } from 'react';
import authService from '../../services/auth/auth.service';
import TrainingRequestService from '../../services/TrainingRequest/TrainingRequestService';
import LeftNavbarMenu from '../LeftNavbarMenu';
import Button from '../Button';
import logo from '../../image/logo.jpg';

import ListTrainingSchedule from "./ListTrainingScheduleComponent";



class TrainingRequestComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            user:authService.getCurrentUser(),
            userDetails:[],
            // scheduleDetails:this.props.location.state.scheduleDetails,
            // subjectName:this.props.location.state.subjectName
            trainingSchedule:{},
            scheduleDetails:{}
        }
    }

    componentDidMount(){
        TrainingRequestService.getUserDetails(this.state.user.id).then(res=>{
            this.setState({userDetails:res.data})
        })
        if(this.props.location.state !== undefined){
            this.setState({
                trainingSchedule:this.props.location.state.trainingSchedule,
                scheduleDetails:this.props.location.state.scheduleDetails
            })
        }
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

    render() {
        const {userDetails,trainingSchedule,scheduleDetails} = this.state
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
                                        <label>No.HP:<input type="number" name="noHP" value={userDetails.noHp}/></label>
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
                                            <label>Subject:<input type="text" name="" value={trainingSchedule.subjectName}/></label>
                                            <label>Training Code:{trainingSchedule.code}</label>
                                            <label>Group:</label>
                                            <label>Duration:{scheduleDetails.duration}</label>
                                            <label>Investment(IDR):{scheduleDetails.price}</label>
                                            <label>Date:{scheduleDetails.date}</label>
                                            <label>Area Training:{scheduleDetails.location}</label>
                                            <label>Trainer:{scheduleDetails.speaker}</label>
                                            {/* vendor sokap */}
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
