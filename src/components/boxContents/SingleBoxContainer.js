import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions, TouchableHighlight, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const height = Dimensions.get('window').height

import AddItemPlus from './AddItemPlus';
import XboxOut from './XboxOut';


export default class SingleBoxContainer extends Component<{}> {


  render() {
    const navigation = this.props.navigation;
    return (
      <LinearGradient
      colors={['#ff7b00','#ffa500','#ffd000']}
      start={{x: 0.2, y: 0}}
      style={styles.container}>

        <AddItemPlus navigation={navigation} />
        <XboxOut navigation={navigation}/>


      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
