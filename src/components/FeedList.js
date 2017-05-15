import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import FeedDetail from './FeedDetail';
import {View, Text, Image} from 'react-native';

class FeedList extends Component {
   state = { feeds: [] };
   componentWillMount()
   {
       axios.get('https://api.unsplash.com/photos?access_token=fadfa4a06c53ada7658e30af2d431e4c7d3a521d059f6486ef28f97cd0bc9d99')
      .then(response => this.setState({ feeds : response.data }));
   }

   renderFeedList()
   {
     return this.state.feeds.map(feed =>
       <FeedDetail key={feed.id} eachFeed={feed} />
     );
   }

  render() 
  {
  return (
  <ScrollView>
  {this.renderFeedList()}
  </ScrollView> );


  }



}

export default FeedList;
