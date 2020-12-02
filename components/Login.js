import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { loginStyles } from '../styles/loginStyle';

export default function Login({ navigation }) {
  const [value, onChangeText] = React.useState('');
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
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <Button
        color="#64B6FF"
        disabled={value.length < 12}
        onPress={onLoginBtnPress}
        title="Login"
      />
    </View>
  );
}
