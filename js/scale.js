//Масштабирование.
const SCALE_STEP = 0.25;

const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadScale = uploadOverlay.querySelector('.img-upload__scale');
const image = uploadOverlay.querySelector('.img-upload__preview img');
const imageScaleValue = uploadOverlay.querySelector('.scale__control--value');
const smaller = uploadScale.querySelector('.scale__control--smaller');//уменьшение
const bigger = uploadScale.querySelector('.scale__control--bigger');//увеличение

let scale = 1;
function onButtonSmallerClick(){
  if (scale > SCALE_STEP) {
    scale -= SCALE_STEP;
    image.style.transform = `scale(${scale})`;
    imageScaleValue.value = `${scale * 100}%`
  }

}

function onButtonBiggerClick(){
  if (scale < 1) {
    scale += SCALE_STEP;
    image.style.transform = `scale(${scale})`;
    imageScaleValue.value = `${scale * 100}%`
  }
}

const resetScalle = () => {
  image.style.transform = 'scale(1)';
  imageScaleValue.value = 'scale%';

};
export { uploadOverlay, smaller, bigger, onButtonSmallerClick, onButtonBiggerClick, resetScalle };
