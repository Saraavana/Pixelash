import React from 'react';
import {Text, View, Image, Linking, CameraRoll} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import {Actions} from 'react-native-router-flux';

const FeedDetail = ({eachFeed}) => {
  // const {title, artist, thumbnail_image,image,url} = eachAlbum;
  const {thumbnailStyle,headerTextStyle, thumbnailContainerStyle,headerTitleTextStyle,imageStyle} = styles;

  return (
      <Card>
      <CardSection>
      <View style={thumbnailContainerStyle}>
      <Image
      style={thumbnailStyle}
      source={{'uri':eachFeed.user.profile_image.medium}}
      />
      </View>
      <View>
      <Text style={headerTitleTextStyle}>{eachFeed.user.name}</Text>
      <Text>{eachFeed.user.username}</Text>
      </View>
      </CardSection>
       
      <CardSection> 
      <Image style = {imageStyle}
       source = {{'uri':eachFeed.urls.regular}}
       />
      </CardSection>

      <CardSection>
      <Button onTapped={() => CameraRoll.saveToCameraRoll(eachFeed.urls.regular,'photo')
      }>
      Download
      </Button>
      <Button onTapped={()=>Actions.eachFeed({eachFeed})}>Edit</Button>
      </CardSection> 
      </Card>
    );
};

const styles = {
  headerTextStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  headerTitleTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle:
  {
    height: 325,
    flex: 1,
    width: null
  }
};

export default FeedDetail;
