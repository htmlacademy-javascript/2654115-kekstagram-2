/*Действия с окном большого изображения. */
import { isEscape } from './util';
import { generatePicture } from './render-picture';
import { renderComments, closeComments } from './render-comments';

const bigPicture = document.querySelector('.big-picture');
const closeButtonBigPicture = bigPicture.querySelector('.big-picture__cancel');

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  closeComments();
  document.removeEventListener('keydown', onBigPictureFormKyedownEsc);
  document.body.classList.remove('modal-open');
};

const onBigPictureFormKyedownEsc = (evt) => {
  if (isEscape(evt)) {
    closeBigPicture();
  }
};


const renderModalBigPicture = (picture) => {
  const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  bigPictureImg.src = picture.url;
  bigPictureImg.alt = picture.description;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;

  bigPicture.querySelector('.social__comment-total-count').textContent = picture.comments.length;
  renderComments(picture.comments);
};

const openBigPicture = (pictureId) => {
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onBigPictureFormKyedownEsc);

  const currPicture = generatePicture.find((elem) => elem.id === Number(pictureId));
  renderModalBigPicture(currPicture);
  document.body.classList.add('modal-open');
};

const renderBigPictures = () => {

  const picture = document.querySelectorAll('.picture');

  picture.forEach(image =>
    image.addEventListener('click', () => {
      openBigPicture(image.dataset.pictureId);
    })
  )

};

closeButtonBigPicture.addEventListener('click', closeBigPicture);

export { renderBigPictures, bigPicture };
