import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import DetailScreen from '../screens/Home/DetailsScreen';
import VideoScreen from '../screens/Home/VideoScreen';


const Stack = createStackNavigator();

const HomeStack = ({setIsLoggedIn}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        options={{headerShown: false}}>
        {props => <DetailScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
       
      </Stack.Screen>
      <Stack.Screen
        name="Video"
        component={VideoScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;