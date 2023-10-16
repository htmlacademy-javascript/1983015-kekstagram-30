// Входные данные

const PHOTO_FOLDER = 'photos/';
const PHOTO_FORMAT = '.jpg';
const AVATAR_FOLDER = 'img/avatar-';
const AVATAR_FORMAT = '.svg';

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
function createIdGenerator () {
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
const createComments = () => ({
  commentId: generateCommentId(),
  avatar: (AVATAR_FOLDER + getRandomInteger(1, 6) + AVATAR_FORMAT),
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

// Объект, описания фотографии, опубликованной пользователем
const createPhotos = () => ({
  photoId: generatePhotoId(),
  url: (PHOTO_FOLDER + generatePhotoUrl() + PHOTO_FORMAT),
  description: getRandomArrayElement(DESCRIPTIONS),
  like: getRandomInteger(15, 200),
  comment:(Array.from({length: getRandomInteger(0, 30)}, createComments))
});

// Создание массива из 25 сгенерированных объектов (описание фотографии)
const photos = Array.from({length: PHOTO_DESCRIPTION_COUNT}, createPhotos);

console.log(photos);

