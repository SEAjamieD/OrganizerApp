import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const setWidth = width - 40;

export default class Login extends Component<{}> {

  login = () => {
    console.warn("logging in")
  }

  render() {

    return(
      <LinearGradient
      colors={['#ff7b00','#ffa500','#ffd000']}
      start={{x: 0.2, y: 0}}
      style={styles.container}>



        <TouchableHighlight style={styles.button} onPress={this.login} underlayColor='yellow' >
          <Text style={styles.text}>Login</Text>
        </TouchableHighlight>

      </LinearGradient>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 140,
    width: setWidth,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'white',
    shadowColor: '#333333',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  text: {
    fontFamily: 'DDCHardware-Regular',
    fontSize: 30,
    color: '#ff7b00',
  }
})
