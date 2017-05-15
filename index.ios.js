// index.ios.js - iOS Entry screen

//Importing Library which helps for component Creation
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import FeedList from './src/components/FeedList';

//Creation Of Component
const App = () => (
  <View style={{ flex: 1 }} >
  <Header headerTitleText = {'Unsplash'} />
  <FeedList />
  </View>
);

// Rendering the component in iOS screen
AppRegistry.registerComponent('Pixelash', () => App);
