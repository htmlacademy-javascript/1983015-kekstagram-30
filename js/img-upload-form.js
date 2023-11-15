import { isEscapeKey } from './util.js';
import { showMessageError, showMessageSuccess } from './form-message.js';
import { resetScale } from './scale.js';
import { initEffect, resetEffect } from './slider.js';
import { sendPicture } from './api.js';

const NUMBER_OF_HASHTAGS = 5;
const REXEXP_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const bodyContainer = document.querySelector('body');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancelButton = imgUploadForm.querySelector('.img-upload__cancel');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input ');
const textHashtags = imgUploadForm.querySelector('.text__hashtags');
const textComments = imgUploadForm.querySelector('.text__description');
const submitButton = imgUploadForm.querySelector('.img-upload__submit');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const showEditingForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  bodyContainer.classList.add('modal-open');
  document.addEventListener('keydown', onImgEscKeydown);
};

const closeEditingForm = () => {
  imgUploadForm.reset();
  pristine.reset();
  resetScale();
  resetEffect();
  imgUploadOverlay.classList.add('hidden');
  bodyContainer.classList.remove('modal-open');
  document.removeEventListener('keydown', onImgEscKeydown);
};

const isFieldFocused = () => document.activeElement === textHashtags || document.activeElement === textComments;

const isErrorMessageExists = () => Boolean(document.querySelector('.error'));

function onImgEscKeydown(evt) {
  if (isEscapeKey(evt) && !isFieldFocused() && !isErrorMessageExists) {
    evt.preventDefault();
    closeEditingForm();
  }
}

const normalizeHashtags = (str) => str.trim().split(' ').filter((hashtag) => Boolean(hashtag.length));

const checkValidateHashtag = (value) => normalizeHashtags(value).every((hashtag) => REXEXP_HASHTAG.test(hashtag));

const checkHashtagListLength = (value) => normalizeHashtags(value).length <= NUMBER_OF_HASHTAGS;

const checkUniqueHashtags = (value) => {
  const loserCaseHashtags = normalizeHashtags(value).map((hashtag) => hashtag.toLowerCase());
  return loserCaseHashtags.length === new Set(loserCaseHashtags).size;
};

pristine.addValidator(
  textHashtags,
  checkValidateHashtag,
  'Введён невалидный хэш-тег',
  1,
  true
);

pristine.addValidator(
  textHashtags,
  checkHashtagListLength,
  'Превышено количество хэш-тегов',
  2,
  true
);

pristine.addValidator(
  textHashtags,
  checkUniqueHashtags,
  'Хэш-теги повторяются',
  3,
  true
);

const checkCommentLength = (comments) => comments.length <= 140;

pristine.addValidator(
  textComments,
  checkCommentLength,
  'Длина комментария больше 140 символов'
);

const onCloseFormButtonClick = () => {
  closeEditingForm();
};

const onShowFormInputChange = () => {
  showEditingForm();
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const sendForm = async (formElement) => {
  if (!pristine.validate()) {
    return;
  }
  try {
    blockSubmitButton();
    await sendPicture(new FormData(formElement));
    unblockSubmitButton();
    closeEditingForm();
    showMessageSuccess();
  } catch {
    showMessageError();
    unblockSubmitButton();
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  sendForm(evt.target);
};

/*const onFormSubmit = (onSuccess, evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton();
    sendPicture(new FormData(evt.target))
      .then(onSuccess);
    closeEditingForm();
    showMessageSuccess()
      .catch(
        (err) => {
          showMessageError(err.message);
        }
      )
      .finally(unblockSubmitButton);
  }
};*/

imgUploadForm.addEventListener('submit', onFormSubmit);

imgUploadInput.addEventListener('change', onShowFormInputChange);

imgUploadCancelButton.addEventListener('click', onCloseFormButtonClick);
initEffect();
