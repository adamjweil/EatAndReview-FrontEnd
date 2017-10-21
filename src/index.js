import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { AsyncStorage, Text, StyleSheet, View, TextInput, TouchableOpacity, StatusBar } from 'react';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
