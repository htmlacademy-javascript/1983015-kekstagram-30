import { createPhotos } from './photo-description.js';

const pictures = document.querySelector('.pictures');

const pictureTemplate = document.querySelectorAll('#picture')
  .content.querySelector('.picture');

const drawsPicture = createPhotos();

const pictureFragment = document.createDocumentFragment();

drawsPicture.forEach((url, description, comment, like) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comment;
  picture.querySelector('.picture__likes').textContent = like;
  pictureFragment.append(picture);
});

pictures.append(pictureFragment);

export { pictureFragment };
