import { renderGallery } from './render-gallery.js';
import { debounce, shufflePictures } from './util.js';

const RANDOM_PHOTO_COUNT = 10;

const filterContainer = document.querySelector('.img-filters');

const imgFiltersForm = filterContainer.querySelector('.img-filters__form');
const filtersButtonDefault = imgFiltersForm.querySelector('#filter-default');
const filtersButtonRandom = imgFiltersForm.querySelector('#filter-random');
const filtersButtonDiscussed = imgFiltersForm.querySelector('#filter-discussed');

const FilterType = {
  DEFAULT: 'default',
  RANDOM: 'random',
  DISCUSSED: 'discussed'
};

const handleFilter = {
  [FilterType.DEFAULT]: (pictures) => pictures,
  [FilterType.RANDOM]: (pictures) => shufflePictures(pictures).slice(0, RANDOM_PHOTO_COUNT),
  [FilterType.DISCUSSED]: (pictures) => pictures.slice().sort((a, b) => b.comments.length - a.comments.length)
};

const activateFilters = (evt) => {
  const buttonActive = filterContainer.querySelector('.img-filters__button--active');
  buttonActive.classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
};

const drawFilters = (evt, filter, pictures) => {
  const filteredPictures = handleFilter[filter](pictures);
  const picturesList = document.querySelectorAll('.picture');
  picturesList.forEach((photo) => photo.remove());
  renderGallery(filteredPictures);
  activateFilters(evt);
};

const debouncedSetFilters = debounce(drawFilters);

const initFilters = (pictures) => {
  filterContainer.classList.remove('img-filters--inactive');

  filtersButtonDefault.addEventListener('click', (evt) => {
    debouncedSetFilters(evt, FilterType.DEFAULT, pictures);
  });
  filtersButtonRandom.addEventListener('click', (evt) => {
    debouncedSetFilters(evt, FilterType.RANDOM, pictures);
  });
  filtersButtonDiscussed.addEventListener('click', (evt) => {
    debouncedSetFilters(evt, FilterType.DISCUSSED, pictures);
  });
};

export { initFilters };
