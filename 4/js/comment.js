import {generateCommentId} from './fn-unique-id.js';
import {getRandomInteger} from './util.js';
import {getRandomArrayElement} from './util.js';

// Входные данные
const AVATAR_FOLDER = 'img/avatar-';
const AVATAR_FORMAT = '.svg';
const AVATAR_MIN_NUMBER = 1;
const AVATAR_MAX_NUMBER = 6;

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

// Комментарий, оставленный другим пользователем фотографии.
const createComment = () => ({
  commentId: generateCommentId(),
  avatar: (AVATAR_FOLDER + getRandomInteger(AVATAR_MIN_NUMBER, AVATAR_MAX_NUMBER) + AVATAR_FORMAT),
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

export {createComment};
