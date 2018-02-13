$(document).ready(function () {
    var element = document.getElementById('photo');
    element.addEventListener('change', function (evt) {
        console.log(this);
        if (this.files && this.files[0]) {
            var previewElement = document.getElementById('profilePreview');
            var previewText = document.getElementById('createProfile__filename-preview');
            previewElement.src = window.URL.createObjectURL(this.files[0]);
            previewText.innerText = this.files[0].name;
        } else {
            console.log('Something going wrong with file');
        }
    });
});