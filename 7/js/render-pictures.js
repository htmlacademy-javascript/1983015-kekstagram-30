import { createPhotos } from './create-photos.js';

const pictures = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');

const drawsPicture = createPhotos();

const renderPictures = () => {
  const picturesFragment = document.createDocumentFragment();

  drawsPicture.forEach((photo) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = photo.url;
    picture.querySelector('.picture__img').alt = photo.description;
    picture.querySelector('.picture__comments').textContent = photo.comment.length;
    picture.querySelector('.picture__likes').textContent = photo.like;
    picturesFragment.append(picture);
  });
  pictures.append(picturesFragment);
};

export { renderPictures };
