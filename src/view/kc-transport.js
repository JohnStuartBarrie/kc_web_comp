import { connect } from 'pwa-helpers'
import { LitElement, html } from 'lit-element'
import { store } from '../model/store.js'
import { capture } from '../action/capture.js'

export class Transport extends connect(store)(LitElement) {
  static get properties () {
    return {
      capturing: { type: Boolean },
      cImage: { type: Object }
    }
  }

  stateChanged (state) {
    this.capturing = state.timeline.capturing;
    this.cImage = state.timeline.capturedImage;
    this.videoTag = state.timeline.videoTag;
  }

  onClick (ev) {
    capture();
  }

  render () {
    return html`
      <style>
        :host { display: block; }
        :host([hidden]) { display: none; }
      </style>
      <kc-button text='capture' @click=${this.onClick}></kc-button>
      <div>:${this.capturing ? 'capturing' : null}</div>
      <div>
      ${this.cImage && html`<img src="${this.cImage}"/><a download="captured.jpeg" href=${this.cImage}>
      download</a>`}
      </div>
      <div>
      ${this.videoTag}
      </div>
    `
  }
}

customElements.define('kc-transport', Transport)
