/*Действия с окном большого изображения. */
import { pictureContainer } from "./render-picture";
import { isEscape } from "./util";
import { generatePicture } from "./render-picture";
const bigPicture = document.querySelector('.big-picture');
const closeButtonBigPicture = bigPicture.querySelector('.big-picture__cancel');

pictureContainer.addEventListener('click', (evt) => {

  const dataPicture = evt.target.closest('.picture');
  if(dataPicture){
    //console.log(dataPicture.dataset.pictureId);
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
const currPicture = generatePicture.find((elem) => elem.id === pictureId);
//console.log(currPicture);
};

const closeBigPicture = () =>{
bigPicture.classList.add('hidden');
document.removeEventListener('keydown', onBigPictureKyedownEsc);

};

closeButtonBigPicture.addEventListener('click', closeBigPicture);

const renderBigPicture = (picture) =>{
//подставить значение полученой картинки в класс bidpictures



}

