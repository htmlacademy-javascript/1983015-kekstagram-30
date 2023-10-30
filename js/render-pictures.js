const picturesContainer = document.querySelector('.pictures');
const picturesTitle = document.querySelector('.pictures__title');
picturesTitle.classList.remove('visually-hidden');
const pictureTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');

const renderPicture = ({ url, description, comments, likes, photoId }) => {
  const thumbnail = pictureTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.dataset.photoId = photoId;

  return thumbnail;
};

const renderPictures = (photos) => {
  const pictureFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const thumbnails = renderPicture(photo);
    pictureFragment.append(thumbnails);

    thumbnails.addEventListener('click', () => {
      document.querySelector('.big-picture__img img').src = photo.url;
      document.querySelector('.big-picture__img img').alt = photo.description;
      document.querySelector('.likes-count').textContent = photo.likes;
      document.querySelector('.social__caption').textContent = photo.description;
    });
    picturesContainer.append(pictureFragment);
  });
};

export { renderPictures, picturesContainer};

