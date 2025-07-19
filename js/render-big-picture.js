//Действия с окном большого изображения.
import { isEscape } from './util';
import { renderComments, closeComments } from './render-comments';

const bigPicture = document.querySelector('.big-picture');
const closeButtonBigPicture = bigPicture.querySelector('.big-picture__cancel');

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  closeComments();
  document.removeEventListener('keydown', onBigPictureFormKeydownEsc);
  document.body.classList.remove('modal-open');
};

function onBigPictureFormKeydownEsc(evt) {
  if (isEscape(evt)) {
    closeBigPicture();
  }
}

const renderModalBigPicture = (picture) => {
  const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  bigPictureImg.src = picture.url;
  bigPictureImg.alt = picture.description;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;

  bigPicture.querySelector('.social__comment-total-count').textContent = picture.comments.length;
  renderComments(picture.comments);
};

const openBigPicture = (pictureId, items) => {
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onBigPictureFormKeydownEsc);

  const currPicture = items.find((elem) => elem.id === Number(pictureId));
  renderModalBigPicture(currPicture);
  document.body.classList.add('modal-open');
};

const renderBigPictures = (items) => {

  const picture = document.querySelectorAll('.picture');

  picture.forEach((image) =>
    image.addEventListener('click', () => {
      openBigPicture(image.dataset.pictureId, items);
    })
  )

};

closeButtonBigPicture.addEventListener('click', closeBigPicture);

export { renderBigPictures, bigPicture };
