import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { loginStyles } from '../styles/loginStyle';

const Login = ({ navigation }) => {
  const [value, setValue] = useState('');
  const onLoginBtnPress = () => {
    navigation.navigate('Otp');
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Log in</Text>
      <Text style={loginStyles.label}>Phone</Text>
      <TextInput
        placeholder="Enter phone"
        style={loginStyles.inputBox}
        onChangeText={(text) => setValue(text)}
        value={value}
        keyboardType="numeric"
        maxLength={11}
      />
      <Button
        color="#64B6FF"
        disabled={value.length < 11}
        onPress={onLoginBtnPress}
        title="Login"
      />
    </View>
  );
};
export default Login;
