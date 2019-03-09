import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers'
import { store } from '../model/store.js'

class KCPlaybackControls extends connect(store)(LitElement) {
  static get properties () {
    return {
      frameLength: { type: Number }
    }
  }

  render () {
    return html`
      <kc-change-frame
        title="First Frame"
        frametarget="1"
        text="▕◀◀">
      </kc-change-frame>

      <kc-change-frame
        title="Previous"
        frametarget="-1"
        text="◀◀">
      </kc-change-frame>

      <kc-change-frame
        title="Next"
        arget="+1"
        text="▶▶">
      </kc-change-frame>

      <kc-change-frame
        title="End Frame"
        frametarget="${this.frameLength}"
        text="▶▶▏">
      </kc-change-frame>
    `;
  }

  stateChanged (state) {
    this.frameLength = state.timeline.frames.length;
  }
}

customElements.define('kc-playback-controls', KCPlaybackControls);

export default KCPlaybackControls;
