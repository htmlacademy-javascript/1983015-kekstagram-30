import { imgUploadForm } from './img-upload-form.js';

const textHashtags = imgUploadForm.querySelector('.text__hashtags');
//const textComments = imgUploadForm.querySelector('.text__description');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div'
}, false);

const regexpHashtag = /^#[a-zа-яё0-9]{1,19}[ \s]$/i;

//введён невалидный хэш-тег
const validateHashtags = (hashtagList) => {
  const hashtags = hashtagList.split(' ');
  for (let i = 1; i < hashtags.length; i++) {
    return (regexpHashtag.test(hashtags[i]));
  }
};

pristine.addValidator(
  textHashtags,
  validateHashtags(),
  'Введён невалидный хэш-тег'
);

// превышено количество хэш-тегов
const checkHashtagListLength = (hashtags) => hashtags.length <= 5;

pristine.addValidator(
  textHashtags,
  checkHashtagListLength(),
  'Превышено количество хэш-тегов'
);

//хэш-теги повторяются
const checkUniqueHashtags = (hashtags) => {
  let uniqueHashtags = [];
  uniqueHashtags = hashtags.filter((item) => hashtags.indexOf(item) === hashtags.lastIndexOf(item));

  return (uniqueHashtags.length >= 1);
};

pristine.addValidator(
  textHashtags,
  checkUniqueHashtags(),
  'Хэш-теги повторяются'
);

//нажатие на Esc

// длина комментария больше 140 символов - В РАЗМЕТКЕ
/*const checkCommentLength = (comments) => comments.length <= 140;

pristine.addValidator(
  textComments,
  checkCommentLength(),
  'Длина комментария больше 140 символов'
);*/

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

/*imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    //console.log('Можно отправлять');
  } else {
    //console.log('Форма невалидна');
  }
});*/
