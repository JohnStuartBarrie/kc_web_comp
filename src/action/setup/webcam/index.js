import { store } from '../../../model/store';
import { WebCamConstants } from '../../../model/constant'
import { setWebcamStream } from '../../webcam/set-webcam-stream'
import { getCameras } from '../../webcam/get-cameras'

export const setUpWebCamera = () => {
  getCameras().then((webcamDevices) => {
    store.dispatch({ type: WebCamConstants.LIST_WEBCAMS, webcamDevices });
    const state = store.getState();
    setWebcamStream(webcamDevices[state.webcam.index]);
  });
}
