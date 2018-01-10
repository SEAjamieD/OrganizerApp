import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions } from 'react-native';


const height = Dimensions.get('window').height

export default class Search extends Component<{}> {
  render() {
    return (
      <View style={searchStyles.searchContainer}>
        <Text style={searchStyles.text}>Hi, {this.props.name}</Text>
        <Text h2 style={searchStyles.textH2}>Whatcha lookin for?</Text>
        <TextInput style={searchStyles.searchInput} />
      </View>
    );
  }
}

searchStyles = StyleSheet.create({
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
  },
  textH2: {
    fontFamily: 'DDCHardware-Regular',
    color: 'white',
    fontSize: 25
  }
})
