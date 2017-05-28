import React,{Component} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


class EachFeedComponent extends Component 
{


 render()
 {
//  const {thumbnailStyle,headerTextStyle, thumbnailContainerStyle,headerTitleTextStyle,imageStyle} = styles;

// const styles = {
//   headerTextStyle: {
//     justifyContent: 'space-around',
//     flexDirection: 'column'
//   },
//   headerTitleTextStyle: {
//     fontSize: 18
//   },
//   thumbnailStyle: {
//     height: 50,
//     width: 50
//   },
//   thumbnailContainerStyle:
//   {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginLeft: 10,
//     marginRight: 10
//   },
//   imageStyle:
//   {
//     height: 325,
//     flex: 1,
//     width: null
//   }
// };

   var height = Dimensions.get('screen').height - 85;

   return(
   	//  <Card>
  	 //  <CardSection>
  	 //   <View>
  	 //    <Text>Each Feed Details</Text>
  	 //    <Text>{this.props.eachFeed.user.username}</Text>
  	 //   </View>
  	 //  </CardSection>
  	 // </Card>



      // <Card>
      <CardSection> 
      <Image style = {{height: height,flex: 1,width: null}}
       source = {{'uri':this.props.eachFeed.urls.regular}}
       />
      
       </CardSection>
      // </Card>


  	 );
 }



}

export default EachFeedComponent;