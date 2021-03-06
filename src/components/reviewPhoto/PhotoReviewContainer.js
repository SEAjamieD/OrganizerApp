import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableHighlight, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { API_ROUTE } from '../../../fireRoutes';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const setWidth = width - 40;

export default class PhotoReviewContainer extends Component<{}> {


  returnToBox = () => {
    this.storeImage();

    let boxId = this.props.navigation.state.params.boxId;
    this.props.navigation.navigate('ExistingBox', {boxId: boxId});
  }


  storeImage = () => {

    let boxId = this.props.navigation.state.params.boxId;
    let image = this.props.navigation.state.params.currentSnapUri;

    fetch(`${API_ROUTE}/boxes/${boxId}`, {
      method: 'POST',
      body: JSON.stringify({
        contents: {
            itemName: '1name coming',
            image: image,
            tags: false
          }
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
  }

  render() {

    return(
      <LinearGradient
      colors={['#ff7b00','#ffa500','#ffd000']}
      start={{x: 0.2, y: 0}}
      style={styles.container}>
        <View style={styles.imageShadow}>
          <Image
              style={styles.image}
              source={{uri: 'data:image/jpeg;base64,'+this.props.navigation.state.params.currentSnapUri}}
              />
        </View>


        <TouchableHighlight style={styles.button} onPress={this.returnToBox} underlayColor='yellow' >
          <Text style={styles.text}>Store It</Text>
        </TouchableHighlight>

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
  },
  button: {
    position: 'absolute',
    bottom: 30,
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
