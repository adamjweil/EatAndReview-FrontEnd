import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Restaurant from './components/restaurant.js'
import Register from './components/register.js'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      accessToken: false,
      loginOrRegister: false
    }
  }

  stringTokenCallBack = (token) => {
  console.log('callback success!: ', token)
  }

  accessTokenCallBack = () => {
    this.setState({accessToken: true})
  }

  switchLoginPage = () => {
  this.setState({loginOrRegister: !this.state.loginOrRegister})
  }

  render() {
    const { accessToken, loginOrRegister, token } = this.state
    if (accessToken){
      return (
        <div className="App">
          <Restaurant />
        </div>
      )
    } else {
      return(
        <div>
          <Register switchPages={this.switchLoginPage} handleToken={this.accessTokenCallBack} stringTokenCallBack={this.stringTokenCallBack}/>
        </div>
      )
    }
  }
}

export default App;
