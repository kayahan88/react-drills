import React, { Component } from 'react';
import ToDo from './Components/ToDo'

import './App.css';

class App extends Component {
  constructor(){
      super();
      this.state = {
          list: [],
          input: ''
      }

      this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleInputChange(value){
    this.setState({ input: value })
  }

  handleAddTask(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }

  render(){
    let list = this.state.list.map((element, index) => {
      return <ToDo key={index} task={element} />
    })

    return (
      <div className='ToDoList'>
        <h1>My To-Do List:</h1>

        <div>
          <input 
            placeholder={'Enter new task here'} 
            value={this.state.input} 
            onChange={event => this.handleInputChange(event.target.value)}/>

          <button onClick={this.handleAddTask}> Add Task </button>
        </div>

        <br />

        {list}
      </div>


    )
  }
}
export default App

//this component should pass down a task to the ToDo component. 