import React, { Component } from 'react';


export default class Cell extends React.Component {
    constructor(props) {
        super();
        this.state = {
            color: props.value
        }
    }

    increment = () => {
        this.setState({color: '#333'})
    }

    render() {
        return(
            <div className='cell' onClick={this.increment} style={{backgroundColor: this.state.color}}></div>
        )
    }
}