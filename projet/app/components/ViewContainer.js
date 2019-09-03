import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
//import Authentication from'../scenes/Authentication';


export default class ViewContainer extends React.Component {

    render(){
        return (
            <View style={styles.viewContainer}>
                {this.props.children}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    }
});

AppRegistry.registerComponent('ViewContainer', () => ViewContainer);