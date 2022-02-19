import axios from 'axios';

const { Component } = require("react");

export default class Signup extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            email: ''
        }
    }
    onSubmit(e){
        e.preventDefault()
        const userObject = {
            name: this.state.name,
            email: this.state.email
        }

        axios.post('http://localhost:8080/users', userObject)
            .then(res => {
                console.log(res.data)
            })

        this.setState({
            name: '',
            email: ''
        })

    }
    render(){
        return(
            <div>
            <main>
                <div className="py-5 text-center">
                    <div className="row">
                        <div className="col-lg-5">
                        <h1>Signup</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" id="name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                        </div>
                    </div>
                </div>
            </main>

            </div>
        )
    }
}