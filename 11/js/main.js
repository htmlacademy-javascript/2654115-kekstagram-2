import { renderFragment } from './util.js';
import { getData } from './api.js';
import { pictureContainer, createPicture } from './render-picture.js';
import { renderBigPictures } from './render-big-picture.js';
import { initUpload } from './upload-form.js';
import { renderMessageErrorGetData } from './message.js';
getData()
  .then((image) => {
    renderFragment(image, createPicture, pictureContainer);
    renderBigPictures(image);
  }).catch(
    () => {
      renderMessageErrorGetData();
    }
  );


initUpload();
