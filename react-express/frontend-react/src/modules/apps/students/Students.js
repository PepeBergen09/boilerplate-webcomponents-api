import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import CreateStudent from "./CreateStudent";
import ListStudents from "./ListStudents";
import EditStudent from "./EditStudent";
export default class Student extends Component {
  render() {
    return (
      <div>
        <p>Students</p>
      
<ul className="nav nav-tabs nav-fill mb-3" id="ex1" role="tablist">
  <li className="nav-item" role="presentation">
    <a
      className="nav-link active"
      id="ex2-tab-1"
      data-mdb-toggle="tab"
      href="#ex2-tabs-1"
      role="tab"
      aria-controls="ex2-tabs-1"
      aria-selected="true"
      >Students List</a>
  </li>
  <li className="nav-item" role="presentation">
    <a
      className="nav-link"
      id="ex2-tab-2"
      data-mdb-toggle="tab"
      href="#ex2-tabs-2"
      role="tab"
      aria-controls="ex2-tabs-2"
      aria-selected="false"
      >Create Student</a>
  </li>
  <li className="nav-item" role="presentation">
    <a
      className="nav-link"
      id="ex2-tab-3"
      data-mdb-toggle="tab"
      href="#ex2-tabs-3"
      role="tab"
      aria-controls="ex2-tabs-3"
      aria-selected="false"
      >Edit Student</a>
  </li>
</ul>

<div className="tab-content" id="ex2-content">
  <div
    className="tab-pane fade show active"
    id="ex2-tabs-1"
    role="tabpanel"
    aria-labelledby="ex2-tab-1"
  >
    <ListStudents/>
  </div>
  <div
    className="tab-pane fade"
    id="ex2-tabs-2"
    role="tabpanel"
    aria-labelledby="ex2-tab-2"
  >
    
    <CreateStudent/>
  </div>
  <div
    className="tab-pane fade"
    id="ex2-tabs-3"
    role="tabpanel"
    aria-labelledby="ex2-tab-3"
  >
    <EditStudent/>
  </div>
</div>

        {/* <Router>
            <Route to={'apps/students/list'} element={<ListStudents/>}/>
            <Route to={'apps/students/create'} element={<CreateStudent/>}/>
            <Route to={'apps/students/edit'} element={<EditStudent></EditStudent>}></Route>
        </Router> */}
      </div>
    );
  }
}