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
            user:authService.getCurrentUser()

        }
    }

    componentDidMount(){
        TrainingRequestService.getUserDetails(this.state.user.id).then(res=>{
            console.log(res.data)
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
        return (
            <Fragment>
                <form>
                    <div className="container bg-light">

                        <div className="row">
                            <label>Name:<input type="text" name="name" /></label>

                            <div className="col-md-6">
                                <label>Golongan:<input type="text" name="golongan" /></label>
                                <label>NIK:<input type="text" name="NIK" /></label>
                                <label>Posisi:<input type="text" name="posisi" /></label>
                                <label>Keluarga Jabatan:<input type="text" name="keluargaJabatan" /></label>
                                <label>Level:<input type="text" name="level" /></label>
                                <label>No.HP:<input type="text" name="noHP" /></label>
                                <label>Ukuran Kaos:<input type="text" name="kaos" /></label>
                            </div>

                            <div className="col-md-6">
                                <label>Entitas:<input type="text" name="entitas" /></label>
                                <label>Divisi:<input type="text" name="divisi" /></label>
                                <label>Kota:<input type="text" name="kota" /></label>
                                <label>PIC HC:<input type="text" name="picHC" /></label>
                            </div>
                        </div>

                        <div className="row">
                            <label>Periode:<input type="text" name="periode" /></label>
                            <label>:<input type="text" name="" /></label>
                            <label>:<input type="text" name="" /></label>
                            <label>:<input type="text" name="" /></label>
                            <label>:<input type="text" name="" /></label>
                            <label>:<input type="text" name="" /></label>
                            <label>:<input type="text" name="" /></label>
                            <label>:<input type="text" name="" /></label>
                            <label>:<input type="text" name="" /></label>
                            <label>:<input type="text" name="" /></label>
                        </div>


                    </div>


                </form>
            </Fragment>
        );
    }
}

export default TrainingRequestComponent;
