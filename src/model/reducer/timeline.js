import { TimelineConstants } from '../constant.js'

const INITIAL_STATE = {
  currentIndex: 0,
  frames: [],
  stream: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TimelineConstants.ADD_FRAME:
      return { ...state, frames: state.frames.push[{ frameid: state.frames.length }] }
    case TimelineConstants.GOTO_NEXT_FRAME:
      return { ...state, currentIndex: state.currentIndex++ }
    default:
      return state;
  }
};
