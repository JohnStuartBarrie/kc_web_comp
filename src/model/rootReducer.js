import { combineReducers } from 'redux';
import webcam from './reducer/webcam.js';
import timeline from './reducer/timeline.js';

export default combineReducers({
  webcam,
  timeline
});
