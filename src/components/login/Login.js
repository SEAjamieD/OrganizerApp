import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text, TextInput, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const setWidth = width - 40;

export default class Login extends Component<{}> {

  login = () => {
    console.warn("logging in")

      fetch('http://localhost:5000/api/v1/auth/sign-up', {
        method: 'post',
        body: JSON.stringify({
          boxName: this.state.boxName.toLowerCase()
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
  }

  render() {

    return(
      <LinearGradient
      colors={['#ff7b00','#ffa500','#ffd000']}
      start={{x: 0.2, y: 0}}
      style={styles.container}>

        <View style={styles.inputBox}>
          <TextInput style={styles.emailInput}
            placeholder={'e-mail'}/>

          <TextInput style={styles.passwordInput}
            placeholder={'password'}/>
        </View>

        <View style={styles.buttonBox}>
          <TouchableHighlight style={styles.signupButton} onPress={this.signUp} underlayColor='yellow' >
            <Text style={styles.text}>Sign Up</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.loginButton} onPress={this.login} underlayColor='yellow' >
            <Text style={styles.text}>Login</Text>
          </TouchableHighlight>
        </View>

      </LinearGradient>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonBox: {
    flex: .35
  },
  loginButton: {
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
  signupButton: {
    marginBottom: 20,
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
  },
  inputBox: {
    flex: 0.65,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  emailInput: {
    height: 60,
    marginBottom: 30,
    paddingLeft: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 3,
    fontSize: 30,
    fontFamily: 'DDCHardware-Regular',
    color: 'white',
    lineHeight: 30,
  },
  passwordInput: {
    height: 60,
    paddingLeft: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 3,
    fontSize: 30,
    fontFamily: 'DDCHardware-Regular',
    color: 'white',
    lineHeight: 30,
  },
})
