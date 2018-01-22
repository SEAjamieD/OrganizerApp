import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions, TouchableHighlight, Image, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import BackArrow from '../boxNaming/BackArrow';

export default class AllBoxesContainer extends Component<{}> {

  constructor() {
    super();
    this.state = {
      list: []
    }
    this.goToBox = this.goToBox.bind(this);
  }


  componentWillMount() {
  fetch('https://us-central1-fireorganizer-9e2d4.cloudfunctions.net/boxes')
    .then(res => res.json())
    .then(data => {
      let list = Object.keys(data)
      this.setState({list: [...list]})
    })
  }

  goToBox = (event) => {
    console.log(event)
    this.props.navigation.navigate('ExistingBox', {boxId: event})
  }


  render() {
    const navigation = this.props.navigation;

    return (
      <LinearGradient
      colors={['#ff7b00','#ffa500','#ffd000']}
      start={{x: 0.2, y: 0}}
      style={styles.container}>

        <View style={styles.header}>
          <Text h2 style={styles.headerText}>Your Boxes</Text>
        </View>

        <BackArrow navigation={navigation}/>

        <View style={{flex: 1}}>
        <FlatList
              style={styles.flatList}
              data={this.state.list}
              renderItem={({item}) => (
                <TouchableHighlight style={styles.listItem} onPress={ this.goToBox.bind(this, item)}>
                  <Text style={styles.listText}>{item}</Text>
                </TouchableHighlight>
              )}
              keyExtractor={(item, index) => index} />
        </View>

      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: height / 3.75,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'DDCHardware-Regular',
    fontSize: 35,
    color: 'white',
    textShadowColor: 'rgba(51, 51, 51, .2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  flatList: {

  },
  listItem: {
    width: width - 40,
    height: height / 12,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    shadowColor: '#333333',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  listText: {
    paddingLeft: 10,
    fontFamily: 'DDCHardware-Regular',
    color: '#333333',
    fontSize: 25,
    textShadowColor: 'rgba(51, 51, 51, .2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  }
})
