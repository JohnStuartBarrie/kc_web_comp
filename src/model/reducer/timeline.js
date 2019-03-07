import { TimelineConstants } from '../constant.js'

const INITIAL_STATE = {
  currentIndex: 0,
  frames: [],
  stream: null,
  capturing: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TimelineConstants.CAPTURE_FRAMES_SUCCESS:
      return { ...state, capturing: false }
    case TimelineConstants.CAPTURING_FRAMES:
      return { ...state, capturing: true }
    case TimelineConstants.ADD_FRAME: {
      const new_frames = [
        ...state.frames,
        {
          frameid: state.frames.length + 1,
          image: action.image
        }
      ]

      const new_state = {
        ...state,
        frames: new_frames
      }
      return new_state
    }
    case TimelineConstants.GOTO_NEXT_FRAME:
      return { ...state, currentIndex: state.currentIndex++ }
    default:
      return state;
  }
};
