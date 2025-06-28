/*Действия с окном большого изображения. */
import { pictureContainer } from "./render-picture";
const bigPicture = document.querySelector('.big-picture');
const closeButtonBigPicture = bigPicture.querySelector('.big-picture__cancel');

pictureContainer.addEventListener('click', (evt) => {

  const dataPicture = evt.target.closest('.picture');
  if(dataPicture){
    openBigPicture(dataPicture);
  }


})

const onBigPictureKyedownEsc = () =>{
//функция обработчик нажатия на esc

}


const openBigPicture = (picture) =>{
//удалить класс hidden
bigPicture.classList.remove('hidden');
//добавить обработчик нажатия на esc
//остальная логика

};

const closeBigPicture = () =>{
//добавить класс hidden
bigPicture.classList.add('hidden');
//удалить обработчик нажатия на esc

};

closeButtonBigPicture.addEventListener('click', closeBigPicture);

const renderBigPicture = () =>{
//подставить значение полученой картинки в класс bidpictures


}

