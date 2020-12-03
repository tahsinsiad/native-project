import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from '../shared/button';
import globalStyles from '../styles/globalStyles';
import welcomeStyles from '../styles/welcomeStyles';

const Welcome = ({ navigation }) => {
  const handleLoginBtnPress = () => {
    navigation.navigate('Login');
  };
  const handleShopUsWithBtnPress = () => {
    navigation.navigate('Shop');
  };
  return (
    <View style={globalStyles.container}>
      <View style={welcomeStyles.container}>
        <Text style={welcomeStyles.header}>Welcome to Bolt</Text>
        <View>
          <Image
            style={welcomeStyles.image}
            source={require('../assets/welcome.png')}
            resizeMode="cover"
          />
          <Button
            btnTitle="Login in with phone"
            onPress={handleLoginBtnPress}
            btnTextStyle={welcomeStyles.buttonText}
            containerStyle={welcomeStyles.button}
          />
          <Button
            btnTitle="Shop with us"
            onPress={handleShopUsWithBtnPress}
            containerStyle={welcomeStyles.link}
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
