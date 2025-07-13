const effects = [
  {
    name: 'none',
    options: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    },
    setPrewFill: 'effects__preview--none',
    setFilter: ''
  },
  {
    name: 'chrome',
    options: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    },
    setPrewFill: 'effects__preview--chrome',
    setFilter: (value) => `grayscale(${value})`
  },
  {
    name: 'sepia',
    options: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    },
    setPrewFill: 'effects__preview--sepia',
    setFilter: (value) => `sepia(${value})`
  },
  {
    name: 'marvin',
    options: {
      range: {
        min: 0,
        max: 100
      },
      start: 1,
      step: 1
    },
    setPrewFill: 'effects__preview--marvin',
    setFilter: (value) => `invert(${value}%)`
  },
  {
    name: 'phobos',
    options: {
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1
    },
    setPrewFill: 'effects__preview--phobos',
    setFilter: (value) => `blur(${value}px)`
  },
  {
    name: 'heat',
    options: {
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1
    },
    setPrewFill: 'effects__preview--heat',
    setFilter: (value) => `brightness(${value})`
  },
];

const uploadOverlay = document.querySelector('.img-upload__overlay');
const slider = uploadOverlay.querySelector('.effect-level__slider');
const sliderLevel = uploadOverlay.querySelector('.img-upload__effect-level');
const effectLevel = uploadOverlay.querySelector('.effect-level__value');
const radioBtn = uploadOverlay.querySelectorAll('.effects__radio');

const image = uploadOverlay.querySelector('.img-upload__preview img');
let currentEffect = null;
let currentClassFill = '';
const initSlider = () => {
  sliderLevel.classList.add('hidden');
  image.classList.add('effects__preview--none');
  currentClassFill = 'effects__preview--none';
}
noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

slider.noUiSlider.on('update', () => {
  if (currentEffect) {
    effectLevel.value = slider.noUiSlider.get();
    image.style.filter = currentEffect.setFilter(effectLevel.value);
  }
});

function onEffectButtonClick() {
  currentEffect = effects.find((effect) => effect.name === this.value);
  if (currentEffect.name === 'none') {
    resetSlider();
    return;
  }
  sliderLevel.classList.remove('hidden');
  sliderLevel.classList.replace(currentClassFill, currentEffect.setPrewFill);
  slider.noUiSlider.updateOptions(currentEffect.options);
  image.style.filter = currentEffect.setFilter(currentEffect.options.range.max);
}

const resetSlider = () => {
  currentEffect = null;
  sliderLevel.classList.add('hidden');
  sliderLevel.classList.replace(currentClassFill, 'effects__preview--none');
  image.style.filter = '';
};

const updateEffect = () => {

  radioBtn.forEach((radio) => radio.addEventListener('click', onEffectButtonClick));
};

export { initSlider, updateEffect, resetSlider }
