//Файл валидации хештегов и комментариев

const uploadForm = document.querySelector('.img-upload__form');
const commentsgInput = uploadForm.querySelector('.text__description');
const hashtagInput = uploadForm.querySelector('.text__hashtags');
const MAX_LENGTH_COMMENT = 140;
const MAX_HASHTAG = 5;
const MAX_LENGTH_HASHTAG = 20;

const isValidComment = () =>{

    if(commentsgInput.value.length > MAX_LENGTH_COMMENT){
      return false;
    }
    return true;

}

let messageErrorHastag = '';
const erorrString = () => messageErrorHastag;

const isValidHastag = () =>{

    if(hashtagInput.value != 0){
      const hashtags = hashtagInput.value.toLowerCase().trim().split(/\s+/);
      const uniqueHashtags = new Set();
      messageErrorHastag = '';


      if (hashtags.length > MAX_HASHTAG) {
      messageErrorHastag =`Не может быть больше ${MAX_HASHTAG} хэштегов.`;
      return false;
      }

      for (const tag of hashtags) {
        // Проверка на корректный формат
        if(tag.length === 1 && tag[0]==='#'){
          messageErrorHastag ='Хештег не может состоять из одного символа #';
          return false;
        }
        if(tag[0] != '#'){
          messageErrorHastag ='Хештег должен начинаться с символа #';
          return false;
        }
        if(tag.length > MAX_LENGTH_HASHTAG){
          messageErrorHastag ='Слишком длинный хештег';
          return false;
        }
        if (!/^#([а-яёa-z0-9])$/.test(tag)) {
          messageErrorHastag ='Хештег содержит запрещенные символы';
          return false;
        }
        if (uniqueHashtags.has(tag)) {
          messageErrorHastag =`Хештег ${tag} дублируется`;
          return false;
        }

        uniqueHashtags.add(tag);
     }

    }

    return true;

}


export {isValidComment,isValidHastag, erorrString, commentsgInput, hashtagInput}
