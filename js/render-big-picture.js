/*Действия с окном большого изображения. */
import { pictureContainer } from "./render-picture";
import { isEscape, renderFragment } from "./util";
import { generatePicture } from "./render-picture";

const bigPicture = document.querySelector('.big-picture');
const closeButtonBigPicture = bigPicture.querySelector('.big-picture__cancel');
const bigPictureSocialComments = bigPicture.querySelector('.social__comments');
const comentsTemplate = bigPictureSocialComments.querySelector('.social__comment');

const renderBigPictures = () =>{

  const picture = document.querySelectorAll('.picture');

  picture.forEach(image =>
    image.addEventListener('click', () => {
      openBigPicture(image.dataset.pictureId);
    })
  )

}



const onBigPictureKyedownEsc = (evt) =>{
//функция обработчик нажатия на esc
   if(isEscape(evt)){
    closeBigPicture();
   }

}

const hiddenLoadComment = ()=>{
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
}

const openBigPicture = (pictureId) =>{
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onBigPictureKyedownEsc);
  //остальная логика
  const currPicture = generatePicture.find((elem) => elem.id === Number(pictureId));
  hiddenLoadComment();
  renderModalBigPicture(currPicture);
  document.body.classList.add('modal-open');
};

const closeBigPicture = () =>{
  bigPicture.classList.add('hidden');
 document.removeEventListener('keydown', onBigPictureKyedownEsc);
  document.body.classList.remove('modal-open');

};

closeButtonBigPicture.addEventListener('click', closeBigPicture);

const renderComents = (comment)=>{

  const newComment = comentsTemplate.cloneNode(true);
  const bigPictureSocialPicture = newComment.querySelector('.social__picture');
  bigPictureSocialPicture.src = comment.avatar;
  bigPictureSocialPicture.alt = comment.name;
  newComment.querySelector('.social__text').textContent = comment.message;

  return newComment;

}



const renderModalBigPicture = (picture) =>{
  const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  bigPictureImg.src = picture.url;
  bigPictureImg.alt = picture.description;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;

  bigPicture.querySelector('.social__comment-total-count').textContent = picture.comments.length;
  bigPictureSocialComments.innerHTML = '';
  renderFragment(picture.comments, renderComents, bigPictureSocialComments);
}

export {renderBigPictures};
