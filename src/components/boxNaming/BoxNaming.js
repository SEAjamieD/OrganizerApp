import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions } from 'react-native';

import BackArrow from './BackArrow';

const height = Dimensions.get('window').height

export default class BoxNaming extends Component<{}> {
  render() {
    return (
      <View style={{flex: 1}}>

        <BackArrow />

        <View style={styles.namingContainer}>
            <Text h2 style={styles.textH2}>Name Your Box...</Text>
            <TextInput style={styles.namingInput} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  namingContainer: {
    marginTop: height / 2.7,
    height: height / 5,
    paddingHorizontal: 20,
  },
  namingInput: {
    height: 60,
    borderBottomColor: 'white',
    borderBottomWidth: 3,
    fontSize: 30,
    fontFamily: 'DDCHardware-Regular',
    color: 'white',
    lineHeight: 30,
  },
  textH2: {
    fontFamily: 'DDCHardware-Regular',
    color: 'white',
    fontSize: 25,
    textShadowColor: 'rgba(51, 51, 51, .2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  }
})
