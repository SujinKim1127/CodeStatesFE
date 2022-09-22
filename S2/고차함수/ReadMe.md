# 고차함수
-> 오답노트 <a href="https://velog.io/@su_jin1127/JS-%EA%B3%A0%EC%B0%A8%ED%95%A8%EC%88%98" target="_blank"><img src="https://img.shields.io/badge/Velog-20c997?style=flat-square&logo=Vimeo&logoColor=white"/></a>


## 일급 객체

대표적인 일급 객체는 함수.

함수

- **변수에 할당(assignment)** 할 수 있다
    
    ```jsx
    const square = function (num) {
      return num * num;
    };
    
    // 변수 square에는 함수가 할당되어 있으므로 (일급 객체),
    // 함수 호출 연산자 '()'를 사용할 수 있습니다.
    output = square(7);
    console.log(output); // --> 49
    ```
    
- 다른 **함수의 전달인자(argument)**로 전달될 수 있다
- 다른 함수의 **결과로서 리턴**될 수 있다.

## 고차 함수

- **함수를 전달인자(argument)**로 받는 함수
- **함수를 리턴**하는 함수

## 콜백 함수

: 다른 함수(caller)의 전달인자(argument)로 전달되는 함수

콜백 함수를 전달받은 고참 함수(caller)는 함수 내부에서 이 콜백 함수를 호출(invoke) 할 수 있고, 조건에 따라 콜백 함수의 실행 여부를 결정할 수 있다.

### 커링 함수

: 함수를 리던하는 함수

→ 고차 함수 ⊃ 커링함수

### 1. 다른 함수를 인자로 받는 경우

```jsx
function double(num) {
  return num * 2;
}

// 고차 함수 doubleNum() : 다른 함수를 인자로 받음
function doubleNum(func, num) {
  return func(num);
}
 // 함수 doubleNum의 첫 번째 인자 func에 함수가 들어올 경우
 // 함수 func는 함수 doubleNum의 콜백 함수
 // 함수 double은 함수 doubleNum의 콜백 함수

let output = doubleNum(double, 4);
console.log(output); // -> 8
```

### 2. 함수를 리턴하는 경우

```jsx
// 고차함수 adder() : 다른 함수를 리턴하기 때문
function adder(added) {
  return function (num) {
    return num + added;
  };
}
 // adder는 인자 한 개를 입력받아서 함수(익명 함수)를 리턴
 // 리턴되는 익명 함수는 인자 한 개를 받아서 added와 더한 값을 리턴
 

// adder(5)는 함수이므로 함수 호출 연산자 '()'를 사용 가능
let output = adder(5)(3); // -> 8
console.log(output); // -> 8

// adder가 리턴하는 함수를 변수에 저장 가능
// -> javascript에서 함수는 일급 객체이기 때문
const add3 = adder(3);
output = add3(2);
console.log(output); // -> 5
```

### 3. 함수를 인자로 받고, 함수를 리턴하는 경우

```jsx
function double(num) {
  return num * 2;
}

// 고차함수 doubleAdder()
function doubleAdder(added, func) {
  const doubled = func(added);
  return function (num) {
    return num + doubled;
  };
}
// doubleAdder의 인자 func는 함수 doubleAdder의 콜백 함수
// 함수 double은 함수 doubleAdder의 콜백으로 전달

// doubleAdder(5, double)는 함수이므로 함수 호출 기호 '()'를 사용 가능
doubleAdder(5, double)(3); // -> 13

// doubleAdder가 리턴하는 함수를 변수에 저장 가능
const addTwice3 = doubleAdder(3, double);
addTwice3(2); // --> 8
```


---

## 내장 고차 함수

### filter 메서드

: 모든 배열의 요소 중에서 특정 조건을 만족하는 요소를 걸러내는 메서드

- 걸러내는 기준이 되는 특정 조건은 filter 메서드의 전달인자로 전달됨
- 전달 조건은 함수의 형태
- 걸내기 위한 조건을 명시한 함수를 전달인자로 받기 때문에 고차 함수

```jsx
let arr = [1, 2, 3];

arr.filter = function (arr, func) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // filter에 전달인자로 전달된 콜백 함수는 arr의 각 요소를 전달받아 호출
    // 콜백 함수가 true를 리턴하는 경우에만 새로운 배열에 추가
    if (func(arr[i]) === true) {
      newArr.push(this[i]);
    }
  }
  // 콜백 함수의 결과가 true인 요소들만 저장된 배열을 리턴
  return newArr;
};
```

- filter 메서드는 배열의 요소를 콜백 함수에 다시 전달
- 콜백 함수는 전달받은 배열의 요소를 받아 함수를 실행
- 콜백 함수 내부의 조건에 따라 true or false 리턴

```jsx
const isEven = function (num) {
  return num % 2 === 0;
};

let arr = [1, 2, 3, 4];
let output = arr.filter(isEven);
console.log(output); // ->> [2, 4]

---------------------------------------------------------------------------------

const isLteFive = function (str) {
  return str.length <= 5;
};

arr = ['hello', 'code', 'states', 'happy', 'hacking'];
let output = arr.filter(isLteFive);
console.log(output); // ->> ['hello', 'code', 'happy']
```

- 활용 예시
    - 배열의 각 요소가
    - 특정 함수를 따르면, true 일때
    - 따로 분류한다. (filter)
    
    
    ---
    
    ### Map
    
    활용시
    
    - 배열의 각 요소가
    - 특정 함수에 의해
    - 다른 요소로 지정(map) 된다.



---

### Reduce

활용시

- 배열의 각 요소를
- 특정 방법에 따라
- 원하는 하나의 형태로
- 응축 (reduction)

`arr.reduce(callback, initalValue)`

```jsx
arr.reduce( (acc, cur) => {
	return acc + cur
}, 10)
```

- initalValue (생략가능)
    - 최초 callback함수 실행 시 accumulator 인수에 제공되는 값
    - 초기값을 제공하지 않을경우 배열의 첫 번째 요소를 사용하고
    - 빈 배열에서 초기값이 없을 경우 에러가 발생합니다.


---

### 추상화

: 복잡한 어떤것을 압축해서 핵심만 추출한 상태로 만드는 것

- 추상화 = 생산성(productivity)의 향상
- 함수 = 사고 + 논리

→ 고차 함수는 추상화의 수준을 사고의 추상화 수준으로 끌어올린다

- 갑 수준의 추상화: 단순히 값(value)을 전달받아 처리하는 수준
- 사고의 추상화: 함수(사고의 묶음)을 전달받아 처리하는 수준
- 고차 함수 = 함수를 전달받거나 함수를 리턴한다 = 사고(함수)에 대한 복잡한 로직은 감추어져 있다 = 사고 수준에서의 추상화

