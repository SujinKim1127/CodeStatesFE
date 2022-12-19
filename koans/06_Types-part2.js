describe('primitive data type과 reference data type에 대해서 학습합니다.', function () {
  it('원시 자료형은 값 자체에 대한 변경이 불가능(immutable)합니다.', function () {
    let name = 'codestates';
    expect(name).to.equal('codestates');
    expect(name.toUpperCase()).to.equal('CODESTATES');
    expect(name).to.equal('codestates');

    name = name.toUpperCase();
    expect(name).to.equal('CODESTATES');

  });

  it('원시 자료형을 변수에 할당할 경우, 값 자체의 복사가 일어납니다.', function () {
    let overTwenty = true;
    let allowedToDrink = overTwenty;

    overTwenty = false;
    expect(overTwenty).to.equal(false);
    expect(allowedToDrink).to.equal(true);

    let variable = 'variable';
    let variableCopy = 'variableCopy';
    variableCopy = variable;
    variable = variableCopy;
    expect(variable).to.equal('variable');
  });

  it('원시 자료형 또는 원시 자료형의 데이터를 함수의 전달인자로 전달할 경우, 값 자체의 복사가 일어납니다.', function () {
    let currentYear = 2020;
    function afterTenYears(year) {
      year = year + 10;
    }
    afterTenYears(currentYear);
    expect(currentYear).to.equal(2020);
    function afterTenYears2(currentYear) {
      currentYear = currentYear + 10;
      return currentYear;
    }
    let after10 = afterTenYears2(currentYear);
    expect(currentYear).to.equal(2020);
    expect(after10).to.equal(2030);
  });

  it('참조 자료형의 데이터는 동적(dynamic)으로 변합니다.', function () {
    const arr = [1, 2, 3];
    expect(arr.length).to.equal(3);
    arr.push(4, 5, 6);
    expect(arr.length).to.equal(6);
    arr.pop();
    expect(arr.length).to.equal(5);

    const obj = {};
    expect(Object.keys(obj).length).to.equal(0);
    obj['name'] = 'codestates';
    obj.quality = 'best';
    obj.product = ['sw engineering', 'product manager', 'growth marketing', 'data science'];
    expect(Object.keys(obj).length).to.equal(3);
    delete obj.name;
    expect(Object.keys(obj).length).to.equal(2);
  });

  it('참조 자료형을 변수에 할당할 경우, 데이터의 주소가 저장됩니다.', function () {
    const overTwenty = ['hongsik', 'minchul', 'hoyong'];
    let allowedToDrink = overTwenty;

    overTwenty.push('san');
    expect(allowedToDrink).to.deep.equal(['hongsik', 'minchul', 'hoyong', 'san']);
    overTwenty[1] = 'chanyoung';
    expect(allowedToDrink[1]).to.deep.equal('chanyoung');

    const ages = [22, 23, 27];
    allowedToDrink = ages;
    expect(allowedToDrink === ages).to.equal(true);
    expect(allowedToDrink === [22, 23, 27]).to.equal(false);

    const nums1 = [1, 2, 3];
    const nums2 = [1, 2, 3];
    expect(nums1 === nums2).to.equal(false);

    const person = {
      son: {
        age: 9,
      },
    };

    const boy = person.son;
    boy.age = 20;
    expect(person.son.age).to.equal(20);
    expect(person.son === boy).to.equal(true);
    expect(person.son === { age: 9 }).to.equal(false);
    expect(person.son === { age: 20 }).to.equal(false);

  });
});
