import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions } from 'react-native';


const height = Dimensions.get('window').height

export default class BoxNaming extends Component<{}> {
  render() {
    return (
      <View style={searchStyles.searchContainer}>
        <Text h2 style={searchStyles.textH2}>Name Your Box...</Text>
        <TextInput style={searchStyles.searchInput} />
      </View>
    );
  }
}

const searchStyles = StyleSheet.create({
  searchContainer: {
    marginTop: height / 2.7,
    height: height / 5,
    paddingHorizontal: 20,
  },
  searchInput: {
    height: 60,
    borderBottomColor: 'white',
    borderBottomWidth: 3,
    fontSize: 30,
    fontFamily: 'DDCHardware-Regular',
    color: 'white',
    lineHeight: 30,
  },
  text: {
    fontFamily: 'DDCHardware-Regular',
    color: 'white',
    fontSize: 30,
    textShadowColor: 'rgba(51, 51, 51, .2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
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
