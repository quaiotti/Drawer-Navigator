import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class AboutScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'About',
    drawerIcon: ({ tintColor }) => (
      this.props.navigation.navigate('AboutScreen', { AboutScreen })
    ),
  };
  render() {
    return (
      
        AboutScreen
      
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }
});