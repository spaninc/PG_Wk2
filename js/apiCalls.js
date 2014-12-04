 document.addEventListener("deviceready", onDeviceReady, false);

 function onDeviceReady(){
 	console.log(navigator.camera);
 	alert('Device is ready!');
 }

//add code here to handle camera
function TakePhotoUsingCamera(){
	TakePhoto(Camera.PictureSourceType.CAMERA);
}

function TakePhotoFromLibrary(){
	TakePhoto(Camera.PictureSourceType.PHOTOLIBRARY);
}

function onCameraSuccess(imageData){
	var image = document.getElementById('myImage');
	image.src = "data:image/jpeg;base64," + imageData;
}

function onCameraFail(message){
	alert('Failed because: ' + message);
}

function TakePhoto(sourceType){
	var camOptions = {
		quality:50,
		destinationType: Camera.DestinationType.DATA_URL,
		sourceType: sourceType,
		correctOrientation: true
	};
	navigator.camera.getPicture(onCameraSuccess, onCameraFail, camOptions);
}

function alertDismissed(){
	// do nothing
}
var onGeoSuccess = function(position){
	var messageText = 'Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n';
    navigator.notification.alert(messageText, alertDismissed, 'GPS Location');
}

function onGeoError(error){
	    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

function ShowGEOLocation(){
 	navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);	
}

function Vibrate(){
 	navigator.vibrate(1000);	
}