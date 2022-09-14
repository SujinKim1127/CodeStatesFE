# validation-check

```jsx
/* 여기서 password1.value로 값을 비교하면 안되고  */
function isMatch (password1, password2) {
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
```

`isMatch` 함수 작성시 `password1.value !== password2` 로 값을 비교하면 안되고
`isMatch(Password.value, .. )` 식으로 넣어서 
넣을때 value값을 넣어주고 `password1 !== password2` 로 값을 비교해야한다.