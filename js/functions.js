function checkStrLenght(str, length){

  return (str.length <= length);

}

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
console.log(checkStrForPalindrom("Лёша на полке клопа нашёл1"));
