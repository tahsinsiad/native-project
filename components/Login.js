import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { changePhone } from '../redux/actions/authAction';
import globalStyles from '../styles/globalStyles';
import authStyles from '../styles/authStyles';

const Login = ({ navigation, handleChangePhone, phone }) => {
  const onLoginBtnPress = () => {
    navigation.navigate('Otp');
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Log in</Text>
      <Text style={authStyles.label}>Phone</Text>
      <TextInput
        placeholder="Enter phone"
        style={authStyles.inputBox}
        onChangeText={handleChangePhone}
        value={phone}
        keyboardType="numeric"
        maxLength={11}
      />
      <Button
        color="#64B6FF"
        disabled={phone.length < 11}
        onPress={onLoginBtnPress}
        title="Login"
      />
    </View>
  );
};

Login.propTypes = {
  navigation: PropTypes.any,
  handleChangePhone: PropTypes.func,
  phone: PropTypes.string,
};

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    phone: auth.phone,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangePhone: (val) => dispatch(changePhone(val)),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Login);
