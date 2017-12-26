import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, ActivityIndicator, TextInput, Image } from 'react-native';
import ViewContainer from '../../components/ViewContainer';
import StatusbarBackground from '../../components/StatusbarBackground';
import { styles } from './styles';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { firebaseRef } from '../../services/Firebase';

export default class Login extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            status: ''
        }

        this._login = this._login.bind(this);
        this._register = this._register.bind(this);
    }

    _login() {
        
        firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error){
            console.log(error.code)
            console.log(error.message)
        });

        Actions.pagecontrol();

        firebaseRef.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser) {
                console.log(firebaseUser);
                firebaseRef.database().ref(`/users/${firebaseUser.uid}/profile`).set({
                    //name: firebaseUser.displayName,
                    email: firebaseUser.email
                });
            } else {
                console.log('not logged in');
            }
        });
        
    }

    _register() {
        Actions.register()
    }

    render(){
        return (
            <ViewContainer>          
                <View>
                
                    <StatusbarBackground /> 
                    <TextInput 
                        style={styles.textInput} 
                        onChangeText={ (text) => this.setState({email: text })}
                        value={this.state.email}
                        placeholder="EMAIL"
                        placeholderTextColor="black"
                        autoCorrect={false}
                        returnKeyType="next"
                    />
                    
                    <TextInput 
                        style={styles.textInput} 
                        onChangeText={ (text) => this.setState({password: text })}
                        value={this.state.password}
                        placeholder="PASSWORD"
                        placeholderTextColor="black"
                        secureTextEntry={true}
                        autoCorrect={false}
                        returnKeyType="go"
                    />

                    <View style={styles.login}>
                        <TouchableOpacity style={styles.loginButton} onPress={this._login}>
                            <Text style={styles.loginBunttonText}>LOG IN</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.register}>
                        <TouchableOpacity style={styles.registerButton}  onPress={this._register}>
                            <Text style={styles.registerBunttonText}>create account</Text>
                        </TouchableOpacity>
                    </View>
                
                </View>
            </ViewContainer> 
        );
    }
}



AppRegistry.registerComponent('Login', () => Login);