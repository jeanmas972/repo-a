import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TouchableOpacity, ActivityIndicator, TextInput, Image } from 'react-native';
import ViewContainer from '../../components/ViewContainer';
import StatusbarBackground from '../../components/StatusbarBackground';
import { styles } from './styles';

export default class Login extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
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

                    <View style={styles.login}>
                        <TouchableOpacity style={styles.loginButton} >
                            <Text style={styles.loginBunttonText}>LOG IN</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.register}>
                        <TouchableOpacity style={styles.registerButton} >
                            <Text style={styles.registerBunttonText}>create account</Text>
                        </TouchableOpacity>
                    </View>
                
                </View>
            </ViewContainer> 
        );
    }
}



AppRegistry.registerComponent('Login', () => Login);