**객체**: 키와 값 쌍으로 이루어진 자료 구조

```jsx
let user = {
	firstName: 'Steve',
	lastName: 'Lee',
	email: 'steve@codestates.com',
	city: 'Seoul'
};

user.firstName;  => Steve
user['city'];   => Seoul
user[`lastName`]; => Lee
```

<br>

`in` 연산자를 사용해 해당하는 키가 있는지 확인할 수 있다

```jsx
'firstName' in user;      // true
'Number' in user;         // false
```

<br>

`delete` 키워드는 속성을 삭제할 때 사용

```jsx
delete user['city'];
```

→ user 객체의 `city` 속성이 삭제됨

<br>

`for ~ in` 객체의 모든 key에 접근하고 출력할 수 있음

`for ~ of` : string과 array, 유사 배열 등에서 사용이 가능한 반목문

- `for (let ele of arr)` = `for (let i = 0; i < arr.length; i++)` 은 같다
```jsx
for(var [key, value] of Object.entries(obj))
```
