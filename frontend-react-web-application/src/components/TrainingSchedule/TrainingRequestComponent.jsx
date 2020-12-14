import React, { Component } from 'react';
import authService from '../../services/auth/auth.service';
import TrainingRequestService from '../../services/TrainingRequest/TrainingRequestService';
import LeftNavbarMenu from '../LeftNavbarMenu';
import Button from '../Button';
import logo from '../../image/logo.jpg';




class TrainingRequestComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            user:authService.getCurrentUser(),
            userDetails:[],
            trainingSchedule:{},
            scheduleDetails:{},
            ukuranKaos:"",
            noHP:""
        }
    }

    componentDidMount(){
        TrainingRequestService.getUserDetails(this.state.user.id).then(res=>{
            this.setState({userDetails:res.data})
        })
        if(this.props.location.state !== undefined){
            this.setState({
                trainingSchedule:this.props.location.state.trainingSchedule,
                scheduleDetails:this.props.location.state.scheduleDetails,
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
    render() {
        console.log(this.state.trainingSchedule)
        const {userDetails,trainingSchedule,scheduleDetails} = this.state
        return (
            <div className="row">
                {/*menu disebelah kiri */}
                <div className="container col-md-2 text border-right ml-auto">
                    <div className="row p-4">
                        <button class="btn bg-light">
                            My Outstanding<span class="badge badge-light">(0)</span>
                        </button>
                    </div>
                    <LeftNavbarMenu icon="save" text="New Request" data={['By Employee','By Topics','By Company','By Location']}/>
                    <LeftNavbarMenu icon="arrow-right" text="E-Certificate" data={['My Certificate','By Topic']}/>
                    <LeftNavbarMenu icon="bell" text="Training Evaluation" data={['Open','Close']}/>
                </div>

                {/* column sebelah kanan */}
                <div className="container pt-3 col-md-9 text-left">
                    {/*button diatas user profile */}
                    <div className="container bg-danger rounded-pill row">
                        <div className="col-md-8 pt-3 pb-2">
                            <Button icon="save" text="Save"/>
                            <Button icon="arrow-right" text="Submit"/>
                            <Button icon="trash" text="Cancel Request"/>
                            <Button icon="bell" text="Renotify to Karyawan/PIC HC"/>
                        </div>
                        <div className="col-md-4 text-right pt-4">
                            <a>Go to bottom</a>
                        </div>
                    </div>

                    <div className="container  mt-4 row-12">
                        <span className="formSignUpFormHeader">
                            <img src={logo} alt="Samudera Indonesia" className="formSignUpFormLogo mt-2"/>
                            <h1>SAMUDERA INDONESIA</h1>
                        </span>


                        <h2 className="text-center">Training Request</h2>
                        {/* user profile */}
                        <div className="container col pt-4">
                            {/* Refactor */}
                            <div className="container border text-center pt-3">
                                <div className="row">
                                    <div className="col-md-6 text-left">
                                        <label >Name:<input disabled="true" className="ml-3"type="text" name="name" value={userDetails.nama}/></label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 text-justify">
                                        <label>Golongan<p className="d-inline ml-5">: {userDetails.golongan}</p></label>
                                        <label>NIK<p className="d-inline ml-5">: {userDetails.nik}</p></label>
                                        <label>Posisi:{userDetails.posisi}</label>
                                        <label>Keluarga Jabatan:{userDetails.keluargaJabatan}</label>
                                        <label>Level:{userDetails.level}</label>
                                        {/* Override */}
                                        <label>No.HP:<input className="ml-3"type="string" name="noHP" onChange={this.handleChange}/></label>
                                        {/* Override */}
                                        <label htmlFor="ukuranKaos">Ukuran Kaos: 
                                            <select className="ml-3" defaultValue={this.state.ukuranKaos} name="ukuranKaos" id="periodeTrainingSchedule" onChange={this.handleChange}>
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
                                        <label>Entitas:{userDetails.entitas}</label>
                                        <label>Divisi:{userDetails.divisi}</label>
                                        <label>Kota:{userDetails.kota}</label>
                                        <label>PIC HC:{userDetails.picHC}</label>
                                    </div>
                                </div>
                            </div>

                            {/* pilihan training schedul yang ingin diikuti */}
                            <div className="container bg-light pt-4">
                                {/* Refactor */}
                                <form>
                                    <div className="container border row text-left">
                                        <div className="col-md-6">
                                            {/* ini harusnya periode dropdown year */}
                                            <label htmlFor="ukuranKaos">Periode: 
                                                <select className="ml-3" name="periodeTrainingSchedule" id="periodeTrainingSchedule">
                                                    <option value=""></option>
                                                    <option value="2019">2019</option>
                                                    <option value="2020">2020</option>
                                                    <option value="2021">2021</option>
                                                </select>
                                            </label>
                                            <label>Subject:<input className="ml-3" type="text" name="" disabled="true" value={trainingSchedule.subjectName}/></label>
                                            <label>Training Code:{trainingSchedule.code}</label>
                                            {/* <label>Group:{trainingSchedule.code && trainingSchedule.code.substr(0,2)}</label> */}
                                            <label>Group:{trainingSchedule.kelompok}</label>
                                            <label>Duration:{scheduleDetails.duration}</label>
                                            <label>Investment(IDR):{scheduleDetails.price}</label>
                                            <label>Date:{scheduleDetails.date}</label>
                                            <label>Area Training:{scheduleDetails.location}</label>
                                            <label>Trainer:{scheduleDetails.speakerName}</label>
                                            <label>Vendor:{scheduleDetails.vendor}</label>
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
