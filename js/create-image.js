import { getRandomArrayElement, getRandomInteger } from './random.js';
import { generateCommentId, generateImgId, generateImgUrlId } from './generate.js';
import { MESSAGE, NAME, DESCRIPTION, MIN_CNT_LIKE, MAX_CNT_LIKE, MAX_COMMMENT } from './constant.js';

function createMessage() {
  const countMess = getRandomInteger(1, 2);
  let resMess = '';
  for (let i = 0; i < countMess; i++) {

    resMess += `${getRandomArrayElement(MESSAGE)}\n`;

  }

  return resMess;
}
//Генерация объектов комментариев
const createComments = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createMessage(),
  neme: getRandomArrayElement(NAME)
});

//Генерация объектов изображений
const createImage = () => ({
  id: generateImgId(),
  url: `photos/${generateImgUrlId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(MIN_CNT_LIKE, MAX_CNT_LIKE),
  comments: Array.from({ length: getRandomInteger(0, MAX_COMMMENT) }, createComments)

});

const createImages = (count) => Array.from({ length: count }, createImage);

export { createImages };
