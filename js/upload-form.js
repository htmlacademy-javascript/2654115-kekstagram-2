
import { isEscape } from './util';
import {smaller, bigger, onButtonSmallerClick, onButtonBiggerClick} from './scale';
import { isValidComment, isValidHastag, erorrString, commentsgInput, hashtagInput } from './validation';
import { initSlider, updateEffect, resetSlider } from './slider';
const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('.img-upload__input');
const oploadFormModal = uploadForm.querySelector('.img-upload__overlay');
const closeForm = uploadForm.querySelector('.img-upload__cancel');
const uploadSubmit = uploadForm.querySelector('.img-upload__submit');
const uploadOverlay = document.querySelector('.img-upload__overlay');

const onUploadFormKyedownEsc = (evt) => {
  if (isEscape(evt) && ![hashtagInput, commentsgInput].includes(evt.target)) {
    closeUploadForm();
  }
};

const openUploadForm = () => {
  oploadFormModal.classList.remove('hidden');
  uploadOverlay.classList.remove('hidden');

  document.addEventListener('keydown', onUploadFormKyedownEsc);
  document.body.classList.add('modal-open');
}



function closeUploadForm() {
  oploadFormModal.classList.add('hidden');
  uploadOverlay.classList.add('hidden');

  document.removeEventListener('keydown', onUploadFormKyedownEsc);
  uploadForm.value = '';
  document.body.classList.remove('modal-open');
  resetSlider();
};


closeForm.addEventListener('click', closeUploadForm);

const onClickUploadFile = () => {

  openUploadForm();

};

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',

});

pristine.addValidator(hashtagInput, isValidHastag, erorrString);


pristine.addValidator(commentsgInput, isValidComment, "Комментарий не должен превышать 140 символов");

const initUpload = () => {
  initSlider();
  updateEffect();
  uploadFile.addEventListener('change', onClickUploadFile);
  uploadSubmit.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      hashtagInput.value = hashtagInput.value.trim().replaceAll(/\s+/g, ' ');
      uploadForm.submit();

    }

  });

}

smaller.addEventListener('click', onButtonSmallerClick);
bigger.addEventListener('click', onButtonBiggerClick);

export { initUpload }
