# 객체 지향 프로그래밍 
-> 개념 + 코드  <a href="https://velog.io/@su_jin1127/JS-%EA%B0%9D%EC%B2%B4-%EC%A7%80%ED%96%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D" target="_blank"><img src="https://img.shields.io/badge/Velog-20c997?style=flat-square&logo=Vimeo&logoColor=white"/></a>
## 메서드 호출 하기

`객체.메서드()` 와 같이 객체 내에 메서드를 호출하는 방법

```jsx
let counter1 = {
    value: 0,
    increase: function() {
        this.value++        // 메서드 호출 시, this는 counter1을 가리킴
    },
    decrease: function() {
        this.value--
    },
    getValue: function() {
        return this.value
    }
}

counter1.increase()
counter1.increase()
counter1.increase()
counter1.decrease()
counter1.getValue()  --> 2
```

### 클로저를 이용해 매번 새로운 객체 생성하기

`counter1` 은 단 하나의 객체만 만들 수 있다.

똑같은 기능을 하는 `counter`를 여러 개 만드는 방법 중 하나는 **클로저 모듈 패턴**을 사용하면 된다.

```jsx
function makeCounter() {
    let value = 0;
    return {
        increase: function() {
            value++;
        },
        decrease: function() {
            value--;
        },
        getValue: function() {
            return value;
        }
    }
}

let counter1 = makeCounter()
counter1.increase()
counter1.getValue()   -> 1

let counter2 = makeCounter()
counter2.decrease()
counter2.decrease()
counter2.getValue()   -> -2
```

---

## 클래스와 인스턴스

```jsx
function Car(color) { }

let avante = new Car('blue');
let mini = new Car('cyan');
let beetles = new Car('red');
```

**ES6**: 클래스를 만드는 새로운 문법

```jsx
class Car {
	constructor(brand, name, color) {
		// 인스턴스가 만들어질때 실행되는 코드
	}
}
```

생성자 `constructor` : 인스턴스가 만들어질때 실행되는 코드 ( return 값X)

`new` 키워드를 통해 클래스의 인스턴스를 만들어낼 수 있다

```jsx
let avante = new Car('hyundai', 'avante', 'blue');
let mini = new Car('bmw', 'mini', 'cyan');
let beetles = new Car('volkswagen', 'beetles', 'red');
```

→ 각각의 인스턴스는 `Car` 라는 클래스의 고유한 속성과 메서드를 가진다.

### 속성과 메서드

```jsx
class Car {
	constructor(brand, name, color) {
		this.brand = brand;
		this.name = name;
		this.color = color;
	}
}
```

**클래스** : 메서드의 정의

```jsx
class Car {
	constructor(brand, name, color) { }
	
	refuel() {}
	drive() {}
}
```

→ ES6에서는 생성자 함수와 함께 class 키워드 안쪽에 묶어서 정의

**인스턴스**에서의 사용

```jsx
let avante = new Car('hyundai', 'avante', 'blue');
avante.colr;  // 'blue'
avante.drive();   // avante가 운전을 시작

let mini = new Car('bmw', 'mini', 'cyan');
mini.brand;   // 'bmw'
mini.refuel(); // mini에 연료를 공급
```

| protoype | 모델의 청사진을 만들때 쓰는 원형 객체(original form) |
| --- | --- |
| constructor | 인스턴스가 초기화될때 실행하는 생성자 함수 |
| this | 함수가 실행될때, 해당 scope 마다 생성되는 고유한 실행 context (execution context) new 키워드로 인스턴스를 생성했을때에는, 해당 인스턴스가 바로 this의 값이 된다 |

→ 오직 JavaScript에서만 유효한 용어

![Untitled](ES5%EB%AC%B8%EB%B2%95.PNG)

→ ES5 문법

<br>

↓↓↓↓ ES6 문법 ↓↓↓↓

```jsx
class Car {
	constructor(brand, name, color) {
		this.brand= brand;
		this.name = name;
		this.color = color;
	}
	
	drive() {
		console.log(this.name + '가 운전을 시작합니다');
	}
}

let avante = new Car('hyundai', 'avante', 'blue');
avante.color;        // 'blue'
avante.drive();     // avante가 운전을 시작합니다.
```

**실전 예제-배열**

```jsx
let avante = new Car('hyundai', 'avante', 'blue');
avante.color;  // 'blue'
avante.drive();   // avante가 운전을 시작

let arr = ['code', 'states', 'pre'];
arr.length;           // 3
arr.push('course');   // 새 element 추가
```

→ 배열을 정의하는것은 Array의 인스턴스를 만들어내는 것과 동일

---
    

## 은닉화(`private` 키워드)의 한계

Java나 TypeScript에서는 클래스 **내부**에서만 쓰이는 속성 및 메서드를 구분시키기 위해 `private` 이라는 키워드 제공 → 지원하는 브라우저 적음

```tsx
// TypeScript 문법

class Animal {
  private name: string;

  constructor(theName: string) {
    this.name = theName;
  }
}

new Animal("Cat").name; // 사용 불가
// Property 'name' is private and only accessible within class 'Animal'.
```

JavaScript에서는 은닉화를 돕기 위해 일반적으로 **클로저 모듈 패턴** 사용

## 추상화(`interface` 키워드) 기능의 부재

속성과 메서드의 이름만 노출시켜서 사용을 단순화한다. ⇒ 인터페이스의 단순화

Java, TypeScript는 언어의 주요 기능으로 interface 구현 (javascript X)

```tsx
// TypeScript 문법

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}
```

