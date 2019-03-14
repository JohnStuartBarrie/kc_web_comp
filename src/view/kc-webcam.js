import { connect } from 'pwa-helpers'
import { LitElement, html, css } from 'lit-element';
import { store } from '../model/store.js'

class KCWebCam extends connect(store)(LitElement) {
  static get properties () {
    return {
      showLiveView: { type: Boolean }
    }
  }

  stateChanged (state) {
    const player = this.shadowRoot.getElementById('player');
    if (player && player.srcObject !== state.webcam.stream) {
      player.srcObject = state.webcam.stream;
    }

    if (this.showLiveView !== state.timeline.showLiveView) {
      this.showLiveView = state.timeline.showLiveView;
      this.className = state.timeline.showLiveView ? '' : 'hideLiveView';
    }
  }

  static get styles () {
    return [
      css`
        video {
          background-color: #cccccc;
          margin: 20px;
          height: 200px;
        }
      `
    ];
  }

  render () {
    return html`
      <video id="player" width="256" height="180" autoplay />
    `;
  }
}

customElements.define('kc-webcam', KCWebCam);

export default KCWebCam
