import { connect } from 'pwa-helpers'
import { LitElement, html } from 'lit-element'
import { store } from '../model/store.js'
import { capture } from '../action/webcam/capture.js'
import { play } from '../action/transport/play.js'
import { stop } from '../action/transport/stop.js'

class Transport extends connect(store)(LitElement) {
  static get properties () {
    return {
      capturing: { type: Boolean }
    }
  }

  stateChanged (state) {
    this.capturing = state.timeline.capturing;
  }

  onPlay (ev) {
    play();
  }

  onStop (ev) {
    stop();
  }

  onCapture (ev) {
    capture();
  }

  render () {
    return html`
      <kc-button text='play' @click=${this.onPlay}></kc-button>
      <kc-button text='stop' @click=${this.onStop}></kc-button>
      <kc-button text='capture' @click=${this.onCapture}></kc-button>
      <div>:${this.capturing ? 'capturing' : null}</div>
    `
  }
}

customElements.define('kc-transport', Transport)

export default Transport
