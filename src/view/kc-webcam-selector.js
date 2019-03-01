import { connect } from 'pwa-helpers'
import { LitElement, html } from 'lit-element'
import { store } from '../model/store.js'
import { changeWebcam } from '../action/change-webcam.js'

export class WebCamSelector extends connect(store)(LitElement) {
  static get properties () {
    return {
      webCamDevices: { type: Array }
    }
  }

  stateChanged (state) {
    this.webCamDevices = state.webcam.devices;
  }

  onChange (ev) {
    changeWebcam(ev.currentTarget.value);
  }

  render () {
    return html`
      <style>
        :host { display: block; }
        :host([hidden]) { display: none; }
      </style>
      <select id="demo" @change=${this.onChange}>
        ${this.webCamDevices.map(item => html`<option value="${item.deviceId}" >${item.label}</option></li>`)}
      </select>
    `
  }
}

customElements.define('kc-webcam-selector', WebCamSelector)
