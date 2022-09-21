// 연이율을 입력받아 원금이 2배 이상이 될때까지 걸리는 시간 리턴

function computeWhenDouble(interestRate) {
    let year = 0;
    let money = 1;
    let percent = interestRate * 0.01;    // 퍼센트로 전환
    while(money < 2){
      year++;
      money *= (percent + 1)
    }
    return year;
  }
  