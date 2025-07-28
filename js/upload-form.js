
//Отображение и отправка формы.
import { isEscape } from './util';
import { smaller, bigger, onButtonSmallerClick, onButtonBiggerClick, resetScalle } from './scale';
import { isValidComment, isValidHastag, erorrString, commentsInput, hashtagInput } from './validation';
import { initSlider, updateEffect, resetSlider } from './slider';
import { sendData } from './api';
import { renderMessageSuccessForm, renderMessageErrorForm, getMessageModalOpen } from './message';

const SubmitButtonText = {
  IDLE: 'ОПУБЛИКОВАТЬ',
  SENDING: 'ПУБЛИКУЮ...'
};

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const preview = document.querySelector('.img-upload__preview img');
const effectPreview = uploadOverlay.querySelectorAll('.effects__preview');
const oploadFormModal = uploadForm.querySelector('.img-upload__overlay');
const closeForm = uploadForm.querySelector('.img-upload__cancel');
const submitButton = uploadForm.querySelector('.img-upload__submit');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',

});

const onUploadFormKyedownEsc = (evt) => {

  if ((isEscape(evt) && ![hashtagInput, commentsInput].includes(evt.target)) && !getMessageModalOpen()) {
    closeUploadForm();
  }
};
pristine.addValidator(hashtagInput, isValidHastag, erorrString);


pristine.addValidator(commentsInput, isValidComment, 'Комментарий не должен превышать 140 символов');

const openUploadForm = () => {
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
    effectPreview.forEach((previewImg) => {
      previewImg.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
    });

    oploadFormModal.classList.remove('hidden');
    uploadOverlay.classList.remove('hidden');

    document.addEventListener('keydown', onUploadFormKyedownEsc);
    document.body.classList.add('modal-open');
  }

};

const clearForm = () => {
  uploadForm.reset();
  pristine.reset();
};

function closeUploadForm() {
  oploadFormModal.classList.add('hidden');
  uploadOverlay.classList.add('hidden');

  document.removeEventListener('keydown', onUploadFormKyedownEsc);
  clearForm();
  resetSlider();
  resetScalle();
  document.body.classList.remove('modal-open');

}


closeForm.addEventListener('click', closeUploadForm);

const onClickUploadFile = () => {

  openUploadForm();

};

const closeSuccessSubmitForm = () => {
  closeUploadForm();
  renderMessageSuccessForm();
};

const closeErrorSubmitForm = () => {
  renderMessageErrorForm();
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const setUserFormSubmit = (onSuccess, onError) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      blockSubmitButton();
      hashtagInput.value = hashtagInput.value.trim().replaceAll(/\s+/g, ' ');
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch(() => {
          onError();
        }).finally(unblockSubmitButton);

    }

  });
};

const initUpload = () => {
  initSlider();
  updateEffect();
  uploadFile.addEventListener('change', onClickUploadFile);
  setUserFormSubmit(closeSuccessSubmitForm, closeErrorSubmitForm);

};

smaller.addEventListener('click', onButtonSmallerClick);
bigger.addEventListener('click', onButtonBiggerClick);

export { initUpload };
