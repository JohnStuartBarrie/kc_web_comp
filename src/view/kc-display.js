import { LitElement, html } from 'lit-element'

export class KCDisplay extends LitElement {
  render () {
    return html`
    <div>
      <kc-webcam-selector></kc-webcam-selector>
      <kc-webcam></kc-webcam>
    </div>
    `
  }
}

customElements.define('kc-display', KCDisplay)
