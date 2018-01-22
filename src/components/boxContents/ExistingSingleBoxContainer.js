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
      list: []
    }
  }


  componentWillMount() {
    const boxId = this.props.navigation.state.params.boxId

  fetch(`${API_ROUTE}/boxes/${boxId}`)
    .then(res => res.json())
    .then(data => {
      const list = Object.entries(data.contents).map(array => [array[0], array[1].itemName])
      console.log(list)
      this.setState({
        list: [...list],
        boxName: data.boxName,
      })
    })
  }

  componentDidMount() {
    console.log(this.state.list)
  }


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

        <AddItemPlus navigation={navigation} />

        <XboxOut navigation={navigation} />


        <View style={{flex: 1}}>
        <FlatList
              style={styles.flatList}
              data={this.state.list}
              renderItem={({item}) => (
                <View style={styles.listItem}>
                  <Text key={item[0]} style={styles.listText}>{item[1]}</Text>
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
