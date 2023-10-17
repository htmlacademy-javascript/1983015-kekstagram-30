// Входные данные

const PHOTO_FOLDER = 'photos/';
const PHOTO_FORMAT = '.jpg';
const AVATAR_FOLDER = 'img/avatar-';
const AVATAR_FORMAT = '.svg';
const LIKE_MIN_QUANTITY = 15;
const LIKE_MAX_QUANTITY = 200;
const COMMENTS_MIN_QUANTITY = 0;
const COMMENTS_MAX_QUANTITY = 30;
const AVATAR_MIN_NUMBER = 1;
const AVATAR_MAX_NUMBER = 6;

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

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Роман',
  'Алексей',
  'София',
  'Иван',
  'Александр',
  'Мария'
];

// Необходимое количество сгенерированных объектов
const PHOTO_DESCRIPTION_COUNT = 25;

//Функция-генератор для получения уникальных идентификаторов
function createIdGenerator() {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}
const generatePhotoId = createIdGenerator();
const generateCommentId = createIdGenerator();
const generatePhotoUrl = createIdGenerator();

// Функция получения целого числа из переданного диапазона
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция-генератор для получения случайных идентификаторов из указанного диапазона
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Комментарий, оставленный другим пользователем фотографии.
const createComment = () => ({
  commentId: generateCommentId(),
  avatar: (AVATAR_FOLDER + getRandomInteger(AVATAR_MIN_NUMBER, AVATAR_MAX_NUMBER) + AVATAR_FORMAT),
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

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
createPhotos();

