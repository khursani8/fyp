//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._handlePress}>HomeScr!</Text>
      </View>
    )
  }

  _handlePress = () => {
    this.props.navigation.navigate('Search');
  }
}

//make this component available to the app
export default HomeScreen;
