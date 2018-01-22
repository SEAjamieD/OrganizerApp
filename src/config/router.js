import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from '../components/login/Login';
import Home from '../components/home/HomeContainer';
import BoxNaming from '../components/boxNaming/BoxNaming';
import SingleBox from '../components/boxContents/SingleBoxContainer';
import AllBoxes from '../components/allBoxes/AllBoxesContainer';
import ExistingBox from '../components/boxContents/ExistingSingleBoxContainer';
import CameraScreen from '../components/camera/Camera';
import PhotoReviewContainer from '../components/reviewPhoto/PhotoReviewContainer';

export const Stack = StackNavigator(
  {
    // Login: {screen: Login,
    //       navigationOptions: {gesturesEnabled: false}
    //     },
    Home: {screen: Home,
          navigationOptions: {gesturesEnabled: false}
        },
    BoxNaming: {screen: BoxNaming},
    SingleBox: {screen: SingleBox,
          navigationOptions: {gesturesEnabled: false}
        },
    AllBoxes: {screen: AllBoxes},
    ExistingBox: {screen: ExistingBox},
    CameraScreen: {screen: CameraScreen},
    PhotoReviewContainer: {screen: PhotoReviewContainer},
  },
  {headerMode: 'none',},
);
