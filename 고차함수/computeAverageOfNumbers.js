// 배열의 모든 요소의 평균 리턴

function computeAverageOfNumbers(arr) {
    if (arr.length === 0) return 0;
    return arr.reduce(function(acc, val){
        return acc + val
    }) / arr.length
  }
  