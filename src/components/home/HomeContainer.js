import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions, TouchableHighlight, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Plus from './Plus';
import Search from './Search';
import House from './House';

const height = Dimensions.get('window').height


export default class HomeContainer extends Component<{}> {

  render() {
    const navigation = this.props.navigation;
    const user = (this.props.navigation.state.params.user)

    console.log(user);

    return (
      <LinearGradient
      colors={['#ff7b00','#ffa500','#ffd000']}
      start={{x: 0.2, y: 0}}
      style={styles.container}>

        <Plus navigation={navigation}/>

        <Search name={user.user.email}/>

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
