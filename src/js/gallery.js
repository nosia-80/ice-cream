const galleryPicsEl = document.querySelectorAll('.gallery__pic');
let activePic = document.querySelector('.gallery__pic--active');

galleryPicsEl.forEach(picture => {
  picture.addEventListener('mouseover', event => {
    const pic = event.currentTarget;

    if (pic !== activePic) {
      pic.classList.add('gallery__pic--active');
      activePic.classList.remove('gallery__pic--active');
      activePic = pic;
    }
  });
});
