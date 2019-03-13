import { store } from '../model/store';
import { TimelineConstants } from '../model/constant';

class Timeline {
  constructor () {
    this.clearInterval = null;
  }

  start () {
    if (this.clearInterval) {
      clearInterval(this.clearInterval)
      this.clearInterval = null;
    }
    this.clearInterval = setInterval(() => { this.increment(); }, 100);
  }

  stop () {
    clearInterval(this.clearInterval);
    this.clearInterval = null;
    store.dispatch({ type: TimelineConstants.SHOW_LIVE, showLiveView: true });
  }

  increment () {
    if (this.currentIndex >= this.frameLength) {
      store.dispatch({ type: TimelineConstants.CURRENT_INDEX, index: 0 });
      store.dispatch({ type: TimelineConstants.SHOW_LIVE, showLiveView: true });
      return
    }
    if (this.state.timeline.showLiveView) {
      store.dispatch({ type: TimelineConstants.SHOW_LIVE, showLiveView: false });
    }
    store.dispatch({ type: TimelineConstants.CURRENT_INDEX, index: this.currentIndex + 1 });
  }

  get frameLength () {
    return this.state.timeline.frames.length;
  }

  get currentIndex () {
    return this.state.timeline.currentIndex;
  }

  get state () {
    return store.getState();
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
