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
  for (let i = photos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [photos[i], photos[j]] = [photos[j], photos[i]];
  }
};

const sortPictures = (photos) => {
  photos.sort((a, b) => b.comments.length - a.comments.length);
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
  shufflePictures,
  sortPictures,
  debounce
};

