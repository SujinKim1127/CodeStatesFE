class Counter {
    constructor() {
        this.value = 0;
    }
    increase() {
        this.value++;
    }
    decrease() {
        this.value--;
    }
    getValue() {
        return this.value;
    }
}

let counter1 = new Counter()  // 생성자 호출
counter1.increase()
counter1.getValue()
