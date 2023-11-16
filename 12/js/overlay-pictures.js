import { isEscapeKey } from './util.js';
import { renderComments } from './render-comments.js';

const START_COMMENT_COUNT = 5;

const commentContainer = document.querySelector('.social__comments');
const overlayBigPicture = document.querySelector('.big-picture');
const bodyContainer = document.querySelector('body');
const overlayPictureClose = overlayBigPicture.querySelector('.big-picture__cancel');
const countComment = overlayBigPicture.querySelector('.social__comment-count');
const commentLoader = overlayBigPicture.querySelector('.comments-loader');
const commentTotalCount = overlayBigPicture.querySelector('.social__comment-total-count');

let commentStart = 0;

const closePicture = () => {
  overlayBigPicture.classList.add('hidden');
  bodyContainer.classList.remove('modal-open');
  document.removeEventListener('keydown', onPictureEscKeydown);
};

function onClosePictureButtonClick() {
  closePicture();
}

function onPictureEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePicture();
  }
}

const renderOverlayPicture = ({ url, description, likes, comments }) => {
  const bigPicture = overlayBigPicture.querySelector('.big-picture__img img');
  bigPicture.src = url;
  bigPicture.alt = description;
  overlayBigPicture.querySelector('.likes-count').textContent = likes;
  overlayBigPicture.querySelector('.social__caption').textContent = description;
  commentTotalCount.textContent = comments.length;
  const commentsCount = comments.length;

  const upDateComment = () => {
    commentStart += START_COMMENT_COUNT;
    if (commentStart >= commentsCount) {
      commentStart = commentsCount;
      commentLoader.classList.add('hidden');
      commentLoader.removeEventListener('click', upDateComment);
    } else {
      commentLoader.classList.remove('hidden');
      commentLoader.addEventListener('click', upDateComment);
    }

    commentContainer.innerHTML = '';
    commentContainer.append(renderComments(comments.slice(0, commentStart)));
    countComment.innerHTML = `${commentStart} из <span class="social__comment-total-count">${commentsCount}</span> комментариев`;
  };

  if (comments.length) {
    upDateComment();
  } else {
    commentContainer.innerHTML = '';
    commentLoader.classList.add('hidden');
    countComment.innerHTML = 'К этой фотографии нет комментариев.';
  }
};

const openPicture = (photoData) => {
  commentStart = 0;
  overlayBigPicture.classList.remove('hidden');
  bodyContainer.classList.add('modal-open');
  document.addEventListener('keydown', onPictureEscKeydown);
  renderOverlayPicture(photoData);
};

overlayPictureClose.addEventListener('click', onClosePictureButtonClick);

export { openPicture, bodyContainer };
