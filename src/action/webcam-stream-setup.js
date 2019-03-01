import { store } from '../model/store';
import { WebCamConstants } from '../model/constant'
export const webcamStreamSetup = (videoDevice) => {
  const constraints = {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 720, ideal: 720, max: 1080 },
    frameRate: 20,
    deviceId: { exact: videoDevice.deviceId }
  };

  navigator.mediaDevices.getUserMedia({ video: constraints })
    .then((stream) => {
      store.dispatch({ type: WebCamConstants.SET_WEBCAM_STREAM, stream });
    });
}
