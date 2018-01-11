import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions, TouchableHighlight, Image } from 'react-native';


import Plus from './Plus';
import Search from './Search';
import House from './House';

const height = Dimensions.get('window').height



export default class HomeContainer extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>

        <Plus />

        <Search name={'Jamie'}/>

        <House />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
