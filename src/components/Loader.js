import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Loader extends Component<{}> {
  render() {
    return (
      <LinearGradient
      colors={['#ff7b00','#ffa500','#ffd000']}
      start={{x: 0.2, y: 0}}
      style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </LinearGradient>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 50,
    fontFamily: 'DDCHardware-Regular',
  }
})
