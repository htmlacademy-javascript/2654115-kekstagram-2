import {createImages} from './create-image.js';
import {MAX_ID_IMG} from './constant.js';
import {findTemplate} from './util.js';

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = findTemplate('#picture');

const generatePicture = createImages(MAX_ID_IMG);

const createPicture = (photo) =>{
  const pictureElement = pictureTemplate.cloneNode(true);
  const pictureImg = pictureElement.querySelector('.picture__img');

  pictureImg.src = photo.url;
  pictureImg.alt = photo.description;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  return pictureElement;
};

export {pictureContainer, createPicture, generatePicture};
