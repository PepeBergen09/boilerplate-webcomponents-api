import { Component } from "react";
import axios from 'axios';

export default class Posts extends Component{
    constructor(){
        super();
        this.state = {
            posts: [{
                title: '',
                body: ''

            }]
        }
    }

    componentDidMount(){
        const url = process.env.REACT_APP_API_URL + "posts";
        console.log(url)
        axios.get(url).then(res => {
            const posts = res.data;
            this.setState({ posts })
            console.log(posts)
        }).catch((err)=>{
            console.log(err)
        })
       
        console.log('Test')
        // console.log(process.env.REACT_APP_API_URL + "posts");
        console.log('End test')
    }

    render(){
        const posts = this.state.posts
        return(
            <>
            <h1>Posts</h1>
                <ul>{posts.map(e => { 
                    return(
                    <>

                    <li key={e.id}>{e.title} || {e.body}</li>
                   
                    </>
                        
                    ) 
                })}</ul>
            </>
        )
    }
}