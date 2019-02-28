import { store } from '../../../model/store';
import { WebCamConstants } from '../../../model/constant'
import { webcamStreamSetup } from '../../webcam-stream-setup'
import { getCameras } from '../../get-cameras'

export const setUpWebCamera = () => {
  getCameras().then((webcamDevices) => {
    store.dispatch({ type: WebCamConstants.LIST_WEBCAMS, webcamDevices });
    const state = store.getState();
    webcamStreamSetup(webcamDevices[state.webcam.index]);
  });
}
