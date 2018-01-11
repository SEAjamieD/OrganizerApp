import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Stack } from '../config/router';

import Loader from './Loader';
import HomeContainer from './home/HomeContainer';
import BoxNaming from './boxNaming/BoxNaming';
import SingleBoxContainer from './boxContents/SingleBoxContainer'

export default class OrganizerAppContainer extends Component<{}> {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    this.setState({isLoading: false});
  }


  render() {
    // this simulates loading
    // let that = this;
    // setTimeout(() => {that.setState({isLoading: false})}, 3000)
    if (this.state.isLoading === true) {
      return (
        <LinearGradient
        colors={['#ff7b00','#ffa500','#ffd000']}
        start={{x: 0.2, y: 0}}
        style={styles.container}>

          <Loader />

        </LinearGradient>
      )
    } else {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  }
})
