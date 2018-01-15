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
            isAuthenticated: false,
            email: '',
            password: '',
            verifyPassword: '',
            user: null,
        }
        this._register = this._register.bind(this)
    }

    _register = () => {
        if(this.state.password == this.state.verifyPassword) {
            firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((loggedInUser) => {
                this.setState({user: loggedInUser});
                console.log(`Register with user`)
                Actions.pagecontrol();
            }).catch((error) => {
                console.log(error.code, ':', error.message );
            });

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