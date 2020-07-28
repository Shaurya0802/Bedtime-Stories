import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ReadStoryScreen from './screens/ReadScreen';
import WriteStoryScreen from './screens/WriteScreen';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component() {
  render(){
    return(
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Read : {screen: ReadStoryScreen},
  Write : {screen: WriteStoryScreen}
});

const AppContainer = createAppContainer(TabNavigator);