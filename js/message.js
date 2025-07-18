// отрисовка и обработка информационных сообщений
import { findTemplate, isEscape } from './util';

const sucsessFormTemplate = findTemplate('#success');
const messageSuccess = sucsessFormTemplate.cloneNode(true);

const errorFormTemplate = findTemplate('#error');
const errorSuccess = errorFormTemplate.cloneNode(true);

function onFormKyedownEsc(evt){
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onMessageRemove();
  }
};

function onBodyClick(evt){
  if (evt.target.closest('.success__inner') || (evt.target.closest('.error__inner'))) {
    return;
  }
  onMessageRemove();
};

function onMessageRemove() {
  const existsElement = document.querySelector('.success') || document.querySelector('.error');
  existsElement.remove();
  document.removeEventListener('keydown', onFormKyedownEsc);
  document.removeEventListener('click', onBodyClick);
}


const renderMessageSuccessForm = () => {

  document.body.appendChild(messageSuccess);
  const btnSuccess = document.querySelector('.success__button')
  document.addEventListener('keydown', onFormKyedownEsc);
  btnSuccess.addEventListener('click', onMessageRemove);
  document.addEventListener('click', onBodyClick);

}

const renderMessageErrorForm = () => {

  document.body.appendChild(errorSuccess);
  const btnError = document.querySelector('.error__button')
  document.addEventListener('keydown', onFormKyedownEsc);
  btnError.addEventListener('click', onMessageRemove);
  document.addEventListener('click', onBodyClick);
}






export { renderMessageSuccessForm, renderMessageErrorForm }
