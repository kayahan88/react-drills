import React, { Component } from 'react'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            usernameInput: '',
            passwordInput: ''
        }    
    }

    handleUsernameChange(value){
        this.setState({ usernameInput: value })
    }

    handlePasswordChange(value){
        this.setState({ passwordInput: value })
    }

    alertCredentials(){
        alert('Username: ' + this.state.usernameInput + '   ' + 'Password: ' + this.state.passwordInput)
    }

    render(){
        return (
        <div>
            <input placeholder="Username" onChange={event => this.handleUsernameChange(event.target.value)}/>
            <input placeholder="Password" onChange={event => this.handlePasswordChange(event.target.value)}/>
            <button onClick={() => this.alertCredentials()}> Login </button>
        </div>
        )
    }
}

export default Login


//Elements: input, input, button (onclick-alert)
