import React from 'react';
import { View, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Button = ({
  onPress,
  disabled,
  containerStyle,
  btnTextStyle,
  btnTitle,
}) => {
  return (
    <TouchableHighlight disabled={disabled} onPress={onPress}>
      <View style={containerStyle}>
        <Text style={btnTextStyle}>{btnTitle}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Button;
