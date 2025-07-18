// отрисовка и обработка информационных сообщений
import { findTemplate, isEscape } from './util';

const sucsessFormTemplate = findTemplate('#success');
const messageSuccess = sucsessFormTemplate.cloneNode(true);


function onSuccessFormKyedownEsc(evt){
  if (isEscape(evt)) {
    closeMessageSuccessForm();
  }
};


const renderMessageSuccessForm = () => {

  document.body.appendChild(messageSuccess);
  const btnSuccess = document.querySelector('.success__button')
  document.addEventListener('keydown', onSuccessFormKyedownEsc);
  btnSuccess.addEventListener('click', closeMessageSuccessForm);

}
const closeMessageSuccessForm = () => {
  messageSuccess.remove();
}




export { renderMessageSuccessForm }
