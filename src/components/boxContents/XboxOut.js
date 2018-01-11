import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';

export default class XboxOut extends Component<{}> {

  goHome = () => {
    this.props.navigation.navigate('Home');
  }

  render() {

    return (
        <TouchableHighlight style={styles.button} underlayColor="rgba(51,51,51,.1)" onPress={this.goHome}>
          <View style={styles.xContainer}>
            <View style={styles.xHorizontal} />
            <View style={styles.xVertical} />
          </View>
        </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    marginTop: 35,
    left: 25,
    width: 80,
    height: 80,
  },
  xContainer: {
    position: 'absolute',
    width: 80,
    height: 80,
    transform: [{ rotate: '45deg' }],
    overflow: 'hidden',
  },
  xHorizontal: {
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
  xVertical: {
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
