import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Plus from './Plus';

export default class HomeContainer extends Component<{}> {
  render() {
    return (
      <LinearGradient
      colors={['#ff7b00','#ffa500','#ffd000']}
      start={{x: 0.2, y: 0}}
      style={styles.container}>

      <Plus />

      </LinearGradient>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
