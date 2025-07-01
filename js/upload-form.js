import { isEscape} from './util';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('.img-upload__input');
const oploadFormModal = uploadForm.querySelector('.img-upload__overlay');
const onUploadFormKyedownEsc = (evt) =>{
   if(isEscape(evt)){
    closeUploadForm();
   }
};

const openUploadForm = () =>{
 oploadFormModal.classList.remove('hidden');
 document.addEventListener('keydown', onUploadFormKyedownEsc);
}



const closeUploadForm = () =>{
  oploadFormModal.classList.add('hidden');
  document.removeEventListener('keydown', onUploadFormKyedownEsc);
};


const onClickUploadFile = () => {

  openUploadForm();

};

const initUpload = () => uploadFile.addEventListener('change', onClickUploadFile);

export {initUpload}
