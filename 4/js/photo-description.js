import {generatePhotoId} from './fn-unique-id.js';
import {generatePhotoUrl} from './fn-unique-id.js';
import {getRandomInteger} from './util.js';
import {getRandomArrayElement} from './util.js';
import {createComment} from './comment.js';

// Входные данные
const PHOTO_FOLDER = 'photos/';
const PHOTO_FORMAT = '.jpg';
const LIKE_MIN_QUANTITY = 15;
const LIKE_MAX_QUANTITY = 200;
const COMMENTS_MIN_QUANTITY = 0;
const COMMENTS_MAX_QUANTITY = 30;


const DESCRIPTIONS = [
  'Италия',
  'Тихий океан',
  'Девушка с цветами',
  'Хорошо в деревне',
  'Закат',
  'Рассвет',
  'Луна',
  'Извержение вулкана',
  'Красное море',
  'Пирамиды',
  'Девушка в купальнике',
  'Салон красоты',
  'Горы',
  'Клубника',
  'Снег',
  'Дождь',
  'Осень',
  'Весна',
  'Лето',
  'Зима',
  'Радуга',
  'Звездопад',
  'Учеба',
  'Отпуск',
  'Релакс',
];

// Необходимое количество сгенерированных объектов
const PHOTO_DESCRIPTION_COUNT = 25;

// Объект, описания фотографии, опубликованной пользователем
const createPhoto = () => ({
  photoId: generatePhotoId(),
  url: (PHOTO_FOLDER + generatePhotoUrl() + PHOTO_FORMAT),
  description: getRandomArrayElement(DESCRIPTIONS),
  like: getRandomInteger(LIKE_MIN_QUANTITY, LIKE_MAX_QUANTITY),
  comment: (Array.from({ length: getRandomInteger(COMMENTS_MIN_QUANTITY, COMMENTS_MAX_QUANTITY) }, createComment))
});

// Создание массива из 25 сгенерированных объектов (описание фотографии)
const createPhotos = () => Array.from({ length: PHOTO_DESCRIPTION_COUNT }, createPhoto);

export {createPhotos};

