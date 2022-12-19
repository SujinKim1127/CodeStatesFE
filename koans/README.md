JS 개념 익히면서 헷갈렸던 부분들
- JS 기초 개념 <a href="https://velog.io/@su_jin1127/JS-%EA%B8%B0%EC%B4%88-%EA%B0%9C%EB%85%90" target="_blank"><img src="https://img.shields.io/badge/Velog-20c997?style=flat-square&logo=Vimeo&logoColor=white"/></a>
- ES6 주요문법 <a href="https://velog.io/@su_jin1127/ES6-%EC%A3%BC%EC%9A%94-%EB%AC%B8%EB%B2%95" target="_blank"><img src="https://img.shields.io/badge/Velog-20c997?style=flat-square&logo=Vimeo&logoColor=white"/></a>


```jsx
let overTwenty = true;
let allowedToDrink = overTwenty;

overTwenty // false;
allowedToDrink // true
```

→ 원시 자료형을 변수에 할당할 경우, 값 자체의 복사가 일어남

```jsx
const person = {
      son: {
        age: 9,
      },
    };

const boy = person.son;
boy.age = 20;

person.son.age // 20
person.son === boy // true
person.son == { age: 9 } // false
person.son === { age: 20 } // false
```

→ 참조 자료형을 변수에 할당할 경우, 데이터의 주소가 저장된다.

`Object.assign` 을 통한 복사는 reference variable은 주소만 복사

```jsx
function getAllParams(required1, required2, ...args) {
      return [required1, required2, args];
}

	getAllParams(123)    // [123, undefined, []];
```

→ Rest Parameter는 전달인자의 일부에만 적용할 수도 있다.