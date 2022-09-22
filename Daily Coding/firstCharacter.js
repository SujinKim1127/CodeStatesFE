// 문자열을 입력받아 문자열을 구성하는 각 단어의 
// 첫글자로 이루어진 문자열 리턴

function firstCharacter(str) {
    var arr = str.split(' ');
    var result = "";
    for(let i = 0; i < arr.length; i++){
        result += arr[i].slice(0,1);
        // arr[i][0] 으로 해도 성립
    }
    return result;
  }
  