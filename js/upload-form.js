import { isEscape} from './util';
const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('.img-upload__input');
const oploadFormModal = uploadForm.querySelector('.img-upload__overlay');
const closeForm = uploadForm.querySelector('.img-upload__cancel');
const uploadSubmit = uploadForm.querySelector('.img-upload__submit');
const hashtag = uploadForm.querySelector('.text__hashtags');

const onUploadFormKyedownEsc = (evt) =>{
   if(isEscape(evt)){
    closeUploadForm();
   }
};

const openUploadForm = () =>{
 oploadFormModal.classList.remove('hidden');
 document.addEventListener('keydown', onUploadFormKyedownEsc);
 document.body.classList.add('modal-open');
}



const closeUploadForm = () =>{
  oploadFormModal.classList.add('hidden');
  document.removeEventListener('keydown', onUploadFormKyedownEsc);
  uploadForm.value = '';
  document.body.classList.remove('modal-open');
};


closeForm.addEventListener('click', closeUploadForm);

const onClickUploadFile = () => {

  openUploadForm();

};

const initUpload = () => {
  uploadFile.addEventListener('change', onClickUploadFile);
}


uploadSubmit.addEventListener('click', (evt)=>{
  evt.defaultPrevented();
  console.log('click');
  alert('click');

})

const pristine = new Pristine(uploadForm);

pristine.addValidator(hashtag, (value)=>{
  const hastagNum = /\d/.test(value);
  return !hastagNum;

}, 'Ошибка');

export {initUpload}
