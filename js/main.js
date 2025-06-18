import {renderFragment} from './util.js';
import {pictureContainer, createPicture,generatePicture} from './render-picture.js';

renderFragment(generatePicture, createPicture, pictureContainer);
