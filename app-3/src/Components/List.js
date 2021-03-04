import React, { Component } from 'react';

class List extends Component {
    constructor(){
        super();
        this.state = {
            array: ['this', 'is', 'an', 'array', 'of', 'strings'],
            filteredString: ''
        }
    }

    handleChange(value){
        this.setState({ filteredString: value })
    }


    render(){
        let filteredString = this.state.array
        .filter((element, index) => {
            return element.includes(this.state.filteredString)
        })
        .map((element, index) => {
            return <h2 key={index}>{element}</h2>
        })

        return (
            <div className="App">
                <input onChange={e => this.handleChange(e.target.value)} />
                {filteredString}
            </div>
        )

        }
}

export default List

//we need to only display the words that contain the letters of the userInput
//if there is no userInput, display the full array