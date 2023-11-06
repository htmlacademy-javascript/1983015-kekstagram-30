import { isEscapeKey } from './util.js';
import { bodyContainer } from './overlay-pictures.js';

const imgUploadForm = document.querySelector('.img-upload__form');

//const imgUploadSubmitButton = imgUploadForm.querySelector('.img-upload__submit');
//imgUploadSubmitButton.disabled = true;

const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancelButton = imgUploadForm.querySelector('.img-upload__cancel');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input ');

const showEditingForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  bodyContainer.classList.add('modal-open');
  document.addEventListener('keydown', onImgEscKeydown);
};

const onShowFormButtonClick = () => {
  showEditingForm();
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
    //evt.stopPropagation();
    closeEditingForm();
  }
}

imgUploadInput.addEventListener('change', onShowFormButtonClick);

imgUploadCancelButton.addEventListener('click', onCloseFormButtonClick);

export {imgUploadForm};
