//Валидация хештегов и комментариев.

const VALIDATION_RULES = {
  MAX_LENGTH_COMMENT: 140,
  MAX_HASHTAG: 5,
  MAX_LENGTH_HASHTAG: 20
};

const ERROR_MESSAGES = {
  HASHTAGS: {
    TOO_MANY: `Нельзя указать больше  ${VALIDATION_RULES.MAX_HASHTAG} хэштегов`,
    MUST_START_WITH_HASH: 'Хэштег должен начинаться с #',
    ONLY_HASH: 'Хэштег не может состоять только из одной решётки',
    TOO_LONG: `Максимальная длина хэштега — ${VALIDATION_RULES.MAX_LENGTH_HASHTAG} символов`,
    INVALID_CHARACTERS: 'Хэштег может содержать только буквы и цифры, без пробелов и спецсимволов',
    NOT_UNIQUE: 'Один и тот же хэштег не может использоваться дважды',
    BY_SPACE: 'Хештеги вводятся через пробел'
  },
  COMMENT: {
    TOO_LONG: `Длина комментария не может превышать ${VALIDATION_RULES.MAX_LENGTH_COMMENT} символов`
  }
};

const uploadForm = document.querySelector('.img-upload__form');
const commentsInput = uploadForm.querySelector('.text__description');
const hashtagInput = uploadForm.querySelector('.text__hashtags');

const isValidComment = () => commentsInput.value.length < VALIDATION_RULES.MAX_LENGTH_COMMENT;

let messageErrorHastag = '';
const erorrString = () => messageErrorHastag;

const isValidHastag = () => {

  if (hashtagInput.value.length !== 0) {
    const hashtags = hashtagInput.value.toLowerCase().trim().split(/\s+/);
    const uniqueHashtags = new Set();
    const regularExHashtag = /^#([а-яёa-z0-9]){1,19}$/i;
    messageErrorHastag = '';

    if (hashtags.length > VALIDATION_RULES.MAX_HASHTAG) {
      messageErrorHastag = ERROR_MESSAGES.HASHTAGS.TOO_MANY;
      return false;
    }

    for (const tag of hashtags) {
      // Проверка на корректный формат
      if (tag.length === 1 && tag[0] === '#') {
        messageErrorHastag = ERROR_MESSAGES.HASHTAGS.ONLY_HASH;
        return false;
      }
      if (tag[0] !== '#') {
        messageErrorHastag = ERROR_MESSAGES.HASHTAGS.MUST_START_WITH_HASH;
        return false;
      }
      if (tag.length > VALIDATION_RULES.MAX_LENGTH_HASHTAG) {
        messageErrorHastag = ERROR_MESSAGES.HASHTAGS.TOO_LONG;
        return false;
      }
      if (tag.split('#').length > 2) {
        messageErrorHastag = ERROR_MESSAGES.HASHTAGS.BY_SPACE;
        return false;
      }
      if (!regularExHashtag.test(tag)) {
        messageErrorHastag = ERROR_MESSAGES.HASHTAGS.INVALID_CHARACTERS;
        return false;
      }
      if (uniqueHashtags.has(tag)) {
        messageErrorHastag = ERROR_MESSAGES.HASHTAGS.NOT_UNIQUE;
        return false;
      }

      uniqueHashtags.add(tag);
    }

  }

  return true;

};

export { isValidComment, isValidHastag, erorrString, commentsInput, hashtagInput };
