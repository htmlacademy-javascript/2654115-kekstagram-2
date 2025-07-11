const SCALE_STEP = 0.25;


const slliderOptionNone = {
  range:{
   min: 0,
   max: 100
  },
  start: 100,
  step: 1
};

const slliderOptionHrome = {
  range:{
   min: 0,
   max: 1
  },
  start: 1,
  step: 0.1
};

const slliderOptionSepia = {
  range:{
   min: 0,
   max: 1
  },
  start: 1,
  step: 0.1
};

const slliderOptionInvert = {
  range:{
   min: 0,
   max: 100
  },
  start: 100,
  step: 1
};

const slliderOptionBlur = {
  range:{
   min: 0,
   max: 3
  },
  start: 3,
  step: 0.1
};

const slliderOptionBrightness = {
  range:{
   min: 0,
   max: 3
  },
  start: 3,
  step: 0.1
};

const effects = {

  none: slliderOptionNone,
  hrome: slliderOptionHrome,
  sepia: slliderOptionSepia,
  inver: slliderOptionInvert,
  blur: slliderOptionBlur,
  brightness: slliderOptionBrightness

};

const uploadOverlay = document.querySelector('.img-upload__overlay');
//const uploadEffectLevel = document.querySelector('.img-upload__effect-level');

const uploadScale = uploadOverlay.querySelector('.img-upload__scale');

const image = uploadOverlay.querySelector('.img-upload__preview img');
const imageScaleValue = uploadOverlay.querySelector('.scale__control--value');
const smaller = uploadScale.querySelector('.scale__control--smaller');//уменьшение
const bigger = uploadScale.querySelector('.scale__control--bigger');//увеличение

const slider = uploadOverlay.querySelector('.effect-level__slider');

let scale = 1;

const onButtonSmallerClick = () =>{
    if(scale > SCALE_STEP){
      scale -= SCALE_STEP;
      image.style.transform = `scale(${scale})`;
      imageScaleValue.value = `${scale * 100}%`
    }

}

const onButtonBiggerClick = () =>{
    if(scale < 1){
      scale += SCALE_STEP;
      image.style.transform = `scale(${scale})`;
      imageScaleValue.value = `${scale * 100}%`;
    }
}


export {uploadOverlay, smaller,bigger, onButtonSmallerClick, onButtonBiggerClick};
