import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { loginStyles } from '../styles/loginStyle';

const Otp = ({ navigation }) => {
  const [value, onChangeText] = React.useState('');

  const handleVerifyBtnPress = () => {
    navigation.navigate('Products');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Verify</Text>
      <Text style={loginStyles.label}>OTP</Text>
      <TextInput
        placeholder="Enter otp"
        style={loginStyles.inputBox}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        keyboardType="numeric"
        maxLength={6}
      />
      <Button
        disabled={value.length < 6}
        onPress={handleVerifyBtnPress}
        color="#64B6FF"
        title="Verify"
      />
    </View>
  );
};
export default Otp;
