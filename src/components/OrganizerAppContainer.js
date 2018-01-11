import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Stack } from '../config/router';

import Loader from './Loader';
import HomeContainer from './home/HomeContainer';
import BoxNaming from './boxNaming/BoxNaming';

export default class OrganizerAppContainer extends Component<{}> {

  render() {
    return (
      <LinearGradient
      colors={['#ff7b00','#ffa500','#ffd000']}
      start={{x: 0.2, y: 0}}
      style={styles.container}>

        <Stack />

      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  }
})
