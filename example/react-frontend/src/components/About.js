import { Component } from "react";


export default class About extends Component{
    constructor(){
        super();
        this.state = {
            users: []
        }
    }

    render(){
        return(
            <>
                <h1>About</h1>
            </>
        )
    }
}