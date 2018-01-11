import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';

export default class Plus extends Component<{}> {

  addBox = () => {
    this.props.navigation.navigate('BoxNaming');
  }

  render() {

    return (
        <TouchableHighlight style={plusStyles.button} underlayColor="rgba(51,51,51,.1)" onPress={this.addBox}>
          <View style={plusStyles.plusContainer}>
            <View style={plusStyles.plusHorizontal} />
            <View style={plusStyles.plusVertical} />
          </View>
        </TouchableHighlight>
    );
  }
}

const plusStyles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: 80,
    height: 80,
    right: 25,
    marginTop: 35,
  },
  plusContainer: {
    position: 'absolute',
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
    shadowColor: '#333333',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

  },
  plusVertical: {
    position: 'absolute',
    left: 29,
    width: 20,
    height: 80,
    backgroundColor: 'white',
    shadowColor: '#333333',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  }
})
