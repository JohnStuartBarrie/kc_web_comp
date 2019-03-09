import { LitElement, html } from 'lit-element'

class KCButton extends LitElement {
  constructor () {
    super()
    this.text = 'Button';
  }

  static get properties () {
    return {
      text: { type: String },
      title: { type: String }
    }
  }

  render () {
    return html`
      <button title="${this.title || ''}">${this.text}</button>
    `
  }
}

customElements.define('kc-button', KCButton)

export default KCButton;
