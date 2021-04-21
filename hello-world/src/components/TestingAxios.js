import React, { Component } from 'react'
import axios from 'axios'

export class TestingAxios extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts: [],
            title: '',
            userID: '',
            body: ''
        }

        this.getTitles();
    }
    
    // componentDidMount(){
    //     axios.get('http://jsonplaceholder.typicode.com/posts').then(res => {
    //         this.setState({
    //             posts: res.data
    //         })
    //     })
    // }

    changeHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        // console.log(this.state);
        axios.post('http://jsonplaceholder.typicode.com/posts',this.state).then(res => console.log(res.data))
        this.getTitles();
    }

    getTitles = () =>{
        let data  = axios.get('http://jsonplaceholder.typicode.com/posts').then(res => {
            this.setState({
                posts:res.data
            })
        })

    }

    render() {
        const {userID, title, body } = this.state
        return (

            <div>
                <form  onSubmit = {this.submitHandler}>
                    <label>input ID</label>
                    <input type = "text" name = "userID" value = {userID} onChange = {this.changeHandler}></input><br/>
                    
                    <label>input Title</label>
                    <input type = "text" name = "title" value = {title} onChange = {this.changeHandler}></input><br/>
                    
                    <label>input Body</label>
                    <input type = "text" name = "body" value = {body} onChange = {this.changeHandler}></input><br/>
                    
                    <button type = "submit">Click Me</button>
                </form>
                <h2>{userID}</h2>
                <h2>{title}</h2>
                <h2>{body}</h2>

                
                {this.state.posts.map(post => <div key = {post.id}>{post.title}</div>)}
            </div>
        )
    }
}

export default TestingAxios
