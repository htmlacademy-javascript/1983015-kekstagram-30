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

export {
  isEscapeKey,
  showDataError
};

