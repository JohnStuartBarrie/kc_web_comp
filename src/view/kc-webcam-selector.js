import { connect } from 'pwa-helpers'
import { LitElement, html } from 'lit-element'
import { store } from '../model/store.js'
import { changeWebcam } from '../action/webcam/change-webcam.js'

class WebCamSelector extends connect(store)(LitElement) {
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
      <select id="demo" @change=${this.onChange}>
        ${this.webCamDevices.map(item => html`<option value="${item.deviceId}" >${item.label}</option></li>`)}
      </select>
    `
  }
}

customElements.define('kc-webcam-selector', WebCamSelector)

export default WebCamSelector;
