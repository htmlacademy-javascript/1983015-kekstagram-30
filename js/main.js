const PHOTO_FOLDER = 'photos/';
const PHOTO_FORMAT = '.jpg';
const AVATAR_FOLDER = 'img/avatar-';
const AVATAR_FORMAT = '.svg';

const PHOTOS_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const URLS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

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

const COMMENTS_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

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

const PHOTO_DESCRIPTION_COUNT = 25;

function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const createPhotosId = createRandomIdFromRangeGenerator(1, 25);
const createUrl = createRandomIdFromRangeGenerator(1, 25);
const createCommentId = createRandomIdFromRangeGenerator(1, 30);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createPhotos = () => ({
  photoId: createPhotosId(PHOTOS_IDS),
  url: (PHOTO_FOLDER + createUrl(URLS) + PHOTO_FORMAT),
  description: getRandomArrayElement(DESCRIPTIONS),
  like: getRandomInteger(15, 200),
  comment: getRandomInteger(0, 30)
});

const createComments = () => ({
  commentId: createCommentId(COMMENTS_IDS),
  avatar: (AVATAR_FOLDER + getRandomInteger(1, 6) + AVATAR_FORMAT),
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

/*const photos =*/ Array.from({length: PHOTO_DESCRIPTION_COUNT}, createPhotos);
/*const comments =*/ Array.from({length: 1}, createComments);


/*console.log(photos);
console.log(comments);*/
