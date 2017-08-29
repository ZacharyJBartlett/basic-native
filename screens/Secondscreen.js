import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator, navigate, navigation } from 'react-navigation';


export default class Secondary extends React.Component {
    static navigationOptions = {
      title: 'Greetings!',
    };
    render() {
      return (
       
      <Text>Page 2! congratulations!</Text>
    
      );
    }
  }

  const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    Secondary: {screen: SecondScreen},
  });
  
  AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  