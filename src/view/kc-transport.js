import { connect } from 'pwa-helpers'
import { LitElement, html } from 'lit-element'
import { store } from '../model/store.js'
import { capture } from '../action/webcam/capture.js'

class Transport extends connect(store)(LitElement) {
  static get properties () {
    return {
      capturing: { type: Boolean }
    }
  }

  stateChanged (state) {
    this.capturing = state.timeline.capturing;
  }

  onClick (ev) {
    capture();
  }

  render () {
    return html`
      <kc-button text='capture' @click=${this.onClick}></kc-button>
      <div>:${this.capturing ? 'capturing' : null}</div>
    `
  }
}

customElements.define('kc-transport', Transport)

export default Transport
