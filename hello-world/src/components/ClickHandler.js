import React, { Component } from 'react'

export class ClickHandler extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }

    // clickFunc = () => {
    //     this.setState(prevState => {
    //         return  {count: prevState.count + 1}
    //     })
    // }

    render() {
        const {count, clickFunc} = this.props
        return  <button onClick = {clickFunc}>Clicked {count} times </button>

    }
}

export default ClickHandler
