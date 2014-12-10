

document.addEventListener('deviceready', onDeviceReady, false);


function getPic() {
    
    var cameraOptions = { 
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI
    };
    
    navigator.camera.getPicture(onSuccess, onFail, cameraOptions);
}


function onDeviceReady() {
   
    navigator.geolocation.getCurrentPosition(onSuccessGeo, onError);
    
    document.getElementById('photo').addEventListener('click', function(e) {
        getPic(); 
    });
    
    document.getElementById('myImage').addEventListener('click', function(e) {
        CordovaExif.readData(e.target.src, function(exifObject) {
            var lat = exifObject['GPS Latitude'];
            var lng = exifObject['GPS Latitude'];
            alert(lat + ', ' + lng);
        });
    });
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
