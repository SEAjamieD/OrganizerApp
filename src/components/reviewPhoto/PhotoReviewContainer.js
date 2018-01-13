import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const setWidth = width - 40;

export default class PhotoReviewContainer extends Component<{}> {


  render() {

    return(
      <LinearGradient
      colors={['#ff7b00','#ffa500','#ffd000']}
      start={{x: 0.2, y: 0}}
      style={styles.container}>
        <View style={styles.imageShadow}>
          <Image
              style={styles.image}
              source={{uri: this.props.navigation.state.params.currentSnapUri}}
              />
        </View>

      </LinearGradient>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: setWidth,
    height: setWidth,
  },
  imageShadow: {
    backgroundColor: 'transparent',
    marginTop: 30,
    alignSelf: 'center',
    width: setWidth,
    height: setWidth,
    shadowColor: '#333333',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  }
})
