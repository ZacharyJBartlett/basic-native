import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator, navigate, navigation } from 'react-navigation';
import Secondary from '../basic-native/screens/Secondscreen';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Greetings!',
  };
  render() {
    ;
    return (
     <View>
    <Text>Welcome to your homepage!</Text>
    <Button
    title="Click here for page 2"
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
