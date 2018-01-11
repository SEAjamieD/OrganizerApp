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

        <View style={styles.header}>
          <Text h2 style={styles.headerText}>{this.props.navigation.state.params.boxName} box</Text>
        </View>

      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: height / 3.75,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },
  headerText: {
    fontFamily: 'DDCHardware-Regular',
    fontSize: 35,
    color: 'white',
    textShadowColor: 'rgba(51, 51, 51, .2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  }
})
