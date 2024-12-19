import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './src/navigation/HomeStack';
import AuthStack from './src/navigation/AuthStack';
import {UserProvider} from './src/context/UserContext';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <UserProvider>
      <NavigationContainer>
        {isLoggedIn ? (
          <HomeStack setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <AuthStack setIsLoggedIn={setIsLoggedIn} />
        )}
      </NavigationContainer>
    </UserProvider>
  );
};

export default AppNavigator;
