import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Greetings!',
  };
  render() {
    return (
      <View>
    <Text>Welcome to your homepage!</Text>;
    </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: {screen: HomeScreen},
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
