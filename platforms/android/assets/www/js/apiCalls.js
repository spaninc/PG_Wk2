 
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
	console.log(navigator.camera);
	alert('Device is ready...');
}

function TakePhotoUsingCamera(){
	TakePhoto(Camera.PictureSourceType.CAMERA);

};

function TakePhotoFromLibrary(){
	TakePhoto(Camera.PictureSourceType.PHOTOLIBRARY);
};

function onSuccess(imageData){
	var image = document.getElementById('myImage');
	image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message){
	alert('Failed because: ' + message);
}

function TakePhoto(sourceType){
	var camOptions={
		quality=50,
		destinationType: Camera.DestinationType.DATA_URL,
		sourceType: sourceType,
		correctOrientation: true
	};
	navigator.camera.getPicture(onSuccess, onFail, camOptions);
}