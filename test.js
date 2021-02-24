
navigator.camera.getPicture(
onSuccess, onFail, {
  quality: 25,
  destinationType: Camera.DestinationType.DATA_URL,
});

function onSuccess(imageData) {..}

function onFail(message) {..}
