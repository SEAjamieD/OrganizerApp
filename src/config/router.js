import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../components/home/HomeContainer';
import BoxNaming from '../components/boxNaming/BoxNaming';

export const Stack = StackNavigator(
  {
    Home: {screen: Home},
    BoxNaming: {screen: BoxNaming,},
  },
  {headerMode: 'none',},
);
