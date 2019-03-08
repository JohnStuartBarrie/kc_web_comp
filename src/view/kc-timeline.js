import { connect } from 'pwa-helpers'
import { LitElement, html } from 'lit-element'
import { store } from '../model/store.js'

class KCTimeLine extends connect(store)(LitElement) {
  static get properties () {
    return {
      frames: { type: Array }
    }
  }

  stateChanged (state) {
    this.frames = state.timeline.frames;
  }

  render () {
    return html`
      <div id="timeline" >
      ${this.frames.map(
    (frame) => {
      return html`<div>${frame.id}<img src=${frame.image} /></div>`
    })}
      </div>
    `
  }
}

customElements.define('kc-timeline', KCTimeLine)

export default KCTimeLine;
