
//自动切换
var slideshows = document.querySelectorAll('.slideshow');

slideshows.forEach(function (slideshow) {
  var images = slideshow.querySelectorAll('img');
  var currentImageIndex = 0;
  var slideshowInterval = setInterval(nextImage, 2000);

  function nextImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
  }
});
//手动切换
const selects = document.querySelectorAll('select');
const images = document.querySelectorAll('img');

selects.forEach((select, index) => {
  select.addEventListener('change', function() {
    const selectedImage = select.value;
    images[index].src = selectedImage;
    images[index].alt = `Image ${selectedImage.slice(-5, -4)}`;
  });
});
