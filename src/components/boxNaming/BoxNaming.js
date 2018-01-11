import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackArrow from './BackArrow';

const height = Dimensions.get('window').height

export default class BoxNaming extends Component<{}> {

  constructor() {
    super();
    this.state = {
      boxName: ''
    }
  }

  nameBox = () => {
    this.props.navigation.navigate('SingleBox', {boxName: this.state.boxName});
  }

  render() {
    const navigation = this.props.navigation;

    return (
      <LinearGradient
      colors={['#ff7b00','#ffa500','#ffd000']}
      start={{x: 0.2, y: 0}}
      style={{flex: 1}}>

        <BackArrow navigation={navigation}/>

        <View style={styles.namingContainer}>
            <Text h2 style={styles.textH2}>Name Your Box...</Text>
            <TextInput autoFocus={true} style={styles.namingInput} onChangeText={(text) => this.setState({boxName: text})} onSubmitEditing={this.nameBox} />
        </View>

      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  namingContainer: {
    marginTop: height / 2.7,
    height: height / 5,
    paddingHorizontal: 20,
  },
  namingInput: {
    height: 60,
    borderBottomColor: 'white',
    borderBottomWidth: 3,
    fontSize: 30,
    fontFamily: 'DDCHardware-Regular',
    color: 'white',
    lineHeight: 30,
  },
  textH2: {
    fontFamily: 'DDCHardware-Regular',
    color: 'white',
    fontSize: 25,
    textShadowColor: 'rgba(51, 51, 51, .2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  }
})
