import React from 'react';
import { AppRegistry, View , Text} from 'react-native';
import Index from './app/Index';

export default class App extends React.Component {

  render(){
    return (
     /*
      <View>

        <Text>
           Hello
        </Text>
        
      </View>
      */

      <Index />
    );
  }
}

AppRegistry.registerComponent('App', () => App);
