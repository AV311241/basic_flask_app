// function showPreviewImage() {
//     var previewImage = document.getElementById('preview-image');
//     previewImage.src = document.querySelector('.my-image').src;
//     document.getElementById('image-previewer').style.display = 'block';
//   }
  
//   document.getElementById('image-previewer').onclick = function() {
//     this.style.display = 'none';
//   };

function showPreviewImage() {
    var previewImage = document.getElementById('preview-image');
    previewImage.src = event.target.src;
    document.getElementById('image-previewer').style.display = 'block';
   
    document.getElementById('image-previewer').onclick = function() {
        this.style.display = 'none';
    }
  }

  document.querySelectorAll('.my-image').forEach(function(image) {
    image.addEventListener('click', showPreviewImage);
  });