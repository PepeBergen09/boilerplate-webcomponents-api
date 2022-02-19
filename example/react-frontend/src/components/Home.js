import { Component } from "react";


export default class Home extends Component{
    constructor(){
        super();
        this.state = {
            users: []
        }
    }

    render(){
        return(
            <>
                <h1>Home</h1>
            </>
        )
    }
}