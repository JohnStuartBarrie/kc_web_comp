/* eslint-disable indent */
import { connect } from 'pwa-helpers'
import { LitElement, html, css } from 'lit-element'
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

  get styles () {
    return css`
      .frame {
        width: 100px;
        height: 100px;
        background-color: #ff0000;
      }
    `
  }

  render () {
    return html`
      <div id="timeline" >
        ${this.frames.map((frame) => {
          return html`<div class='frame'>${frame.id}<img src=${frame.image} /></div>`
        })}
      </div>
    `
  }
}

customElements.define('kc-timeline', KCTimeLine)

export default KCTimeLine;
