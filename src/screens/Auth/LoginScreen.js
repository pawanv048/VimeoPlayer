import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../../context/UserContext';

const LoginScreen = ({navigation, setIsLoggedIn}) => {
  const {email} = useContext(UserContext);

  const handleLogin = () => {
    setIsLoggedIn(true); // Set isLoggedIn to true, switching to HomeStack
  };

  return (
    <View style={s.container}>
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      />
      <Text style={{marginTop: 30}}>Email: {email}</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
