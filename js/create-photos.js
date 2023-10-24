import { DESCRIPTIONS } from './data.js';
import {createIdGenerator} from './create-id-generator.js';
import {getRandomInteger, getRandomArrayElement} from './util.js';
import {createComment} from './create-comment.js';

const LIKE_MIN_QUANTITY = 15;
const LIKE_MAX_QUANTITY = 200;
const COMMENTS_MIN_QUANTITY = 0;
const COMMENTS_MAX_QUANTITY = 30;

const PHOTO_DESCRIPTION_COUNT = 25;


const generatePhotoId = createIdGenerator();
const generatePhotoUrl = createIdGenerator();

const createPhoto = () => ({
  photoId: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  like: getRandomInteger(LIKE_MIN_QUANTITY, LIKE_MAX_QUANTITY),
  comment: (Array.from({ length: getRandomInteger(COMMENTS_MIN_QUANTITY, COMMENTS_MAX_QUANTITY) }, createComment))
});

const createPhotos = () => Array.from({ length: PHOTO_DESCRIPTION_COUNT}, createPhoto);

export {createPhotos};

