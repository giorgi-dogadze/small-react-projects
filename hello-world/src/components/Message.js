import React, { Component } from 'react'

export class Message extends Component {
        constructor(){
            super();
            this.state = 
            {
                message:"hi there"
            }
        }

        handler()
        {
            this.setState(
                {
                    message:"how you doin?"
                }
            )
        }
        render() {
        return (
            <div>
            <div>
                <h1>{this.state.message}</h1>
            </div>
            <button onClick = {() => this.handler()}>Click me</button>
            </div>
        )
    }
}

export default Message
