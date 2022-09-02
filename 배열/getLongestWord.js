function getLongestWord(str) {
    // TODO: 여기에 코드를 작성합니다.
    var arr = str.split(' ');
    var max=arr[0];
    for(let i = 1; i < arr.length; i++){
      if(max.length < arr[i].length){
        max = arr[i];
      }
    }
    return max;
  }
  