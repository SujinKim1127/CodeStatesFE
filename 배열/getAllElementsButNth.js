function getAllElementsButNth(arr, n) {
    // TODO: 여기에 코드를 작성합니다.
    if(arr.length > n){
      arr.splice(n, 1);
      return arr;
    }
    else{
      return arr;
    }
  
  }
  