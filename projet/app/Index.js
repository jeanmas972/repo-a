import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, ActivityIndicator } from 'react-native';
//import ViewContainer from './components/ViewContainer';
import Login from './scenes/Authentication/Login';
import Register from './scenes/Authentication/Register';
import Profile from './scenes/PageControl/Profile';
import Discover from './scenes/PageControl/Discover';
import PageController from './scenes/PageControl/PageControl'
import * as firebase from 'firebase';


const config = {
  apikey: 'AIzaSyAoK8C81LlVVlmqRauoXtsZ2SPmzSsP1co',
  authDomain: 'my-awesome-project-9e92d.firebaseapp.com',
  databaseUrl: 'https://my-awesome-project-9e92d.firebaseio.com/',
  storageBucket: '',
  messagingSenderId: '',
};
firebase.initializeApp(config);


export default class Index extends React.Component {

    render(){
        return (

            <PageController />
                
        );
    }
}

AppRegistry.registerComponent('Index', () => Index);