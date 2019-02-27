import { LitElement, html } from 'lit-element'

export class KCButton extends LitElement {
  constructor () {
    super()
    this.text = 'Button';
  }

  static get properties () {
    return {
      text: { type: String }
    }
  }

  render () {
    return html`
    <button id="capture">${this.text}</button>
    `
  }
}

customElements.define('kc-button', KCButton)
