import { store } from '../../model/store';
import { setWebcamStream } from './set-webcam-stream.js'

export const changeWebcam = (deviceId) => {
  const webcamsDevices = store.getState().webcamsDevices;
  const device = webcamsDevices.find((device) => {
    return (device.deviceId === deviceId)
  });
  setWebcamStream(device);
}
