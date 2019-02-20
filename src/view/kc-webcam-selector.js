import { LitElement, html } from 'lit-element'

export class LazyElement extends LitElement {
  render () {
    return html`
      <style>
        :host { display: block; }
        :host([hidden]) { display: none; }
      </style>
      <select id="demo">
        <option value="value 1">JavaScript</option>
        <option value="value 2">CSS3</option>
        <option value="value 3">HTML5</option>
      </select>
    `
  }
}
// Register the element with the browser
customElements.define('lazy-element', LazyElement)
