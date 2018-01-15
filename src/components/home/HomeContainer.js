import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions, TouchableHighlight, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Initialize Firebase
import * as firebase from 'firebase';
// FIREBASE INITIALIZER HERE
// Initialize Firebase


const firebaseApp = firebase.initializeApp(firebaseConfig);


import Plus from './Plus';
import Search from './Search';
import House from './House';

const height = Dimensions.get('window').height



export default class HomeContainer extends Component<{}> {





  render() {
    const navigation = this.props.navigation;

    return (
      <LinearGradient
      colors={['#ff7b00','#ffa500','#ffd000']}
      start={{x: 0.2, y: 0}}
      style={styles.container}>

        <Plus navigation={navigation}/>

        <Search name={'Jamie'}/>

        <House navigation={navigation}/>

      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
