import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../../context/UserContext';

const RegisterScreen = ({navigation}) => {
  const {setEmail} = useContext(UserContext);
  const [emailInput, setEmailInput] = React.useState('');
  // console.log('setEmail=>', setEmail)
  // console.log('emailInput=>', emailInput)

  const handleRegister = () => {
    if (setEmail) {
      setEmail(emailInput); // Save email in context
      navigation.navigate('Login', {email: emailInput}); // Navigate to DetailScreen
    } else {
      console.error('setEmail is undefined');
    }
  };

  return (
    <View style={styles.container}>
      <Text>welcome to RegisterScreen</Text>
      <Text style={{marginTop: 30}}>Enter Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={emailInput}
        onChangeText={setEmailInput}
      />
      <Button title="Register" onPress={handleRegister} />
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
});
