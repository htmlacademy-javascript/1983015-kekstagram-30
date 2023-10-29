const picturesContainer = document.querySelector('.pictures');
const picturesTitle = document.querySelector('.pictures__title');
picturesTitle.classList.remove('visually-hidden');
const pictureTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');

const renderPicture = ({url, description, comment, like, photoId}) => {
  const thumbnail = pictureTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comment.length;
  thumbnail.querySelector('.picture__likes').textContent = like;
  thumbnail.dataset.photoId = photoId;

  return thumbnail;
};

const renderPictures = (photos) => {
  const pictureFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const thumbnails = renderPicture(photo);
    pictureFragment.append(thumbnails);
  });
  picturesContainer.append(pictureFragment);
};

export { picturesContainer, renderPictures };
