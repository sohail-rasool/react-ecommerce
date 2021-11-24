import { GET_USER_INFO } from '../constants/googleAuthConstants';
const googleAuthAction = (user) => {
  return {
    type: GET_USER_INFO,
    payload: user,
  };
};

export default googleAuthAction;
