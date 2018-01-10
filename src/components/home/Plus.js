import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';


export default class Plus extends Component<{}> {
  render() {
    return (
        <View style={plusStyles.plusContainer}>
          <View style={plusStyles.plusHorizontal} />
          <View style={plusStyles.plusVertical} />
        </View>
    );
  }
}

plusStyles = StyleSheet.create({
  plusContainer: {
    position: 'absolute',
    right: 25,
    marginTop: 35,
    width: 80,
    height: 80,
    overflow: 'hidden',
  },
  plusHorizontal: {
    position: 'absolute',
    top: 30,
    width: 80,
    height: 20,
    backgroundColor: 'white',
  },
  plusVertical: {
    position: 'absolute',
    left: 29,
    width: 20,
    height: 80,
    backgroundColor: 'white',
  }
})
