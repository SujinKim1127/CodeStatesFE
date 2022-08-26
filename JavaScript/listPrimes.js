// 2 이상의 자연수를 입력받아 2부터 해당 수까지의 소수들을 리턴
// 18 입력시 출력물 : 2-3-5-7-11-13-17

function listPrimes(num) {
    let word = "2";
    for(let i = 3; i <= num; i++){
      
      let result = true;
  
      for(let j = 2; j < i; j++){
        if(i % j === 0){
          result = false;
          break;
        }
      }
      if(result){
        word += '-' + i;      
      }
    }
    return word;
  }