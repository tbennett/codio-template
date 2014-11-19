function onDeviceReady() {
    var parentElement = document.getElementById('ready');
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');
}

document.addEventListener('deviceready', onDeviceReady, false);
