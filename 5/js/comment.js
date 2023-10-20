import { MESSAGES, NAMES } from './data.js';
import {createIdGenerator} from './fn-unique-id.js';
import {getRandomInteger, getRandomArrayElement} from './util.js';

const AVATAR_MIN_NUMBER = 1;
const AVATAR_MAX_NUMBER = 6;
const MIN_MESSAGE = 1;
const MAX_MESSAGE = 2;

const generateCommentId = createIdGenerator();

const createMessage = () => Array.from({length: getRandomInteger(MIN_MESSAGE, MAX_MESSAGE)}, () => getRandomArrayElement(MESSAGES)).join(' ');

const createComment = () => ({
  commentId: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN_NUMBER, AVATAR_MAX_NUMBER)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES)
});

export {createComment};
