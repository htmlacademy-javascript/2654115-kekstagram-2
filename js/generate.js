import { getRandomUnqNumber } from './random.js';

import { MAX_ID_COMMMENT, MAX_ID_IMG } from './constant.js';


const generateCommentId = getRandomUnqNumber(1, MAX_ID_COMMMENT);
const generateImgId = getRandomUnqNumber(1, MAX_ID_IMG);
const generateImgUrlId = getRandomUnqNumber(1, MAX_ID_IMG);

export { generateCommentId, generateImgId, generateImgUrlId };
