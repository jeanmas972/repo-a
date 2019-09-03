import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput, TouchableOpacity, Image } from 'react-native';
import ViewContainer from '../../components/ViewContainer';
import StatusbarBackground from '../../components/StatusbarBackground';
//import { styles } from './styles';

export default class Discover extends  React.Component {
    render(){
        return (
            <ViewContainer>
                <StatusbarBackground />
               
                    <Text>Discover View  </Text>
                
            </ViewContainer>
        );
    }
}

export const styles = StyleSheet.create({

});