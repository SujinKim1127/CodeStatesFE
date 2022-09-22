// 배열을 입력받아 배열에서 가장 짧은 길이를 가진 문자열 요소를 리턴

function findShortestWord(arr) {
    if(arr.length === 0) return '';
    const str = arr.filter(function(el){
      if(typeof(el) === 'string'){
        return el
      }
    })
    if(str.length === 0) return '';
    return str.reduce(function(acc, cur){
        if(acc.length <= cur.length){
          return acc;
        }
        return cur;
        }
    )
  }
  