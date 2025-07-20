//Отрисовка изображения.
import { findTemplate } from './util.js';

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = findTemplate('#picture');


const createPicture = (photo) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  const pictureImg = pictureElement.querySelector('.picture__img');

  pictureElement.dataset.pictureId = photo.id;
  pictureImg.src = photo.url;
  pictureImg.alt = photo.description;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  return pictureElement;
};

export { pictureContainer, createPicture};
