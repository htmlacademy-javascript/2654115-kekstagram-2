/*Действия с окном большого изображения. */
import { pictureContainer } from "./render-picture";
import { isEscape, renderFragment } from "./util";
import { generatePicture } from "./render-picture";
import { renderComments, closeComments } from "./render-comments";

const bigPicture = document.querySelector('.big-picture');
const closeButtonBigPicture = bigPicture.querySelector('.big-picture__cancel');

const renderBigPictures = () =>{

  pictureContainer.addEventListener('click', (evt) => {

    const dataPicture = evt.target.closest('.picture');
    if(dataPicture){
      openBigPicture(dataPicture.dataset.pictureId);
    }
  })

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
  /*hiddenLoadComment();*/
  renderModalBigPicture(currPicture);
  document.querySelector('body').classList.add('.modal-open');
};

const closeBigPicture = () =>{
  bigPicture.classList.add('hidden');
  closeComments();
  document.removeEventListener('keydown', onBigPictureKyedownEsc);
  document.querySelector('body').classList.remove('.modal-open');

};

closeButtonBigPicture.addEventListener('click', closeBigPicture);



const renderModalBigPicture = (picture) =>{
  const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  bigPictureImg.src = picture.url;
  bigPictureImg.alt = picture.description;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;

  bigPicture.querySelector('.social__comment-total-count').textContent = picture.comments.length;
  renderComments(picture.comments);
  /*bigPictureSocialComments.innerHTML = '';
  renderFragment(picture.comments, renderComents, bigPictureSocialComments);*/
}

export {renderBigPictures, bigPicture};
