import React, { Component } from 'react';

class List extends Component {
    constructor(){
        super()
        this.state = {
            array: ['string1', 'string2', 'string3'],
        }
    }

    // makeH2(){
    //     let displayArray = []
    //     this.state.array.map((element, index) => {
    //         displayArray.push(<h2 key={index}>{element}</h2>)
    //         return displayArray
    //     })
    //     this.setState({ displayArray: displayArray })
    // } 
    
    render(){
        let arrayDisplay = this.state.array.map((element, index) => {
            return <h2 key={index}>{element}</h2>
        })
        return <div className="App">{arrayDisplay}</div>
    }
}

export default List