import { LitElement, html } from 'lit-element';

class KCChangeFrame extends LitElement {
  static get properties () {
    return {
      frameTarget: { type: Number },
      text: { type: String },
      title: { type: String }
    }
  }

  constructor () {
    super();
    this.text = '►►';
    this.frameTarget = 1;
    this.title = 'Next'
  }

  onClick (event) {
    console.log(this.frameTarget);
  }

  render () {
    return html`
      <kc-button
        text="${this.text}"
        title="${this.title}"
        frametarget="${this.frameTarget}"
        @click=${this.onClick}>
      </kc-button>
    `;
  }
}

customElements.define('kc-change-frame', KCChangeFrame);

export default KCChangeFrame;
