import { LitElement, html } from 'lit-element';

class LazyElement extends LitElement {
  render () {
    return html`
      <p>I loaded lazily.</p>
    `;
  }
}
// Register the element with the browser
customElements.define('lazy-element', LazyElement);

export default LazyElement;
