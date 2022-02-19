import axios from "axios";
import { Component } from "react";

export default class Fetch extends Component {
    constructor(){
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        axios.get('http:localhost:8080/users')
            .then((res)=>{
                this.setState = {
                    data: res.data  
                }
            })
            .catch(error=>{console.log(error)})
    }
    render(){
        return(
            <>
                <h1>Fetch</h1>
            </>
        )
    }
 
}