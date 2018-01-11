import React, { Component } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


import LottieView from 'lottie-react-native';
import anim from './loading.json';

export default class Loader extends Component<{}> {
  constructor(props) {
    super(props)
      this.state = {
        progress: new Animated.Value(0),
      };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
    }).start();
  }

  render() {
    return (

      <View style={styles.container}>
        <View style={{width: 200, height: 200}}>
          <LottieView style={{width: 200, height: 200}} source={anim} loop={true} progress={this.state.progress} />
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
