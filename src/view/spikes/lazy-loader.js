
import { LitElement, html, css } from 'lit-element';

export class LazyLoader extends LitElement {
  static get styles () {
    return css`
      * {
      color: black;
      }
      
      h1 {
        font-size: 4rem;
        color: red;
      }
      
      .main {
        padding: 16px;
      }
      
      .important {
        color: red;
      }
  
    `
  };
  /**
   * Define properties. Properties defined here will be automatically
   * observed.
   */
  static get properties () {
    return {
      message: { type: String },
      pie: { type: Boolean }
    };
  }

  constructor () {
    super();
    this.loadComplete = false;
    this.load = false
  }

  render () {
    return html`
      <h1>Kool Capture!</h1>
      <p class="main">${this.message}</p>

      <input name="myinput" id="myinput" 
        type="checkbox"
        ?checked="${this.load}"
        @change="${this.toggleLoad}">

      <label for="myinput">Element Load</label>
      ${this.loadComplete ? html`<lazy-element></lazy-element>` : html``}
    `;
  }

  /**
   * Implement firstUpdated to perform one-time work on first update:
   * - Call a method to load the lazy element if necessary
   * - Focus the checkbox
   */
  firstUpdated () {
    const myInput = this.shadowRoot.getElementById('myinput');
    myInput.focus();
  }

  /**
   * Event handler. Gets called whenever the checkbox fires a `change` event.
   * - Toggle whether to display <lazy-element>
   * - Call a method to load the lazy element if necessary
   */
  toggleLoad (e) {
    this.Load = !this.load;
    this.loadLazy();
  }

  /**
   * If we need the lazy element && it hasn't already been loaded,
   * load it and remember that we loaded it.
   */
  async loadLazy () {
    /**
    if(this.load && !this.loadComplete) {
      import('./lazy-element.js').then((LazyElement) => {
        this.loadComplete = true;
        console.log("LazyElement loaded");
      }).catch((reason) => {
        console.log("LazyElement failed to load", reason);
      });
    }
    */
  }
}

// Register the element with the browser
customElements.define('lazy-loader', LazyLoader);
