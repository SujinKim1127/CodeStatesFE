// 문자열을 요소로 갖는 배열을 입력받아 그 길이가 홀수인 요소만을 갖는 배열 리턴

function filterOddLengthWords(words) {
    return words.filter(function (el){
      if(el.length % 2 === 1){
        return true;
      }
      else{
        return false;
      }
    })
  }
  