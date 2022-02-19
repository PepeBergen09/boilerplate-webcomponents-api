import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreateUser from "./CreateUser";
import UserRouter from "./UserRouter";



export default class HomeUsers extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <>
                <h1>HomeUsers</h1>
                <Link to={'apps/users/CreateUser'}>Create User</Link>
                {/* <UserRouter></UserRouter> */}
                <BrowserRouter>
                    <Routes>
                        <Route path="apps/users/CreateUser" element={CreateUser} ></Route>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}