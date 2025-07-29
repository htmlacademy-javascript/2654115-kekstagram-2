//Отрисовка комментариев.
import { renderFragment } from './util';
const COMMENT_PACK = 5;
const bigPicture = document.querySelector('.big-picture');
const bigPictureSocialComments = bigPicture.querySelector('.social__comments');
const comentsTemplate = bigPictureSocialComments.querySelector('.social__comment');
const commentsLoader = bigPicture.querySelector('.comments-loader');

let currCountComm = 0;
let massComments = [];

const renderComment = (comment) => {

  const newComment = comentsTemplate.cloneNode(true);
  const bigPictureSocialPicture = newComment.querySelector('.social__picture');
  bigPictureSocialPicture.src = comment.avatar;
  bigPictureSocialPicture.alt = comment.name;
  newComment.querySelector('.social__text').textContent = comment.message;

  return newComment;
};

const renderNextCommentsPack = () => {

  const currRenderPackComments = massComments.slice(currCountComm, currCountComm + COMMENT_PACK);
  renderFragment(currRenderPackComments, renderComment, bigPictureSocialComments);
  currCountComm += currRenderPackComments.length;
  bigPicture.querySelector('.social__comment-shown-count').textContent = currCountComm;
  if (currCountComm === massComments.length) {
    commentsLoader.classList.add('hidden');
  }
};

const onClickCommentsLoader = () => {
  renderNextCommentsPack();
};

const closeComments = () => {
  currCountComm = 0;
  commentsLoader.classList.remove('hidden');
  commentsLoader.removeEventListener('click', onClickCommentsLoader);
};

const renderComments = (comments) => {
  bigPictureSocialComments.innerHTML = '';
  massComments = comments;
  renderNextCommentsPack();
  commentsLoader.addEventListener('click', onClickCommentsLoader);
};

export { bigPictureSocialComments, renderComments, closeComments };
