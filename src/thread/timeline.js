import { store } from '../model/store';
import { TimelineConstants } from '../model/constant';

class Timeline {
  constructor () {
    this.index = 0;
    this.clearInterval = null;
    this.frames = 0;
    store.subscribe(() => {
      this.storeChange()
    })
  }

  storeChange () {
    const state = store.getState();
    this.frames = state.timeline.frames.length;
    if (this.index !== state.timeline.currentIndex) {
      this.index = state.timeline.currentIndex;
      console.log('currentIndex changed ', state.timeline.currentIndex);
    }
  }

  start () {
    this.index = 0;
    if (this.clearInterval) {
      clearInterval(this.clearInterval)
      this.clearInterval = null;
    }
    this.clearInterval = setInterval(() => { this.increment(); }, 1);
  }

  stop () {
    clearInterval(this.clearInterval)
    this.clearInterval = null;
    store.dispatch({ type: TimelineConstants.SHOW_LIVE, showLiveView: true });
  }

  increment () {
    if (this.index >= this.frames) {
      store.dispatch({ type: TimelineConstants.CURRENT_INDEX, index: 0 });
      store.dispatch({ type: TimelineConstants.SHOW_LIVE, showLiveView: true });
      return
    }
    store.dispatch({ type: TimelineConstants.SHOW_LIVE, showLiveView: false });
    store.dispatch({ type: TimelineConstants.CURRENT_INDEX, index: this.index + 1 });
  }

  get currentIndex () {
    return this.index;
  }
}

const TimelineSingleton = (function () {
  let instance;

  return {
    getInstance: function () {
      if (!instance) {
        instance = new Timeline();
      }
      return instance;
    }
  };
})();

export default TimelineSingleton.getInstance()
