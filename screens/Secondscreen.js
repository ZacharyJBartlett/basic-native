import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator, navigate, navigation } from 'react-navigation';

import HomeScreen from '../App';


export default class Secondary extends React.Component {
    static navigationOptions = {
      title: 'Greetings!',
    };
    render() {
      return (
       <View>
      <Text>Page 2! congratulations!</Text>
      <Button
      title="Go Back"
      onPress={() =>
        this.props.navigation.navigate('Secondary')
    }
    />
    </View>
      );
    }
  }

  const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    Secondary: {screen: Secondary},
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
  