import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, TouchableHighlight } from 'react-native';
import Camera from 'react-native-camera';

import BackArrow from '../boxNaming/BackArrow';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class CameraScreen extends Component<{}> {
  constructor() {
    super();
    this.state = {
      currentSnapUri: ''
    }
  }

  takePicture = () => {
    const options = {};
    this.camera.capture()
      .then((data) => this.props.navigation.navigate('PhotoReviewContainer', {currentSnapUri: data.path}))
      .catch(err => console.error(err));

    // this.props.navigation.navigate('PhotoReviewContainer', {currentSnapUri: this.state.currentSnapUri});
  }

  render() {
    const navigation = this.props.navigation;

    return (

        <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            captureTarget={Camera.constants.CaptureTarget.disk}
            aspect={Camera.constants.Aspect.fill}>

            <BackArrow navigation={navigation} />

            <TouchableHighlight style={styles.button} onPress={this.takePicture}>
              <View style={styles.innerButton}/>
            </TouchableHighlight>


        </Camera>


    );
  }
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    height: height,
    width: width,
  },
  button: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 40,
    height: 80,
    width: 80,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
  },
  innerButton: {
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,.1)',
    position: 'absolute',
    height: 70,
    width: 70,
    borderRadius: 100,
  }
})
