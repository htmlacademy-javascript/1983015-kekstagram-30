import { renderBigPicture } from './render-overlay-picture.js';
import { openBigPicture } from './on-pictures-click.js';

const picturesContainer = document.querySelector('.pictures');
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

const renderPictures = (photoArray) => {
  const pictureFragment = document.createDocumentFragment();

  photoArray.forEach((photoItem) => {
    const thumbnails = renderPicture(photoItem);
    pictureFragment.append(thumbnails);

    const onThumbnailClick = () => {
      renderBigPicture(photoItem);
      picturesContainer.addEventListener('click', openBigPicture);
    };
    thumbnails.addEventListener('click', onThumbnailClick);
  });

  picturesContainer.append(pictureFragment);
};

export { renderPictures };

