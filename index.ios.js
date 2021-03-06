// index.ios.js - iOS Entry screen

//Importing Library which helps for component Creation
import React from 'react';
import { AppRegistry, View } from 'react-native';


import Router from './src/Router';

//Creation Of Component
const App = () => (
  <View style={{ flex: 1 }} >
  <Router/>
  </View>
);

// Rendering the component in iOS screen
AppRegistry.registerComponent('Pixelash', () => App);
