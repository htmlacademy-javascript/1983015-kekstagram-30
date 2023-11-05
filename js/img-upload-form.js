import { isEscapeKey } from './util.js';
import {bodyContainer} from './overlay-pictures.js';

const form = document.querySelector('.img-upload__form');

//const imgUploadSubmitButton = imgUploadForm.querySelector('.img-upload__submit');
//imgUploadSubmitButton.disabled = true;

const imgUploadOverlay = form.querySelector('.img-upload__overlay');
const imgUploadCancelButton = form.querySelector('.img-upload__cancel');
const imgUploadInput = form.querySelector('.img-upload__input ');

const showEditingForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  bodyContainer.classList.add('modal-open');
  document.addEventListener('keydown', onImgEscKeydown);
};

const closeEditingForm = () => {
  imgUploadOverlay.classList.add('hidden');
  bodyContainer.classList.remove('modal-open');
  document.removeEventListener('keydown', onImgEscKeydown);
  imgUploadInput.value = '';
};

const onCloseFormButtonClick = () => {
  closeEditingForm();
};

function onImgEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditingForm();
  }
}

imgUploadInput.addEventListener('change', showEditingForm);

imgUploadCancelButton.addEventListener('click', onCloseFormButtonClick);
