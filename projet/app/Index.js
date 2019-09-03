import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, ActivityIndicator } from 'react-native';
//import ViewContainer from './components/ViewContainer';
import Login from './scenes/Authentication/Login';
import Register from './scenes/Authentication/Register';
import Profile from './scenes/PageControl/Profile';
import Discover from './scenes/PageControl/Discover';
import PageController from './scenes/PageControl/PageControl';
import { Router, Scene } from 'react-native-router-flux';


export default class Index extends React.Component {

    render(){
        return (
            <Router>
                <Scene key={'root'}>
                    <Scene
                        key={"login"}
                        component={Login}
                        initial={true}
                        hideNavBar={true}
                    />
                    <Scene
                        key={"register"}
                        component={Register}
                        
                    />
                    <Scene
                        key={"pagecontrol"}
                        component={PageController}
                        
                    />
                </Scene>
            </Router>

            //<Register />
                
        );
    }
}

AppRegistry.registerComponent('Index', () => Index);