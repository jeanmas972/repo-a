import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';


export default class StatusbarBackground extends React.Component {

    render(){
        return (
            <View style={styles.statusbarBackground}>
                
            </View>
        );
    }
}


const styles = StyleSheet.create({
    statusbarBackground: {
        height: 20,
        backgroundColor: 'blue',
        marginBottom: 40
    }
    
});

AppRegistry.registerComponent('StatusbarBackground', () => StatusbarBackground);