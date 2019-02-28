import { WebCamConstants } from '../constant.js'

const INITIAL_STATE = {
  index: 0,
  devices: [],
  stream: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WebCamConstants.LIST_WEBCAMS:
      return { ...state, devices: action.webcamDevices }
    case WebCamConstants.SET_WEBCAM_STREAM:
      return { ...state, stream: action.stream }
    default:
      return state;
  }
};
