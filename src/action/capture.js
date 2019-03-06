import { store } from '../model/store';
import { TimelineConstants } from '../model/constant'

export const capture = () => {
  store.dispatch({ type: TimelineConstants.CAPTURING_FRAMES });

  const video = document.createElement('video',
    {
      width: '1280',
      height: '720'
    });
  video.autoplay = true;
  video.srcObject = store.getState().webcam.stream;
  const canvas = document.createElement('canvas',
    {
      width: '1280',
      height: '720'
    });

  setTimeout(() => {
    const c = canvas.getContext('2d');

    c.drawImage(video, 0, 0, canvas.width, canvas.height);
    const image = canvas.toDataURL('image/jpeg', 1.0);
    store.dispatch({ type: TimelineConstants.CAPTURE_FRAMES_SUCCESS, image });
  }, 100);
};
