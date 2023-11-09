const effectList = {
  chrome: {
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    start: 1,
  },
  sepia: {
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    start: 1
  },
  marvin: {
    filter: 'invert',
    min: 0,
    max: 100,
    unit: '%',
    step: 0.1,
    start: 100
  },
  phobos: {
    filter: 'blur',
    min: 0,
    max: 3,
    unit: 'px',
    step: 0.1,
    start: 3
  },
  heat: {
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    start: 3
  },
  default: {
    filter: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: 'px',
    start: 100
  }
};

const imgUploadForm = document.querySelector('.img-upload__form');
const effectSliderElement = imgUploadForm.querySelector('.effect-level__slider');
const effectInputValue = imgUploadForm.querySelector('.effect-level__value');
const imgUploadPreview = imgUploadForm.querySelector('.img-upload__preview img');
const imgUploadEffectLevel = imgUploadForm.querySelector('.img-upload__effect-level');
const effectsRadio = imgUploadForm.querySelector('.effects__radio');
const effects = imgUploadForm.querySelector('.effects');
effectInputValue.value = 100;

noUiSlider.create(effectSliderElement, {
  range: {
    min: effectList.default.min,
    max: effectList.default.max,
  },
  start: effectList.default.max,
  step: effectList.default.step,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

effectSliderElement.noUiSlider.on('update', () => {
  effectInputValue.value = effectSliderElement.noUiSlider.get();
  imgUploadPreview.style.filter = `${effectList.filter}(${effectInputValue.value}${effectList.unit})`;
});

const selectsEffect = () => {
  effectsRadio.addEventListener('change', (evt) => {

    if (evt.target.matches('#effect-none')) {
      effectSliderElement.classList.add('hidden');
      imgUploadEffectLevel.classList.add('hidden');
      imgUploadPreview.style.filter = 'none';

    } else if (evt.target.matches('#effect-chrome')) {
      effectSliderElement.noUiSlider.updateOptions({
        range: {
          min: effectList.chrome.min,
          max: effectList.chrome.max,
        },
        start: effectList.chrome.start,
        step: effectList.chrome.step
      });

    } else if (evt.target.matches('#effect-sepia')) {
      effectSliderElement.noUiSlider.updateOptions({
        range: {
          min: effectList.sepia.min,
          max: effectList.sepia.max,
        },
        start: effectList.sepia.start,
        step: effectList.sepia.step
      });

    } else if (evt.target.matches('#effect-marvin')) {
      effectSliderElement.noUiSlider.updateOptions({
        range: {
          min: effectList.marvin.min,
          max: effectList.marvin.max,
        },
        start: effectList.marvin.start,
        step: effectList.marvin.step
      });

    } else if (evt.target.matches('#effect-phobos')) {
      effectSliderElement.noUiSlider.updateOptions({
        range: {
          min: effectList.phobos.min,
          max: effectList.phobos.max,
        },
        start: effectList.phobos.start,
        step: effectList.phobos.step
      });

    } else if (evt.target.matches('#effect-heat')) {
      effectSliderElement.noUiSlider.updateOptions({
        range: {
          min: effectList.heat.min,
          max: effectList.heat.max,
        },
        start: effectList.heat.start,
        step: effectList.heat.step
      });

    } else {
      effectSliderElement.noUiSlider.updateOptions({
        range: {
          min: effectList.default.min,
          max: effectList.default.max,
        },
        start: effectList.default.max,
        step: effectList.default.step,
      });
    }
  });
};

const onShowEffectClick = () => {
  selectsEffect();
};

effects.addEventListener('click', onShowEffectClick);

export {effectSliderElement};

