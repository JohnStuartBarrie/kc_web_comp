import { LitElement, html } from 'lit-element';

export class KCWebCam extends LitElement {
  constructor () {
    super()

    this.webcamIndex = 0;
    this.getCameras().then((videoDevices) => {
      this.setUpCamera(videoDevices[this.webcamIndex])
    })
  }

  static get properties () {
    return {
      webcamIndex: { type: Number }
    }
  }

  getCameras () {
    return new Promise(resolve => {
      const videoDevices = []
      navigator.mediaDevices.enumerateDevices()
        .then(devices => {
          devices.forEach(function (device) {
            if (device.kind === 'videoinput') {
              videoDevices.push({
                deviceId: device.deviceId,
                label: device.label
              })
            }
          })
          resolve(videoDevices)
        })
    });
  }

  setUpCamera (videoDevice) {
    var constraints = {
      width: { min: 1280, ideal: 1280, max: 1920 },
      height: { min: 720, ideal: 720, max: 1080 },
      frameRate: 20,
      deviceId: { exact: videoDevice.deviceId }
    };

    navigator.mediaDevices.getUserMedia({ video: constraints })
      .then((stream) => {
        // console.log(stream.getVideoTracks()[0].getCapabilities());
        this.shadowRoot.getElementById('player').srcObject = stream;
      });
  }

  render () {
    return html`
    <button id="capture">Capture</button>
    <video id="player" width="1024" height="720" autoplay></video>
    `;
  }
}

customElements.define('kc-webcam', KCWebCam);
