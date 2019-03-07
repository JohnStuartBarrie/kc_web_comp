import { connect } from 'pwa-helpers'
import { LitElement, html } from 'lit-element';
import { store } from '../model/store.js'

class KCWebCam extends connect(store)(LitElement) {
  stateChanged (state) {
    const player = this.shadowRoot.getElementById('player');
    if (player && player.srcObject !== state.webcam.stream) {
      player.srcObject = state.webcam.stream;
    }
  }

  render () {
    return html`
      <video id="player" width="256" height="180" autoplay></video>
    `;
  }
}

customElements.define('kc-webcam', KCWebCam);

export default KCWebCam
