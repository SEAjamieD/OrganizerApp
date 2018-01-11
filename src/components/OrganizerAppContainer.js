import React, { Component } from 'react';
import { View } from 'react-native';

import Loader from './Loader';
import HomeContainer from './home/HomeContainer';

export default class OrganizerAppContainer extends Component<{}> {

  render() {
    return (
      <View style={{flex: 1}}>
        <Loader />
      </View>
    );
  }
}
