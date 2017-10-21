import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react';

// const ACCESS_TOKEN = 'access_token';

class RegisterForm extends React.Component {
  constructor(){
    super();
    this.state = { user: {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: [],
      showProgress: false
    }};
  }
  handleInputChange(name, val) {
    const user = this.state.user;
    user[name] = val;
    this.setState({user: user})
  }

  onChangeUsername = this.handleInputChange.bind(this, "username")
  onChangeEmail = this.handleInputChange.bind(this, "email")
  onChangePassword = this.handleInputChange.bind(this, "password")
  onChangePasswordConfirmation = this.handleInputChange.bind(this, "password_confirmation")

  async handlePress(){
    this.setState({showProgress: true})
    const { user } = this.state

  // var accessToken = await fetch('https://adams-eatandreview.herokuapp.com/users', {
  var accessToken = await fetch('http://localhost:3001/users', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user})
  })
  .then(function(response){
    return response.json()
    console.log(response)
  }).then((obj)=> {
    console.log(obj)
  })
  .catch(error => console.error("fetch error: ", error))

    // let accessToken = responseJson.access_token
  await AsyncStorage.setItem('access_token', accessToken, (err)=> {
    if(err){
      console.error("an error");
      console.error(err);
    }
  })

  this.props.handleToken2()
  this.props.stringTokenCallBack()

    var value = await AsyncStorage.getItem('access_token')
    console.log(value)
}

handleNewUserSubmit = this.handlePress.bind(this)
  //
  // componentDidMount(){
  //   fetch('https://adams-eatandreview.herokuapp.com/restaurants')
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then((obj) => {
  //     this.setState({restaurants: obj})
  //     console.log(obj)
  //   })
  // }

  render() {
    return (
      <div className="register">
        <textarea
        onChangeText={this.onChangeUsername}
        placeholder="Username"
        ref={(input) => this.usernameInput = input}/>

        <textarea
        onChangeText={this.onChangeEmail}
        placeholder="Email"
        ref={(input) => this.emailInput = input}/>

        <textarea
        onChangeText={this.onChangePassword}
        placeholder="Password"
        ref={(input) => this.passwordInput = input}/>

        <textarea
        onChangeText={this.onChangePasswordConfirmation}
        placeholder="Password Confirmation"
        ref={(input) => this.passwordInput = input}/>

        <button
          onClick={this.handleNewUserSubmit}
          text="Register">Register
          </button>
      </div>
    )
  }
}



export default RegisterForm
