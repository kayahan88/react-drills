import React, { Component } from 'react';


class TextBox extends Component {
    constructor(){
        super();
        this.state = {
            userInput: ''
        }
    }

    handleChange(value){
        this.setState({ userInput: value })
    }

    render(){
        return (
            <div className='container'>
                <input onChange={ (e) => this.handleChange(e.target.value)}/>
                <br></br>
                <span>{this.state.userInput}</span>
            </div>
        )
    }
}

export default TextBox