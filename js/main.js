import { renderFragment } from './util.js';
import { getData } from './api.js';
import { pictureContainer, createPicture } from './render-picture.js';
import { renderBigPictures } from './render-big-picture.js';
import { initUpload } from './upload-form.js';
import { renderMessageErrorGetData } from './message.js';
import { initFilters, renderFiltersImages } from './filters.js';
getData()
  .then((image) => {
    renderFragment(image, createPicture, pictureContainer);
    initFilters();
    renderFiltersImages(image);
    renderBigPictures(image);
  }).catch(renderMessageErrorGetData);


initUpload();
