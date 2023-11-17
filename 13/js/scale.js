const STEP_SCALE = 25;
const MIN_VALUE = 25;
const MAX_VALUE = 100;
const DEFAULT_VALUE = 100;

const imgUploadForm = document.querySelector('.img-upload__form');
const scaleControlSmallerButton = imgUploadForm.querySelector('.scale__control--smaller');
const scaleControBiggerrButton = imgUploadForm.querySelector('.scale__control--bigger');
const scaleControlValueInput = imgUploadForm.querySelector('.scale__control--value');
const imgUploadPreview = imgUploadForm.querySelector('.img-upload__preview img');

const addStyleScaleImage = (value) => {
  imgUploadPreview.style.transform = `scale(${value / 100})`;
  scaleControlValueInput.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  addStyleScaleImage(Math.max(parseInt(scaleControlValueInput.value, 10) - STEP_SCALE, MIN_VALUE)
  );
};

const onBiggerButtonClick = () => {
  addStyleScaleImage(Math.min(parseInt(scaleControlValueInput.value, 10) + STEP_SCALE, MAX_VALUE)
  );
};

const resetScale = () => addStyleScaleImage(DEFAULT_VALUE);

scaleControlSmallerButton.addEventListener('click', onSmallerButtonClick);
scaleControBiggerrButton.addEventListener('click', onBiggerButtonClick);

export {resetScale};
