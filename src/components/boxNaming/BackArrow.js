import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';


export default class BackArrow extends Component<{}> {

  _goBack = () => {
    this.props.navigation.goBack(null);
    }

  render() {

    return (

        <TouchableHighlight style={styles.button} onPress={this._goBack} underlayColor="rgba(51,51,51,.1)">
            <View style={styles.container}>
              <View style={styles.top} />
              <View style={styles.bottom} />
              <View style={styles.horizontal} />
            </View>
        </TouchableHighlight>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    marginTop: 35,
    left: 25,
    width: 80,
    height: 80,
  },
  container: {
    position: 'absolute',
    width: 80,
    height: 80,
    overflow: 'hidden',
  },
  horizontal: {
    position: 'absolute',
    top: 30,
    width: 80,
    height: 20,
    backgroundColor: 'white',
    shadowColor: '#333333',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  top: {
    position: 'absolute',
    top: 12,
    width: 40,
    height: 20,
    transform: [{ rotate: '-45deg' }],
    backgroundColor: 'white',
    shadowColor: '#333333',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  bottom: {
    position: 'absolute',
    bottom: 12,
    width: 40,
    height: 20,
    transform: [{ rotate: '45deg' }],
    backgroundColor: 'white',
    shadowColor: '#333333',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  }
})
