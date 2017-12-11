import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput, TouchableOpacity, Image } from 'react-native';
import ViewContainer from '../../components/ViewContainer';
import StatusbarBackground from '../../components/StatusbarBackground';
//import { styles } from './styles';

export default class Profile extends  React.Component {
    render(){
        return (
            <ViewContainer>
                <StatusbarBackground />
                <View style={styles.profilePicture}>
                    <Image />
                </View>
                <View style={styles.name}>
                    <Text style={styles.nameText}>Michael  </Text>
                </View>
            </ViewContainer>
        );
    }
}

export const styles = StyleSheet.create({

});