/*Действия с окном большого изображения. */
import { pictureContainer } from "./render-picture";
import { isEscape, renderFragment } from "./util";
import { generatePicture } from "./render-picture";
const bigPicture = document.querySelector('.big-picture');
const closeButtonBigPicture = bigPicture.querySelector('.big-picture__cancel');
const bigPictureSocialComments = bigPicture.querySelector('.social__comments');

pictureContainer.addEventListener('click', (evt) => {

  const dataPicture = evt.target.closest('.picture');
  if(dataPicture){
    openBigPicture(dataPicture.dataset.pictureId);
  }


})

const onBigPictureKyedownEsc = (evt) =>{
//функция обработчик нажатия на esc
   if(isEscape(evt)){
    closeBigPicture();
   }

}


const openBigPicture = (pictureId) =>{
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onBigPictureKyedownEsc);
  //остальная логика
  const currPicture = generatePicture.find((elem) => elem.id === Number(pictureId));

  renderBigPicture(currPicture);
};

const closeBigPicture = () =>{
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onBigPictureKyedownEsc);

};

closeButtonBigPicture.addEventListener('click', closeBigPicture);

const renderComents = (comment)=>{
  bigPictureSocialComments.innerHTML = '';
  const comentElement = bigPictureSocialComments.cloneNode(true);
  const bigPictureSocialPicture = comentElement.querySelector('.social__picture');

  bigPictureSocialPicture.src = comment.url;
  bigPictureSocialPicture.alt = comment.name;
  comentElement.querySelector('.social__text') = comment.message;

  return comentElement;

}
const renderBigPicture = (picture) =>{
  const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  bigPictureImg.src = picture.url;

  bigPicture.querySelector('.social__caption').textContent = picture.description;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;

  bigPicture.querySelector('.social__comment-total-count').textContent = picture.comments.length;

  renderFragment(picture.comments, renderComents, bigPictureSocialComments);




}

