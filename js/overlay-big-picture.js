import { isEscapeKey } from './util';

const overlayBigPicture = document.querySelector('.big-picture');
const overlayBigPictureOpen = document.querySelector('.pictures');
const overlayBigPictureClose = document.querySelector('.big-picture__cancel');

const onPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    overlayBigPicture.classList.add('hidden');
  }
};

const openBigPicture = (evt) => {
  if (evt.target.closest('.picture')) {
    evt.preventDefault();
    overlayBigPicture.classList.remove('hidden');
    document.addEventListener('keydown', onPictureEscKeydown);
  }
};

const closeBigPicture = () => {
  overlayBigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onPictureEscKeydown);
};

overlayBigPictureOpen.addEventListener('click', openBigPicture);

overlayBigPictureClose.addEventListener('click', closeBigPicture);
