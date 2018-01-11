import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';


export default class BackArrow extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.top} />
          <View style={styles.bottom} />
          <View style={styles.horizontal} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 25,
    marginTop: 35,
    width: 80,
    height: 80,
    overflow: 'hidden',
  },
  horizontal: {
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
  top: {
    position: 'absolute',
    top: 12,
    width: 40,
    height: 20,
    transform: [{ rotate: '-45deg' }],
    backgroundColor: 'white',
    shadowColor: '#333333',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  bottom: {
    position: 'absolute',
    bottom: 12,
    width: 40,
    height: 20,
    transform: [{ rotate: '45deg' }],
    backgroundColor: 'white',
    shadowColor: '#333333',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  }
})
