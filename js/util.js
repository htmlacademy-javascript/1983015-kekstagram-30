const DATA_ERROR_SHOW_TIME = 5000;
const errorDataTemplate = document.querySelector('#data-error')
  .content.querySelector('.data-error');

const isEscapeKey = (evt) => evt.key === 'Escape';

const showDataError = () => {
  const dataError = errorDataTemplate.cloneNode(true);
  document.body.append(dataError);

  setTimeout(() => {
    dataError.remove();
  }, DATA_ERROR_SHOW_TIME);
};

const shufflePictures = (photos) => {
  const copyPhotos = photos.slice();
  for (let i = photos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copyPhotos[i], copyPhotos[j]] = [copyPhotos[j], copyPhotos[i]];
  }
  return copyPhotos;
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {
  isEscapeKey,
  showDataError,
  debounce,
  shufflePictures,
};

