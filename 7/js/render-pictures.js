import { createPhotos } from './create-photos.js';

const pictures = document.querySelector('.pictures');
const picturesTitle = document.querySelector('.pictures__title');
picturesTitle.classList.remove('visually-hidden');
const pictureTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');

const drawsPicture = createPhotos();

const renderPicture = (photo) => {

  const thumbnail = pictureTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = photo.url;
  thumbnail.querySelector('.picture__img').alt = photo.description;
  thumbnail.querySelector('.picture__comments').textContent = photo.comment.length;
  thumbnail.querySelector('.picture__likes').textContent = photo.like;

  return thumbnail;
};

const renderPictures = () => {
  const pictureFragment = document.createDocumentFragment();

  drawsPicture.forEach((value) => {
    const picture = renderPicture(value);
    pictureFragment.append(picture);
  });
  pictures.append(pictureFragment);
};

export { pictures, renderPictures };
