const picturesTitle = document.querySelector('.pictures__title');
picturesTitle.classList.remove('visually-hidden');
const pictureTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');

const renderPicture = ({ url, description, comments, likes, id }) => {
  const thumbnail = pictureTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.dataset.photoId = id;

  return thumbnail;
};

const renderPictures = (photos, containerThumbnails) => {
  const pictureFragment = document.createDocumentFragment();

  photos.forEach((photoItem) => {
    const thumbnails = renderPicture(photoItem);
    pictureFragment.append(thumbnails);
  });

  containerThumbnails.append(pictureFragment);
};

export { renderPictures };

