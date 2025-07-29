//фильтрация
import { renderFragment, debounce } from './util';
import { pictureContainer, createPicture } from './render-picture';
import { renderBigPictures } from './render-big-picture';

const RERENDER_DELAY = 500;
const NUMBER_RANDOM_IMG = 10;
const filterForm = document.querySelector('.img-filters__form');
const filterButtons = document.querySelectorAll('.img-filters__button');

const modeFilters = {
  DEFAULT: {
    name: 'filter-default',
    mode: (images) => images,
  },
  RANDOM: {
    name: 'filter-random',
    mode: (images) => images.slice().sort(() => Math.random() - 0.5).slice(0, NUMBER_RANDOM_IMG),
  },
  DISCUSSED: {
    name: 'filter-discussed',
    mode: (images) => images.slice().sort(compareComments),
  }
};


function compareComments(imgA, imgB) {
  const commentsCountA = imgA.comments.length;
  const commentsCountB = imgB.comments.length;

  return commentsCountB - commentsCountA;
}

const clearImages = () => {
  document.querySelectorAll('.picture').forEach((img) => {
    img.remove();
  });
};

const initFilterButtonsActive = () => {
  filterButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      const activeButton = filterForm.querySelector('.img-filters__button--active');
      if (activeButton.id !== evt.target.id) {
        activeButton.classList.remove('img-filters__button--active');
        evt.target.classList.add('img-filters__button--active');
      }
    });
  });
};

const renderImages = (filterId, image) => {
  let imgFilters = [];
  if (modeFilters.DEFAULT.name === filterId) {
    imgFilters = modeFilters.DEFAULT.mode(image);
  } else if (modeFilters.RANDOM.name === filterId) {
    imgFilters = modeFilters.RANDOM.mode(image);
  }else if (modeFilters.DISCUSSED.name === filterId) {
    imgFilters = modeFilters.DISCUSSED.mode(image);
  }
  clearImages();
  renderFragment(imgFilters, createPicture, pictureContainer);
};

const renderFiltersImages = (image) => {

  function onFiltersClick(evt) {

    const buttonId = evt.target.closest('button').id;
    renderImages(buttonId, image);
    renderBigPictures(image);
  }

  filterForm.addEventListener('click', debounce(onFiltersClick, RERENDER_DELAY));
};

const initFilters = () => {
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
  initFilterButtonsActive();
};

export { initFilters, renderFiltersImages };
