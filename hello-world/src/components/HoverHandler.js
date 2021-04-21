import React, { Component } from 'react'

export class HoverHandler extends Component {




    render() { 
        const {count, clickFunc} = this.props
        return (
           
            <h2 onMouseOver = {clickFunc}>Hovered {count} times</h2>
        )
    }
}

export default HoverHandler
