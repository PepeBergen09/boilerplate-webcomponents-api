import axios from "axios";

const { Component } = require("react");

export default class UserList extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: []
        }

    }

    componentDidMount(){
        const myUsers = axios.get('http://localhost:8080/app/users/')
        .then(res => {
            console.log("resdata", res.data);
            console.log("resdata", res.data.map((res,i)=>{
                return res
            }));
            this.setState({
              users: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          })
          console.log('my users', myUsers);
          
    }

 
    
    render(){
        let name = this.state.users.map((e)=> <p>{e.name}</p>)
        let email = this.state.users.map((e)=> <p>{e.email}</p>)
        return(
            <div className="py-5">
            <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <h2>Users List</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                     
                            {name}
                            
                        </td>
                        <th>{email}</th>
                  
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
            </div>
        )
    }
}