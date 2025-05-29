import {createImage} from './create-image.js';
import {MAX_ID_IMG} from './constant.js';

Array.from({length: MAX_ID_IMG}, createImage);
//const userImage = Array.from({length: MAX_ID_IMG}, createImage);
