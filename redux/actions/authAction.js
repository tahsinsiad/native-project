import { CHANGE_OTP, CHANGE_PHONE_NO } from '../types/AuthActionTypes';

export function changePhone(phone) {
  return {
    type: CHANGE_PHONE_NO,
    phone,
  };
}

export function changeOtp(otp) {
  return {
    type: CHANGE_OTP,
    otp,
  };
}
