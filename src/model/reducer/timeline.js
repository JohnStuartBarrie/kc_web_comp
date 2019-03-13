import { TimelineConstants } from '../constant.js'

const INITIAL_STATE = {
  currentIndex: 0,
  frames: [],
  stream: null,
  capturing: false,
  showLiveView: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TimelineConstants.CURRENT_INDEX:
      return { ...state, currentIndex: action.index }
    case TimelineConstants.SHOW_LIVE:
      return { ...state, showLiveView: action.showLiveView }
    case TimelineConstants.PLAY:
      return state;
    case TimelineConstants.CAPTURE_FRAMES_SUCCESS:
      return { ...state, capturing: false }
    case TimelineConstants.CAPTURING_FRAMES:
      return { ...state, capturing: true }
    case TimelineConstants.ADD_FRAME: {
      const newFrames = [
        ...state.frames,
        {
          frameid: state.frames.length + 1,
          image: action.image
        }
      ]

      return {
        ...state,
        frames: newFrames
      }
    }
    case TimelineConstants.GOTO_NEXT_FRAME:
      return { ...state, currentIndex: state.currentIndex++ }
    default:
      return state;
  }
};
