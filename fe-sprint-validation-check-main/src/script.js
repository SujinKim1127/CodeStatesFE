// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
let elInputUsername = document.querySelector('#username');

let elFailureMessage = document.querySelector('.failure-message')
let elSuccessMessage = document.querySelector('.success-message')

elInputUsername.onkeyup = function () {
    console.log(elInputUsername.value)

    if(isMoreThan4Length(elInputUsername.value)){
        // 성공 메세지 보이도록
        elSuccessMessage.classList.remove('hide')

        // fail message hide
        elFailureMessage.classList.add('hide')
    }
    else{
        // success message hide
        elSuccessMessage.classList.add('hide')

        // fail message show
        elFailureMessage.classList.remove('hide')
    }
}

function isMoreThan4Length(value) {
  return value.length >= 4
}

let Password = document.querySelector('#password');
let rePassword = document.querySelector('#password-retype');
let mismatchMessage = document.querySelector('.mismatch-message');


/* 여기서 password1.value로 값을 비교하면 안되고  */
function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  if(password1 !== password2){
    return false;
  }
  else{
    return true;
  }
}

rePassword.onkeyup = function(){
  console.log("password" + Password.value);
  console.log('check' + rePassword.value);
  /* 여기서 값을 넣어줄때 password.value로 넣어줘야한다. */
  if(isMatch(Password.value, rePassword.value)) {
    mismatchMessage.classList.add('hide');
  }
  else{
    mismatchMessage.classList.remove('hide');
  }
}
