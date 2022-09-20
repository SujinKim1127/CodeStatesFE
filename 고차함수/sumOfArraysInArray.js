// 2차원 배열을 입력받아 모든 수의 합을 리턴
// string number X

function sumOfArraysInArray(arr) {
    const list = arr.reduce(function(acc, cur){
      return acc.concat(cur)
    })
    
    const filter = list.filter(function(el){
      if(typeof(el) === 'number'){
        return el;
      }
    })
  
    return filter.reduce(function(acc, cur){
      return acc + cur;
    }, 0)
  }
  