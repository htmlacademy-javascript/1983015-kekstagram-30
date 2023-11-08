import { isEscapeKey } from './util.js';
import { bodyContainer } from './overlay-pictures.js';

const NUMBER_OF_HASHTAGS = 5;
const REXEXP_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;

//const imgUploadSubmitButton = imgUploadForm.querySelector('.img-upload__submit');
//imgUploadSubmitButton.disabled = true;
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancelButton = imgUploadForm.querySelector('.img-upload__cancel');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input ');
const textHashtags = imgUploadForm.querySelector('.text__hashtags');
const textComments = imgUploadForm.querySelector('.text__description');

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
  imgUploadOverlay.classList.add('hidden');
  bodyContainer.classList.remove('modal-open');
  document.removeEventListener('keydown', onImgEscKeydown);
};

const isFieldFocused = () => document.activeElement === textHashtags || document.activeElement === textComments;

function onImgEscKeydown(evt) {
  if (isEscapeKey(evt) && isFieldFocused()) {
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

//введён невалидный хэш-тег
pristine.addValidator(
  textHashtags,
  checkValidateHashtag,
  'Введён невалидный хэш-тег',
  1,
  true
);

//превышено количество хэш-тегов
pristine.addValidator(
  textHashtags,
  checkHashtagListLength,
  'Превышено количество хэш-тегов',
  2,
  true
);

//хэш-теги повторяются
pristine.addValidator(
  textHashtags,
  checkUniqueHashtags,
  'Хэш-теги повторяются',
  3,
  true
);

const onCloseFormButtonClick = () => {
  closeEditingForm();
};

const onShowFormInputChange = () => {
  showEditingForm();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

imgUploadForm.addEventListener('submit', onFormSubmit);

imgUploadInput.addEventListener('change', onShowFormInputChange);

imgUploadCancelButton.addEventListener('click', onCloseFormButtonClick);
