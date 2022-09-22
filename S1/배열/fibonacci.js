function createPhoneNumber(arr) {
    // TODO: 여기에 코드를 작성합니다.
    var number=[];
    if(arr.length===8){
      number.push('(','0','1','0',')');
      var front = arr.slice(0,4);
      number = number.concat(front);
      number.push('-');
      var back = arr.slice(4,8);
      number=number.concat(back);
      return number.join('');
    }
    else{
      number.push('(');
      var num = arr.slice(0,3);
      number = number.concat(num);
      number.push(')');
      var front = arr.slice(3,7);
      number = number.concat(front);
      number.push('-');
      var back = arr.slice(7,11);
      number=number.concat(back);
      return number.join('');
    }
  }
  