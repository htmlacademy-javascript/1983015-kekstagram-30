const commentContainer = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment')
  .content.querySelector('.social__comment');

const renderComment = ({ avatar, message, name }) => {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = (commentsArray) => {
  commentContainer.innerHTML = '';

  const commentFragment = document.createDocumentFragment();

  commentsArray.forEach((commentItem) => {
    const comments = renderComment(commentItem);
    commentFragment.append(comments);
  });
  commentContainer.append(commentFragment);
};

export {renderComments};


