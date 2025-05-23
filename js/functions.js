//проверка длины строки
function checkStrLenght(str, length){

  return (str.length <= length);

}
//проверка строки на палиндром
function checkStrForPalindrom(str){
  const strNormalize = str.replaceAll(' ','').toUpperCase();
  const endString = strNormalize.length - 1;

  for(let i = 0; i < Math.floor(strNormalize.length / 2); i++){
    if(strNormalize[i] !== strNormalize[endString - i]){
      return false;
    }
  }

  return true;
}

//Поиск числа в строке(доп)
function findNumberInStr(str){
  let strNumber = '';
  let number = 0;
  for(let i = 0; i < str.length; i++){

    if(str[i] >= '0' && str[i] <= '9'){

      strNumber += str[i];

    }

  }
  number = parseInt(strNumber, 10);

  return number;
}
checkStrLenght('тестовая строка', 10);
checkStrForPalindrom('Лёша на полке клопа нашёл');
findNumberInStr('1 кефир, 0.5 батона');
