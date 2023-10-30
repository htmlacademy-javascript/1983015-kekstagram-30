import { isEscapeKey } from './util';
import { picturesContainer } from './render-pictures';

const bodyContainer = document.querySelector('body');
const overlayBigPicture = document.querySelector('.big-picture');
const overlayBigPictureClose = document.querySelector('.big-picture__cancel');
const countComment = overlayBigPicture.querySelector('.social__comment-count');
const commentLoader = overlayBigPicture.querySelector('.comments-loader');

const onPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    overlayBigPicture.classList.add('hidden');
  }
};

const openBigPicture = (evt) => {
  if (evt.target.closest('.picture').dataset.photoId) {
    evt.preventDefault();
    overlayBigPicture.classList.remove('hidden');
    bodyContainer.classList.add('modal-open');
    countComment.classList.add('hidden');
    commentLoader.classList.add('hidden');
    document.addEventListener('keydown', onPictureEscKeydown);
  }
};


const closeBigPicture = () => {
  overlayBigPicture.classList.add('hidden');
  bodyContainer.classList.remove('modal-open');
  document.removeEventListener('keydown', onPictureEscKeydown);
};

picturesContainer.addEventListener('click', openBigPicture);

overlayBigPictureClose.addEventListener('click', closeBigPicture);

export { openBigPicture };

