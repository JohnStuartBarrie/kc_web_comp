import { LitElement, html } from 'lit-element'
import { capture } from '../action/capture.js'
export class KCDisplay extends LitElement {
  onClick (ev) {
    capture();
  }

  render () {
    return html`
    <div>
      <kc-webcam-selector ></kc-webcam-selector>
      <kc-webcam></kc-webcam >
      <kc-button text='capture' @click=${this.onClick}></kc-button>
    </div>
    `
  }
}

customElements.define('kc-display', KCDisplay)
