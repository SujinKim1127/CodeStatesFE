describe('scope 대해서 학습합니다.', function () {
  it('함수 선언식(declaration)과 함수 표현식(expression)의 차이를 확인합니다.', function () {
    let funcExpressed = 'to be a function';

    expect(typeof funcDeclared).to.equal('function');
    expect(typeof funcExpressed).to.equal('string');

    function funcDeclared() {
      return 'this is a function declaration';
    }

    funcExpressed = function () {
      return 'this is a function expression';
    };


    const funcContainer = { func: funcExpressed };
    expect(funcContainer.func()).to.equal('this is a function expression');

    funcContainer.func = funcDeclared;
    expect(funcContainer.func()).to.equal('this is a function declaration');
  });

  it('lexical scope에 대해서 확인합니다.', function () {
    let message = 'Outer';

    function getMessage() {
      return message;
    }

    function shadowGlobal() {
      let message = 'Inner';
      return message;
    }

    function shadowGlobal2(message) {
      return message;
    }

    function shadowParameter(message) {
      message = 'Do not use parameters like this!';
      return message;
    }

    expect(getMessage()).to.equal('Outer');
    expect(shadowGlobal()).to.equal('Inner');
    expect(shadowGlobal2('Parameter')).to.equal('Parameter');
    expect(shadowParameter('Parameter')).to.equal('Do not use parameters like this!');
    expect(message).to.equal('Outer');
  });

  it('default parameter에 대해 확인합니다.', function () {
    function defaultParameter(num = 5) {
      return num;
    }

    expect(defaultParameter()).to.equal(5);
    expect(defaultParameter(10)).to.equal(10);

    function pushNum(num, arr = []) {
      arr.push(num);
      return arr;
    }

    expect(pushNum(10)).to.deep.equal([10]);
    expect(pushNum(20)).to.deep.equal([20]);
    expect(pushNum(4, [1, 2, 3])).to.deep.equal([1,2,3,4]);
  });

  it('클로저(closure)에 대해 확인합니다.', function () {
    function increaseBy(increaseByAmount) {
      return function (numberToIncrease) {
        return numberToIncrease + increaseByAmount;
      };
    }

    const increaseBy3 = increaseBy(3);
    const increaseBy5 = increaseBy(5);

    expect(increaseBy3(10)).to.equal(13);
    expect(increaseBy5(10)).to.equal(15);
    expect(increaseBy(8)(6) + increaseBy(5)(9)).to.equal(28);

  });

  it('lexical scope와 closure에 대해 다시 확인합니다.', function () {
    let age = 27;
    let name = 'jin';
    let height = 179;

    function outerFn() {
      let age = 24;
      name = 'jimin';
      let height = 178;

      function innerFn() {
        age = 26;
        let name = 'suga';
        return height;
      }

      innerFn();

      expect(age).to.equal(26);
      expect(name).to.equal('jimin');

      return innerFn;
    }

    const innerFn = outerFn();

    expect(age).to.equal(27);
    expect(name).to.equal('jimin');
    expect(innerFn()).to.equal(178);
  });
});
