function countAllCharacters(str) {
    var arr = str.split('');
    var obj = {};
  
    // key 생성하면서 0으로 모든 value 값 다 초기화
    for(let i = 0; i < arr.length; i++){
      obj[arr[i]] = 0;  
    }
  
    // 해당 글자(key)에 몇 개있는지 count
    for(let i = 0; i < arr.length; i++){
      obj[arr[i]]++;
    }
    return obj;
  
  }
  