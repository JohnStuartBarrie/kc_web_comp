
import { LitElement, html } from 'lit-element';

export default class LazyElement extends LitElement {
  render () {
    return html`
      <style>
        :host { display: block; }
        :host([hidden]) { display: none; }
      </style>
      <p>I loaded lazily.</p>
    `;
  }
}
// Register the element with the browser
customElements.define('lazy-element', LazyElement);
