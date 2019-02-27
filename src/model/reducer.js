import { WebCamConstants } from './constant.js'

const INITIAL_STATE = {
  wecamIndex: 0,
  webcamsDevices: [],
  stream: null
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WebCamConstants.LIST_WEBCAM:
      return { ...state, webcamsDevices: action.webcamDevices }
    case WebCamConstants.SET_WEBCAM_STREAM:
      return { ...state, stream: action.stream }
    default:
      return state;
  }
};
