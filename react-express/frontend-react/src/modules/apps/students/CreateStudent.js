import React, { Component } from "react";
import axios from "axios";

export default class CreateStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
        }

        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeStudentName(e){
        this.setState = {
            name: e.target.value
        }
    }
    onChangeStudentEmail(e){
        this.setState={
            email: e.target.value
        }
    }
    onChangeStudentRollno(e){
        this.setState = {
            rollno: e.target.value
        }
    }

    onSubmit(e){
        e.preventDefault();
        const studentObject = {
            name: this.state.name,
            email:  this.state.email,
            rollno: this.state.rollno
        };
        axios.post('http://localhost:8080/app/students/create', studentObject)
        .then(res => console.log(res.data));
        this.setState({name:'', email:'', rollno:''})
    }
  render() {
    return (
    
      <div className="container mt-5">
      <div>
          <h2 className="text-center mt-5 mb-5">Create student</h2>
      </div>
      <div className="row position-relative">
      <div className="col-2"></div>
          <div className="col-8">
          <form onSubmit={this.onSubmit}>
            <div className="form-outline mb-4">
                <input type="text" id="form1Example1" className="form-control" />
                <label className="form-label" htmlFor="form1Example1">Name</label>
            </div>


            <div className="form-outline mb-4">
            <input type="email" id="form1Example2" className="form-control" />
            <label className="form-label" htmlFor="form1Example2">Email</label>
            </div>
            <div className="form-outline mb-4">
            <input type="text" id="form1Example2" className="form-control" />
            <label className="form-label" htmlFor="form1Example2">Roll No</label>
            </div>


            <div className="row mb-4">
            <div className="col d-flex justify-content-center">
            
                <div className="form-check">
              
                </div>
            </div>

         
            </div>


<button type="submit" className="btn btn-primary btn-block">Create Student</button>
</form>
          </div>
          <div className="col-2"></div>
      </div>
       
      </div>
    );
  }
}