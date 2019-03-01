import { store } from '../model/store';
import { webcamStreamSetup } from './webcam-stream-setup.js'

export const changeWebcam = (deviceId) => {
  const webcamsDevices = store.getState().webcamsDevices;
  const device = webcamsDevices.find((device) => {
    return (device.deviceId === deviceId)
  });
  webcamStreamSetup(device);
}
