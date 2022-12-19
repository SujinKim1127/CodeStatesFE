function getValueOfNthElement(arr, num) {
    if(arr.length === 0){
      return 'no name';
    }
    else{
      if(num >= arr.length){
        return arr[arr.length - 1].name ;
      }
      else{
        return arr[num].name;
      }
    }
  // arr[num].name 으로 하면 값이 안나올줄 알았는데
  // 값이 잘 나왔다.
  }
  