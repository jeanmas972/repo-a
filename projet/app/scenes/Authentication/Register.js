import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput, TouchableOpacity } from 'react-native';
import ViewContainer from '../../components/ViewContainer';
import StatusbarBackground from '../../components/StatusbarBackground';
import { styles } from './styles';
import Login from './Login';
import { firebaseRef } from '../../services/Firebase';
import { Actions } from 'react-native-router-flux';

export default class Register extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            verifyPassword: ''
        }
        this._register = this._register.bind(this)
    }

    _register() {

       // var Action =  Actions.pagecontrol();

        if(this.state.password == this.state.verifyPassword) {
            firebaseRef.auth().createUserAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
               // console.log(error.code);
               // console.log(error.message)
                var errorCode = error.code;
                if(error){
                    console.log(error.code, error.message );
                }/*
                if(errorCode == 'auth/email-already-in-use') {
                    console.log('An account with the given email address already exists. ');
                } 
                */
                else {
                    console.log('Register');
                    Actions.pagecontrol();
                }
                console.log('error');
                console.log(error.code, error.message );
               // Actions.pagecontrol();
            });

           // Actions.pagecontrol();

        } else {
            console.log("Password did not match");
        }
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

                    <TextInput 
                        style={styles.textInput} 
                        onChangeText={ (text) => this.setState({verifyPassword: text })}
                        value={this.state.verifyPassword}
                        placeholder="VERIFY PASSWORD"
                        placeholderTextColor="black"
                        secureTextEntry={true}
                        autoCorrect={false}
                        returnKeyType="go"
                    />
                    <View style={styles.register}>
                        <TouchableOpacity style={styles.registerButton} onPress={this._register}>
                            <Text style={styles.registerBunttonText}>REGISTER</Text>
                        </TouchableOpacity>
                    </View>
                
                </View>
            </ViewContainer> 
        );
    }
}



AppRegistry.registerComponent('Register', () => Register);