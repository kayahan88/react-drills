import React, { Component } from 'react';

class ToDo extends Component {
    render(){
        return(
            <div>{this.props.task}</div>
        )
    }
}
export default ToDo

//this component should receive tasks from the App component and display them