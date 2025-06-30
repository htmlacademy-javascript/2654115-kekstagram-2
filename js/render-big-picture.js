/*Действия с окном большого изображения. */
import { pictureContainer } from './render-picture';
import { isEscape} from './util';
import { generatePicture } from './render-picture';
import { renderComments, closeComments } from './render-comments';

const bigPicture = document.querySelector('.big-picture');
const closeButtonBigPicture = bigPicture.querySelector('.big-picture__cancel');

const onBigPictureKyedownEsc = (evt) =>{
   if(isEscape(evt)){
    closeBigPicture();
   }
};

const closeBigPicture = () =>{
  bigPicture.classList.add('hidden');
  closeComments();
  document.removeEventListener('keydown', onBigPictureKyedownEsc);
  document.querySelector('body').classList.remove('.modal-open');
};

const renderModalBigPicture = (picture) =>{
  const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  bigPictureImg.src = picture.url;
  bigPictureImg.alt = picture.description;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;

  bigPicture.querySelector('.social__comment-total-count').textContent = picture.comments.length;
  renderComments(picture.comments);
};

const openBigPicture = (pictureId) =>{
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onBigPictureKyedownEsc);

  const currPicture = generatePicture.find((elem) => elem.id === Number(pictureId));
  renderModalBigPicture(currPicture);
  document.querySelector('body').classList.add('.modal-open');
};

const renderBigPictures = () =>{

  pictureContainer.addEventListener('click', (evt) => {

    const dataPicture = evt.target.closest('.picture');
    if(dataPicture){
      openBigPicture(dataPicture.dataset.pictureId);
    }
  })
};

closeButtonBigPicture.addEventListener('click', closeBigPicture);

export {renderBigPictures, bigPicture};
