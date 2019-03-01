import { store } from '../model/store';
import { webcamStreamSetup } from './webcam-stream-setup.js'

export const capture = (deviceId) => {
  setTimeout(() => {
    console.log('capturing image');
  }, 1000);
};
