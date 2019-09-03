import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView, ViewPagerAndroid } from 'react-native';
import PageControl from 'react-native-page-control';
import ViewContainer from '../../components/ViewContainer';
import StatusbarBackground from '../../components/StatusbarBackground';
import Profile from './Profile';
import Discover from './Discover';

export default class PageController extends  React.Component {
    constructor(props){
        super(props)

        this.state = {
            currentPage: 0,
            width: Dimensions.get('window').width
        }
        this._onPageControlValueChange = this._onPageControlValueChange.bind(this)
        this._onScroll = this._onScroll.bind(this)
    }
    _onPageControlValueChange(currentPage) {
        this.refs.ScrollView.scrollResponderScrollTo({x: this.state.width = currentPage, y: 0, animated: true});
    }

    _onScroll({nativeEvent}) {
        let currentPage = Math.round(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

        if(this.state.currentPage !== currentPage) {
            this.setState({currentPage});
        }
    }    

    render() {
        return (
            <ViewContainer>
                <StatusbarBackground />
                <View style={styles.scrollViewContainer}> 
                    <ScrollView 
                        horizontal={true}
                        ref="ScrollView"
                        onScroll={this._onScroll}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}

                    >
                        <View style={[styles.scrollScene, {width: this.state.width}]}> 
                            <Discover />
                        </View> 
                        <View style={[styles.scrollScene, {width: this.state.width}]}> 
                            <Profile />
                        </View> 
                    </ScrollView>
                </View> 
                <View style={styles.pageControl}>
                <PageControl
                    currentPage={this.state.currentPage}
                    numberOfPages={2}
                    pageIndicatorTintColor='grey'
                    currentPageIndicatorTintColor='black'
                    onValueChange={this._onPageControlValueChange}
                
                />
            </View>
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({
    pageControl: {

    },
    scrollViewContainer: {
        flex: 1

    },
    scrollScene: {

    }
});