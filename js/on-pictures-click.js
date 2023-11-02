import { isEscapeKey } from './util.js';

const bodyContainer = document.querySelector('body');
const overlayBigPicture = document.querySelector('.big-picture');
const overlayBigPictureClose = document.querySelector('.big-picture__cancel');

const onPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    overlayBigPicture.classList.add('hidden');
  }
};

//const getPhotoObjectFromArrayById = (idPhoto, photos) => photos.find((photo) => photo.id === Number(idPhoto));

const openBigPicture = (evt) => {
  evt.preventDefault();
  if (evt.target.closest('.picture')) {
    overlayBigPicture.classList.remove('hidden');
    bodyContainer.classList.add('modal-open');
    document.addEventListener('keydown', onPictureEscKeydown);
  }
};

const closeBigPicture = () => {
  overlayBigPicture.classList.add('hidden');
  bodyContainer.classList.remove('modal-open');
  document.removeEventListener('keydown', onPictureEscKeydown);
};
overlayBigPictureClose.addEventListener('click', closeBigPicture);
export { openBigPicture, overlayBigPicture};

