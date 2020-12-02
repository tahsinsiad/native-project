import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { loginStyles } from '../styles/loginStyle';

export default function Login() {
  const [value, onChangeText] = React.useState('');
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Log in</Text>
      <TextInput
        placeholder="Enter email"
        style={loginStyles.inputBox}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <Button title="Login" />
    </View>
  );
}
