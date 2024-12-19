
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { UserContext } from '../../context/UserContext';


const DetailScreen = ({ route, navigation, setIsLoggedIn }) => {
  const {email} = useContext(UserContext);
  // console.log('detail=>', email)

  const { itemId, message } = route.params; // Extract parameters passed via navigation
  const handleLogout = () => {
    setIsLoggedIn(false); 
  };

 

// console.log('route==>', route)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Detail Screen</Text>
      <Button title="goto video" onPress={() => navigation.navigate('Video')} />
      <Text style={{margin: 30}}>Email: {email}</Text> 
      <Text style={styles.text}>Item ID: {itemId}</Text>
      <Text style={styles.text}>Message: {message}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default DetailScreen;
