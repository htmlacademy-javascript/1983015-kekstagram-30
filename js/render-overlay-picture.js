import { renderComments, commentContainer } from './render-comments.js';
import { overlayBigPicture} from './on-pictures-click';

const START_COMMENT_COUNT = 5;

const countComment = overlayBigPicture.querySelector('.social__comment-count');
const commentLoader = overlayBigPicture.querySelector('.comments-loader');
const commentTotalCount = overlayBigPicture.querySelector('.social__comment-total-count');
let commentStart = 0;

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

export { renderOverlayPicture};
