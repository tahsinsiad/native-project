import { CHANGE_PHONE_NO, CHANGE_OTP } from '../types/AuthActionTypes';

const initialState = {
  phone: '',
  otp: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PHONE_NO:
      return {
        ...state,
        phone: action.phone,
      };
    case CHANGE_OTP:
      return {
        ...state,
        otp: action.otp,
      };
    default:
      return state;
  }
};

export default authReducer;
