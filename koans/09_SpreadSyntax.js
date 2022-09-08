describe('Spread syntax에 대해 학습합니다.', function () {
  it('전개 문법(spread syntax)을 학습합니다.', function () {
    const spread = [1, 2, 3];
    const arr = [0, spread, 4];
    expect(arr).to.deep.equal([0, [1, 2, 3], 4]);
  });

  it('빈 배열에 전개 문법을 사용할 경우, 아무것도 전달되지 않습니다.', function () {
    const spread = [];
    const arr = [0, spread, 1];
    expect(arr).to.deep.equal([0,[], 1]);
  });

  it('여러 개의 배열을 이어붙일 수 있습니다.', function () {
    const arr1 = [0, 1, 2];
    const arr2 = [3, 4, 5];
    const concatenated = [arr1, arr2];
    expect(concatenated).to.deep.equal([[0, 1, 2], [3, 4, 5]]);
  });

  it('여러 개의 객체를 병합할 수 있습니다.', function () {
    const fullPre = {
      cohort: 7,
      duration: 4,
      mentor: 'hongsik',
    };

    const me = {
      time: '0156',
      status: 'sleepy',
      todos: ['coplit', 'koans'],
    };

    const merged = { ...fullPre, ...me };

    expect(merged).to.deep.equal({
      cohort: 7,
      duration: 4,
      mentor: 'hongsik',
      time: '0156',
      status: 'sleepy',
      todos: ['coplit', 'koans'],
    });
  });

  it('Rest Parameter는 함수의 전달인자를 배열로 다룰 수 있게 합니다.', function () {
    function returnFirstArg(firstArg) {
      return firstArg;
    }
    expect(returnFirstArg('first', 'second', 'third')).to.equal('first');

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }
    expect(returnSecondArg('only give first arg')).to.equal(undefined);

    function getAllParamsByRestParameter(...args) {
      return args;
    }

    function getAllParamsByArgumentsObj() {
      return arguments;
    }

    const restParams = getAllParamsByRestParameter('first', 'second', 'third');
    const argumentsObj = getAllParamsByArgumentsObj('first', 'second', 'third');

    expect(restParams).to.deep.equal(['first', 'second', 'third']);
    expect(Object.keys(argumentsObj)).to.deep.equal(['0','1','2']);
    expect(Object.values(argumentsObj)).to.deep.equal(['first', 'second', 'third']);

    expect(restParams === argumentsObj).to.deep.equal(false);
    expect(typeof restParams).to.deep.equal('object');
    expect(typeof argumentsObj).to.deep.equal('object');
    expect(Array.isArray(restParams)).to.deep.equal(true);
    expect(Array.isArray(argumentsObj)).to.deep.equal(false);

    const argsArr = Array.from(argumentsObj);
    expect(Array.isArray(argsArr)).to.deep.equal(true);
    expect(argsArr).to.deep.equal(['first', 'second', 'third']);
    expect(argsArr === restParams).to.deep.equal(false);
  });

  it('Rest Parameter는 전달인자의 수가 정해져 있지 않은 경우에도 유용하게 사용할 수 있습니다.', function () {
    function sum(...nums) {
      let sum = 0;
      for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
      }
      return sum;
    }
    expect(sum(1, 2, 3)).to.equal(6);
    expect(sum(1, 2, 3, 4)).to.equal(10);
  });

  it('Rest Parameter는 전달인자의 일부에만 적용할 수도 있습니다.', function () {
    function getAllParams(required1, required2, ...args) {
      return [required1, required2, args];
    }
    expect(getAllParams(123)).to.deep.equal([123, undefined, []]);

    function makePizza(dough, name, ...toppings) {
      const order = `You ordered ${name} pizza with ${dough} dough and ${toppings.length} extra toppings!`;
      return order;
    }
    expect(makePizza('original')).to.equal('You ordered undefined pizza with original dough and 0 extra toppings!');
    expect(makePizza('thin', 'pepperoni')).to.equal('You ordered pepperoni pizza with thin dough and 0 extra toppings!');
    expect(makePizza('napoli', 'meat', 'extra cheese', 'onion', 'bacon')).to.equal('You ordered meat pizza with napoli dough and 3 extra toppings!');
  });
});
