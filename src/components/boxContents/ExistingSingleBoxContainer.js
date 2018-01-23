import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions, TouchableHighlight, Image, FlatList } from 'react-native';
import { API_ROUTE } from '../../../fireRoutes';
import LinearGradient from 'react-native-linear-gradient';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import AddItemPlus from './AddItemPlus';
import XboxOut from './XboxOut';

export default class ExistingSingleBoxContainer extends Component<{}> {

  constructor() {
    super();
    this.state = {
      boxName: '',
      list: [],
      boxId: ''
    }
  }

  componentWillMount() {
    const boxId = this.props.navigation.state.params.boxId

    fetch(`${API_ROUTE}/boxes/${boxId}`)
      .then(res => res.json())
      .then(data => {
        if (data.contents === false) {
          let list = [];
          this.setState({
            list: [...list],
            boxName: data.boxName,
            boxId: boxId
          })
        } else {
          let unformedList = data.contents
          let list = [];
            for ( var i in unformedList) {
              list.push([unformedList[i].itemName,unformedList[i].image ])
            }

          this.setState({
            list: [...list],
            boxName: data.boxName,
            boxId: boxId
          })
        }
      })
  } //end componentWillMount


  render() {
    const navigation = this.props.navigation;
    return (
      <LinearGradient
      colors={['#ff7b00','#ffa500','#ffd000']}
      start={{x: 0.2, y: 0}}
      style={styles.container}>

        <View style={styles.header}>
          <Text h2 style={styles.headerText}>{this.state.boxName} box</Text>
        </View>

        <AddItemPlus navigation={navigation} boxId={this.state.boxId} />

        <XboxOut navigation={navigation} />


        <View style={{flex: 1}}>
        <FlatList
              style={styles.flatList}
              data={this.state.list}
              renderItem={({item}) => (
                <View style={styles.listItem}>
                  <Text style={styles.listText}>{item[0]}</Text>
                  <Image
                  style={styles.image}
                  source={{uri: 'data:image/jpeg;base64,'+item[1]}}
                  />
                </View>
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
    height: height / 8,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
  },
  image: {
    position: 'absolute',
    right: 4,
    top: 2,
    height: height/8 - 4,
    width: width/4,
  }
})
