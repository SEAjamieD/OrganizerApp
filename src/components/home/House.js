import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native';

import house from '../../../assets/house.png';



export default class House extends Component<{}> {

  goToAllBoxes = () => {
    this.props.navigation.navigate('AllBoxes');
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableHighlight style={{borderRadius: 100,
        width: 160, height: 160, overflow: 'hidden',
        justifyContent: 'center', alignItems: 'center',
        marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'rgba(51, 51, 51, .1)',
      }} onPress={this.goToAllBoxes}>
        <Image source={house} style={{width: 120, height: 120}} />
      </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
