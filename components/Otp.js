import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { changeOtp } from '../redux/actions/authAction';
import authStyles from '../styles/authStyles';
import globalStyles from '../styles/globalStyles';

const Otp = ({ navigation, handleChangeOtp, otp }) => {
  const handleVerifyBtnPress = () => {
    navigation.navigate('Products');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Verify</Text>
      <Text style={authStyles.label}>OTP</Text>
      <TextInput
        placeholder="Enter otp"
        style={authStyles.inputBox}
        onChangeText={handleChangeOtp}
        value={otp}
        keyboardType="numeric"
        maxLength={6}
      />
      <Button
        disabled={otp.length < 6}
        onPress={handleVerifyBtnPress}
        color="#64B6FF"
        title="Verify"
      />
    </View>
  );
};

Otp.propTypes = {
  navigation: PropTypes.any,
  handleChangeOtp: PropTypes.func,
  otp: PropTypes.string,
};

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    otp: auth.otp,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeOtp: (val) => dispatch(changeOtp(val)),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Otp);
