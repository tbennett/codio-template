

document.addEventListener('deviceready', onDeviceReady, false);

navigator.geolocation.getCurrentPosition(onSuccessGeo, onError);

function getPic() {
navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });
}

document.getElementById('photo').addEventListener('click', function(e) {
   getPic(); 
});


function onDeviceReady() {
    var parentElement = document.getElementById('ready');
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');
}


// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
var onSuccessGeo = function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
};



// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}



function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
}



function onFail(message) {
    alert('Failed because: ' + message);
}
