import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput, TouchableOpacity, Image } from 'react-native';
import PageControl from 'react-native-page-control';
import ViewContainer from '../../components/ViewContainer';
import StatusbarBackground from '../../components/StatusbarBackground';

export default class PageController extends  React.Component {
    constructor(props){
        super(props)

        this.state = {
            currentPage: 0
        }
    }
    render() {
        return (
            <ViewContainer>
                <StatusbarBackground />
                <Text>
                    PageControl
                </Text>
                <PageControl
                    currentPage={this.state.currentPage}
                    numberOfPages={2}
                    pageIndicatorTintColor='grey'
                    currentPageIndicatorTintColor='black'
                
                />
            </ViewContainer>
        );
    }
}