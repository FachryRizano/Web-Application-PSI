import React, { Component, Fragment } from 'react';
import authService from '../../services/auth/auth.service';
import TrainingRequestService from '../../services/TrainingRequest/TrainingRequestService';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
class TrainingRequestComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            user:authService.getCurrentUser(),
            userDetails:[]
        }
    }

    componentDidMount(){
        TrainingRequestService.getUserDetails(this.state.user.id).then(res=>{
            this.setState({userDetails:res.data})
            
        })
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
        const userDetails = this.state.userDetails
        return (
            <>
                {/*menu disebelah kiri */}
                <div className="container col-md-3 text">
                    
                    <div className="row d-block border">
                        <p>New Request</p>
                        <p>By Employee</p>
                        <p>By Topics</p>
                        <p>By Company</p>
                        <p>By Location</p>
                        <p>By Status</p>
                    </div>

                    <div className="row d-block border">
                        <p>E-Certificate</p>
                        <p>My Certificate</p>
                        <p>By Topic</p>
                    </div>
                    
                    <div className="row d-block border">
                        <p>Training Evaluation</p>
                        <p>Open</p>
                        <p>Close</p>
                    </div>
                </div>

                <div className="container pt-3 col-md-9">
                    {/*button diatas user profile */}
                    <div className="container bg-danger">
                            <button className="bg-light">Save</button>
                            <button className="bg-light">Submit</button>
                            <button className="bg-light">Cancel Request</button>
                            <button className="bg-light">Renotify to Karyawan/PIC HC</button>
                            <a href="/">Go to bottom</a>
                    </div>
                    
                    {/* user profile */}
                    <div className="container pt-4">
                        
                        
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
                                        <label>Subjectt:<input type="text" name="" /></label>    
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
            </>
        );
    }
}

export default TrainingRequestComponent;