import React, {Component} from 'react'

class Subscriber extends Component{

    constructor(props)
    {

        super()
        this.state = 
        {
            message: "hello gio"
        }
    }

    ChangeMessage()
    {
        this.setState(
        {
            message:"thank you for youe Subscription"
        })
    }

    render() {
            return (
                <div>
                    <h1>{this.state.message}</h1>
                    <button name = "clicMe" onClick = {() => this.ChangeMessage()} >ClickMe</button>
                </div>
            )
        
    }
}

export default Subscriber