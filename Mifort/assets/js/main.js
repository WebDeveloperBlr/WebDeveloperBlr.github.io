
var element = document.getElementById('photo');
if (element) {
	element.addEventListener('change',function (evt) {
		console.log(this);
		if(this.files && this.files[0]){
			var previewElement = document.getElementById('profilePreview');
	          var previewText = document.getElementById('createProfile__filename-preview');
			previewElement.src = window.URL.createObjectURL(this.files[0]);
	          previewText.innerText = this.files[0].name;
		}
  });
}
