import React, { Component } from 'react';
import authService from '../../services/auth/auth.service';
import TrainingRequestService from '../../services/TrainingRequest/TrainingRequestService';
import LeftNavbarMenu from '../LeftNavbarMenu';
import Button from '../Button';
import logo from '../../image/logo.jpg';
import Popup from 'reactjs-popup';
import ListTrainingSchedule from '../TrainingSchedule/ListTrainingScheduleComponent';

class TrainingRequestComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            user:authService.getCurrentUser(),
            userDetails:[],
            // trainingSchedule:{},
            // scheduleDetails:{},
            ukuranKaos:"",
            noHP:"",
            // seen:false
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

    handleTraining = (trainingSchedule)=>{
        console.log(trainingSchedule)
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
                <div className="container col-md-2 text border-right ml-auto">
                    <div className="row p-4">
                        <button className="btn bg-light">
                            My Outstanding<span className="badge badge-light">(0)</span>
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
                                        <label >Name:<input className="ml-3"type="text" name="name" value={userDetails.nama}/></label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 text-justify">
                                        <label>Golongan:<input className="border-0" type="text" name="golongan" value={userDetails.golongan}/></label>
                                        <label>NIK:<input className="border-0" type="text" name="nik" value={userDetails.nik}/></label>
                                        <label>Posisi:<input className="border-0" type="text" name="posisi" value={userDetails.posisi}/></label>
                                        <label>Keluarga Jabatan:<input className="border-0" type="text" name="keluargaJabatan" value={userDetails.keluargaJabatan}/></label>
                                        <label>Level:<input className="border-0"type="text" name="level" value={userDetails.level}/></label>
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
                                        <label>Entitas:<input className="border-0"type="text" name="entitas" value={userDetails.entitas}/></label>
                                        <label>Divisi:<input className="border-0"type="text" name="divisi" value={userDetails.divisi}/></label>
                                        <label>Kota:<input className="border-0"type="text" name="kota" value={userDetails.kota}/></label>
                                        <label>PIC HC:<input className="border-0"type="text" name="picHC" value={userDetails.picHC}/></label>
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
                                            {/* <Popup trigger={<button type="button"> Table</button>} position="right center">
                                                <div>
                                                    <ListTrainingSchedule 
                                                    trainingSchedule={this.handleTraining}
                                                    scheduleDetails={this.handleSchedule}/>
                                                </div>
                                            </Popup> */}
                                            
                                            <label>Subject:<input className="ml-3" type="text" name="" disabled="true" value={this.props.scheduleDetails}/></label>
                                            
                                            <label>Training Code:<input className="border-0"type="text" name="trainingCode" value={this.props.trainingSchedule.code}/></label>
                                            <label>Group:<input className="border-0"type="text" name="kelompok" value={this.props.trainingSchedule.kelompok}/></label>
                                            <label>Duration:<input className="border-0"type="text" name="duration" value={this.props.trainingSchedule.duration}/></label>
                                            <label>Investment(IDR):<input className="border-0"type="text" name="price" value={this.props.scheduleDetails.price}/></label>
                                            <label>Date:<input className="border-0"type="text" name="date" value={this.props.scheduleDetails.date}/></label>
                                            <label>Area Training:<input className="border-0"type="text" name="location" value={this.props.scheduleDetails.location}/></label>
                                            <label>Trainer:<input className="border-0"type="text" name="speakerName" value={this.props.scheduleDetails.speakerName}/></label>
                                            <label>Vendor:<input className="border-0"type="text" name="kelompok" value={this.props.scheduleDetails.vendor}/></label>
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
