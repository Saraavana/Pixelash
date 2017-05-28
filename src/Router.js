import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import FeedList from './components/FeedList';
import EachFeedComponent from './components/EachFeed';

const RouterComponent = () => {
return (
<Router sceneStyle={{paddingTop:65}}>
<Scene key="feeds" component={FeedList} title="Pixelash"/>
<Scene key="eachFeed" component={EachFeedComponent} title="Each Feed"/>
</Router>
);
};

export default RouterComponent;	