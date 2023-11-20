import { isEscapeKey } from './util.js';

const START_COMMENT_COUNT = 5;

const commentContainer = document.querySelector('.social__comments');
const overlayBigPicture = document.querySelector('.big-picture');
const bodyContainer = document.querySelector('body');
const overlayPictureClose = overlayBigPicture.querySelector('.big-picture__cancel');
const commentCount = overlayBigPicture.querySelector('.social__comment-count');
const commentShownCount = overlayBigPicture.querySelector('.social__comment-shown-count');
const commentButtonLoader = overlayBigPicture.querySelector('.comments-loader');
const commentTotalCount = overlayBigPicture.querySelector('.social__comment-total-count');

const commentTemplate = document.querySelector('#comment')
  .content.querySelector('.social__comment');

let commentStart = 0;
let comments = [];

const closePicture = () => {
  overlayBigPicture.classList.add('hidden');
  bodyContainer.classList.remove('modal-open');
  document.removeEventListener('keydown', onPictureEscKeydown);
};

const onClosePictureButtonClick = () => {
  closePicture();
};

function onPictureEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePicture();
  }
}

const renderComment = ({ avatar, message, name }) => {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = () => {
  commentStart += START_COMMENT_COUNT;
  if (commentStart >= comments.length) {
    commentStart = comments.length;
    commentButtonLoader.classList.add('hidden');
  } else {
    commentButtonLoader.classList.remove('hidden');
  }

  const commentFragment = document.createDocumentFragment();
  for(let i = 0; i < commentStart; i++) {
    const comment = renderComment(comments[i]);
    commentFragment.append(comment);
  }
  commentContainer.innerHTML = '';
  commentContainer.append(commentFragment);

  commentShownCount.textContent = commentStart;
  commentTotalCount.textContent = comments.length;
};

const onCommentsButtonClick = () => renderComments();

const renderOverlayPicture = ({ url, description, likes }) => {
  const bigPicture = overlayBigPicture.querySelector('.big-picture__img img');
  bigPicture.src = url;
  bigPicture.alt = description;
  overlayBigPicture.querySelector('.likes-count').textContent = likes;
  overlayBigPicture.querySelector('.social__caption').textContent = description;
};

const openPicture = (photoData) => {
  commentStart = 0;
  overlayBigPicture.classList.remove('hidden');
  bodyContainer.classList.add('modal-open');
  document.addEventListener('keydown', onPictureEscKeydown);

  comments = photoData.comments;
  if (comments.length > 0) {
    renderComments();
  } else {
    commentContainer.innerHTML = '';
    commentButtonLoader.classList.add('hidden');
    commentCount.innerHTML = 'К этой фотографии нет комментариев.';
  }

  renderOverlayPicture(photoData);
};

overlayPictureClose.addEventListener('click', onClosePictureButtonClick);
commentButtonLoader.addEventListener('click', onCommentsButtonClick);

export { openPicture };
