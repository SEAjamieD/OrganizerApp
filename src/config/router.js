import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../components/home/HomeContainer';
import BoxNaming from '../components/boxNaming/BoxNaming';
import SingleBox from '../components/boxContents/SingleBoxContainer';
import AllBoxes from '../components/allBoxes/AllBoxesContainer';
import ExistingBox from '../components/boxContents/ExistingSingleBoxContainer';
import CameraScreen from '../components/camera/Camera';

export const Stack = StackNavigator(
  {
    Home: {screen: Home},
    BoxNaming: {screen: BoxNaming},
    SingleBox: {screen: SingleBox,
          navigationOptions: {gesturesEnabled: false}
        },
    AllBoxes: {screen: AllBoxes},
    ExistingBox: {screen: ExistingBox},
    CameraScreen: {screen: CameraScreen},
  },
  {headerMode: 'none',},
);
