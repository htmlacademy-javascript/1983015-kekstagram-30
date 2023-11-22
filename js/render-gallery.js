import { openPicture } from './overlay-pictures.js';
import { renderPictures } from './render-pictures.js';

const containerThumbnails = document.querySelector('.pictures');

let firstRender = true;

const renderGallery = (photos) => {
  if (firstRender) {
    containerThumbnails.addEventListener('click', (evt) => {
      const photo = evt.target.closest('[data-photo-id]');
      if (!photo) {
        return;
      }
      evt.preventDefault();
      const photoId = +photo.dataset.photoId;
      const photoData = photos.find(({ id }) => id === photoId);
      openPicture(photoData);
    });
    firstRender = false;
  }
  renderPictures(photos, containerThumbnails);
};

export { renderGallery };
