import { renderComments } from './render-comments.js';
import { overlayBigPicture } from './on-pictures-click';

const countComment = overlayBigPicture.querySelector('.social__comment-count');
const commentLoader = overlayBigPicture.querySelector('.comments-loader');

const renderOverlayPicture = ({ url, description, likes, comments }) => {
  const bigPicture = overlayBigPicture.querySelector('.big-picture__img img');
  bigPicture.src = url;
  bigPicture.alt = description;
  overlayBigPicture.querySelector('.likes-count').textContent = likes;
  overlayBigPicture.querySelector('.social__caption').textContent = description;
  overlayBigPicture.querySelector('.social__comment-shown-count').textContent = comments;
  overlayBigPicture.querySelector('.social__comment-total-count').textContent = comments.length;

  return bigPicture;
};

const renderBigPicture = (data) => {
  renderOverlayPicture(data);
  renderComments(data.comments);
  countComment.classList.add('hidden');
  commentLoader.classList.add('hidden');
};
export { renderBigPicture };
