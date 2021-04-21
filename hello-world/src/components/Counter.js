import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    clicFunc  = () => {
        this.setState(prevState =>
        {
            return {count: prevState.count + 1 }
        })
    }
    


    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.clicFunc)}
            </div>
        )
    }
}

export default Counter
