export const getCameras = () => {
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
};
