// 문자열을 요소로 갖는 배열을 입력받아 배열에서 가장 긴 문자열 리턴

function getLongestElement(arr) {

    // way 1
    if(arr.length === 0 ) return ''
    return arr.reduce(function(acc, cur){
      if(acc.length >= cur.length){
        return acc;
      }
      else{
        return cur;
      }
    })

    // Way 2
    return arr.reduce(function(acc, cur){
        if(acc.length >= cur.length){
          return acc;
        }
        else{
          return cur;
        }
      }, '');           // if문 대신 initialValue선언
    }
  