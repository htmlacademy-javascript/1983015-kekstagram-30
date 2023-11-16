import { isEscapeKey } from './util.js';

const errorMessage = document.querySelector('#error')
  .content.querySelector('.error');
const successMessage = document.querySelector('#success')
  .content.querySelector('.success');

const closeMessage = () => {
  const exitMessage = document.querySelector('.success') || document.querySelector('.error');
  exitMessage.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.body.removeEventListener('click', onBodyClick);
};

const onCloseButtonClick = () => {
  closeMessage();
};

function onMessageEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
}

function onBodyClick(evt) {
  if (evt.target.closest('.success__inner') || (evt.target.closest('.error__inner'))) {
    return;
  }
  closeMessage();
}

const showMessage = (title, buttonClass) => {
  document.body.append(title);
  document.body.addEventListener('click', onBodyClick);
  document.addEventListener('keydown', onMessageEscKeydown);
  title.querySelector(buttonClass).addEventListener('click', onCloseButtonClick);
};

const showMessageError = () => {
  showMessage(errorMessage, '.error__button');
};

const showMessageSuccess = () => {
  showMessage(successMessage, '.success__button');
};

export {
  showMessageError,
  showMessageSuccess
};
