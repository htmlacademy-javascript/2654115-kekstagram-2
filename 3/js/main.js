const MAX_ID_IMG = 25;
const MAX_ID_COMMMENT = 10000;
const MAX_COMMMENT = 30;
const MIN_CNT_LIKE = 15;
const MAX_CNT_LIKE = 200;

const DESCRIPTION = [
  'Красивый кадр!',
  'Отличный ракурс.',
  'Великолепное фото!',
  'Очень атмосферно.',
  'Настоящее искусство.',
  'Захватывающий момент.',
  'Стильно и со вкусом.',
  'Прекрасная цветовая гамма.',
  'Настроение передано идеально.',
  'Фотография говорит сама за себя.',
  'Удивительно красиво.',
  'Тонко и нежно.',
  'Создает настроение.',
  'Энергия в каждом пикселе.',
  'Так живо и натурально.',
  'Вдохновляющий снимок!',
  'Идеальное освещение.',
  'Очень душевно.',
  'Отличная композиция.',
  'Свежий и оригинальный взгляд.',
  'Люблю такую эстетику.',
  'Просто супер!',
  'Такого ещё не видел.',
  'Мастерство видно сразу.',
  'Заставляет задуматься.'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'

];

const NAME = [
  'Алексей',
  'Ирина',
  'Дмитрий',
  'Ольга',
  'Константин',
  'Мария',
  'Сергей',
  'Елена',
  'Максим',
  'Наталья',
  'Владимир',
  'Татьяна',
  'Андрей',
  'Светлана',
  'Иван',
  'Егор',
  'Людмила',
  'Виктория',
  'Роман',
  'Юлия'];

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const generateCommentId = getRandomUnqNumber(1, MAX_ID_COMMMENT);
const generateImgId = getRandomUnqNumber(1, MAX_ID_IMG);
const generateImgUrlId = getRandomUnqNumber(1, MAX_ID_IMG);

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomUnqNumber(min, max){
  const generatedNumber = [];

  return function(){
    let currentValue = getRandomInteger(min, max);
    if(generatedNumber.length >= (max - min + 1)){
    // console.error('Нет доступных идентификаторов');

    }
    while(generatedNumber.includes(currentValue)){
      currentValue = getRandomInteger(min, max);
    }
    generatedNumber.push(currentValue);
    return currentValue;

  };
}


function createMessage(){
  const countMess = getRandomInteger(1,2);
  let resMess = '';
  for(let i = 0; i < countMess; i++){

    resMess += `${getRandomArrayElement(MESSAGE)}\n`;

  }

  return resMess;
}
//Генерация объектов комментариев
const createComments = () =>({
  id: generateCommentId(),
  avatar: `img/avatar-${ getRandomInteger(1,6) }.svg`,
  message: createMessage(),
  neme: getRandomArrayElement(NAME)
});

//Генерация объектов изображений
const createImage = () =>({
  id: generateImgId(),
  url: `photos/${ generateImgUrlId() }.img`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(MIN_CNT_LIKE,MAX_CNT_LIKE),
  comments: Array.from({length: getRandomInteger(0,MAX_COMMMENT)}, createComments)

});

Array.from({length: MAX_ID_IMG}, createImage);
//const userImage = Array.from({length: MAX_ID_IMG}, createImage);
