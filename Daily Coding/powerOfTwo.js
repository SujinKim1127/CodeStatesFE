// 2의 거듭제곱인지 여부 리턴.

function powerOfTwo(num) {
    // 1 일때
    if(num === 1) return true;
  
    // 2의 배수가 아닐때
    if(num % 2) return false;
  
    // 2를 num보다 작을때까지 곱해주고
    var pow = 2;
    while(pow < num){
      pow *= 2;
    }
    // 그때 num과 숫자가 같으면 거듭제곱
    return pow === num
  }
  