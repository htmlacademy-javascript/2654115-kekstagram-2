import {createImages} from './create-image.js';
import {MAX_ID_IMG} from './constant.js';
const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


const generatePicture = createImages(MAX_ID_IMG);

generatePicture.forEach(() => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureContainer.appendChild(pictureElement);
});
