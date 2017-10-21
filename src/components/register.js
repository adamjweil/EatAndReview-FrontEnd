import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react';
import RegisterForm from './registerForm.js'

class Register extends React.Component {
  render() {
    return (
      <div className="register">
        <RegisterForm handleToken2={this.props.handleToken}
        switchPages={this.props.switchPages} stringTokenCallBack={this.stringTokenCallBack}/>
      </div>
    )
  }
}



export default Register
