import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';

export default class ContactScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Contact',
    drawerIcon: ({ tintColor }) => (
      this.props.navigation.navigate('ContactScreen', { ContactScreen })
    ),
  };

  render() {
    return (
      
        ContactScreen
      
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }
});