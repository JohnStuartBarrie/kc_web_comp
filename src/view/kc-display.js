import { LitElement, html } from 'lit-element'

class KCDisplay extends LitElement {
  render () {
    return html`
    <div>
      <kc-webcam-selector></kc-webcam-selector>
      <kc-webcam></kc-webcam>
      <kc-transport></kc-transport>
    </div>
    `
  }
}

customElements.define('kc-display', KCDisplay)

export default KCDisplay;
