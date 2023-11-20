const effectList = {
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
  DEFAULT: 'none'
};

const effectToFilter = {
  [effectList.CHROME]: {
    filter: 'grayscale',
    unit: ''
  },
  [effectList.SEPIA]: {
    filter: 'sepia',
    unit: ''
  },
  [effectList.MARVIN]: {
    filter: 'invert',
    unit: '%'
  },
  [effectList.PHOBOS]: {
    filter: 'blur',
    unit: 'px'
  },
  [effectList.HEAT]: {
    filter: 'brightness',
    unit: ''
  },
  [effectList.DEFAULT]: {
    filter: 'none',
    unit: '%'
  }
};

const effectToSliderOptions = {
  [effectList.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1
  },
  [effectList.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1
  },
  [effectList.MARVIN]: {
    min: 0,
    max: 100,
    step: 1
  },
  [effectList.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1
  },
  [effectList.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1
  },
  [effectList.DEFAULT]: {
    min: 0,
    max: 100,
    step: 1
  }
};

const imgUploadForm = document.querySelector('.img-upload__form');
const effectSlider = imgUploadForm.querySelector('.effect-level__slider');
const effectInputValue = imgUploadForm.querySelector('.effect-level__value');
const imgUploadPreview = imgUploadForm.querySelector('.img-upload__preview img');
const imgUploadEffectLevel = imgUploadForm.querySelector('.img-upload__effect-level');
const effects = imgUploadForm.querySelector('.effects');

let chosenEffect = effectList.DEFAULT;

const isDefault = () => chosenEffect === effectList.DEFAULT;

const setImageStyle = () => {
  if (isDefault()) {
    imgUploadPreview.style.filter = null;
    return;
  }
  const { value } = effectInputValue;
  const { filter, unit } = effectToFilter[chosenEffect];
  imgUploadPreview.style.filter = `${filter}(${value}${unit})`;
};

const showSlider = () => {
  imgUploadEffectLevel.classList.remove('hidden');
};

const closeSlider = () => {
  imgUploadEffectLevel.classList.add('hidden');
};

const onSliderUpdate = () => {
  effectInputValue.value = effectSlider.noUiSlider.get();
  setImageStyle();
};

const createSlider = ({ min, max, step }) => {
  noUiSlider.create(effectSlider, {
    range: {
      min,
      max
    },
    start: max,
    step,
    connect: 'lower',
    format: {
      to: (value) => Number(value),
      from: (value) => Number(value),
    }
  });

  effectSlider.noUiSlider.on('update', onSliderUpdate);
  closeSlider();
};

const updateSlider = ({ min, max, step }) => {
  effectSlider.noUiSlider.updateOptions({
    range: {
      min,
      max,
    },
    start: max,
    step
  });
};

const changeSlider = () => {
  if (isDefault()) {
    closeSlider();
  } else {
    updateSlider(effectToSliderOptions[chosenEffect]);
    showSlider();
  }
};

const changeEffect = (effect) => {
  chosenEffect = effect;
  changeSlider();
  setImageStyle();
};

const resetEffect = () => {
  changeEffect(effectList.DEFAULT);
};

const onEffectChoose = (evt) => {
  changeEffect(evt.target.value);
};

const initEffect = () => {
  createSlider(effectToSliderOptions[chosenEffect]);
  effects.addEventListener('change', onEffectChoose);
};
export { initEffect, resetEffect };
