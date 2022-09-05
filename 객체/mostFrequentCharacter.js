function mostFrequentCharacter(str) {
    var arr = str.split('');
    var obj = {};
  
    // key 생성하면서 0으로 모든 value 값 다 초기화
    for(let i = 0; i < arr.length; i++){
      obj[arr[i]] = 0;  
    }
    delete obj[' '];
  
    var max = 0;
    var key;
  
    // 해당 글자(key)에 몇 개있는지 count
    for(let i = 0; i < arr.length; i++){
      if(obj[arr[i]] !== ' '){
        obj[arr[i]]++;
      }
      // 같이 count하면서 최대값 바꾸기
      // (가장 먼저 해당 횟수에 도달한 문자 리턴하기 위해서)
      if(obj[arr[i]] > max){
        max = obj[arr[i]];
        key = arr[i];
      }
    }
    
    if(key === undefined){
      return '';
    }
    else{
      return key;
    }
  }