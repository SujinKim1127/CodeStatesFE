describe('Object에 대해서 학습합니다.', function () {
  it('Object의 기본을 확인합니다.', function () {
    const emptyObj = {};
    expect(typeof emptyObj === 'object').to.equal(true);
    expect(emptyObj.length).to.equal(undefined);

    const megalomaniac = {
      mastermind: 'Joker',
      henchwoman: 'Harley',
      getMembers: function () {
        return [this.mastermind, this.henchwoman];
      },
      relations: ['Anarky', 'Duela Dent', 'Lucy'],
      twins: {
        'Jared Leto': 'Suicide Squad',
        'Joaquin Phoenix': 'Joker',
        'Heath Ledger': 'The Dark Knight',
        'Jack Nicholson': 'Tim Burton Batman',
      },
    };

    expect(megalomaniac.length).to.equal(undefined);
    expect(megalomaniac.mastermind).to.equal('Joker');
    expect(megalomaniac.henchwoman).to.equal('Harley');
    expect(megalomaniac.henchWoman).to.equal(undefined);
    expect(megalomaniac.getMembers()).to.deep.equal(['Joker', 'Harley']);
    expect(megalomaniac.relations[2]).to.equal('Lucy');
    expect(megalomaniac.twins['Heath Ledger']).to.deep.equal('The Dark Knight');
  });

  it('Object의 속성(property)를 다루는 방법을 확인합니다.', function () {
    const megalomaniac = { mastermind: 'Agent Smith', henchman: 'Agent Smith' };

    expect('mastermind' in megalomaniac).to.equal(true);

    megalomaniac.mastermind = 'Neo';
    expect(megalomaniac['mastermind']).to.equal('Neo');

    expect('secretary' in megalomaniac).to.equal(false);

    megalomaniac.secretary = 'Agent Smith';
    expect('secretary' in megalomaniac).to.equal(true);

    delete megalomaniac.henchman;
    expect('henchman' in megalomaniac).to.equal(false);
  });

  it("'this'는 method를 호출하는 시점에 결정됩니다.", function () {
    const currentYear = new Date().getFullYear();
    const megalomaniac = {
      mastermind: 'James Wood',
      henchman: 'Adam West',
      birthYear: 1970,
      calculateAge: function (currentYear) {
        return currentYear - this.birthYear;
      },
      changeBirthYear: function (newYear) {
        this.birthYear = newYear;
      },
    };

    expect(currentYear).to.equal(2022);
    expect(megalomaniac.calculateAge(currentYear)).to.equal(52);

    megalomaniac.birthYear = 2000;
    expect(megalomaniac.calculateAge(currentYear)).to.equal(22);

    megalomaniac.changeBirthYear(2010);
    expect(megalomaniac.calculateAge(currentYear)).to.equal(12);

  });

  it('객체의 method를 정의하는 방법을 확인합니다.', function () {
    const megalomaniac = {
      mastermind: 'Brain',
      henchman: 'Pinky',
      getFusion: function () {
        return this.henchman + this.mastermind;
      },
      battleCry(numOfBrains) {
        return `They are ${this.henchman} and the` + ` ${this.mastermind}`.repeat(numOfBrains);
      },
    };

    expect(megalomaniac.getFusion()).to.deep.equal('PinkyBrain');
    expect(megalomaniac.battleCry(3)).to.deep.equal('They are Pinky and the Brain Brain Brain');
  });

  it('Object를 함수의 전달인자로 전달할 경우, reference가 전달됩니다.', function () {
    const obj = {
      mastermind: 'Joker',
      henchwoman: 'Harley',
      relations: ['Anarky', 'Duela Dent', 'Lucy'],
      twins: {
        'Jared Leto': 'Suicide Squad',
        'Joaquin Phoenix': 'Joker',
        'Heath Ledger': 'The Dark Knight',
        'Jack Nicholson': 'Tim Burton Batman',
      },
    };

    function passedByReference(refObj) {
      refObj.henchwoman = 'Adam West';
    }
    passedByReference(obj);
    expect(obj.henchwoman).to.equal('Adam West');

    const assignedObj = obj;
    assignedObj['relations'] = [1, 2, 3];
    expect(obj['relations']).to.deep.equal([1,2,3]);

    const copiedObj = Object.assign({}, obj);
    copiedObj.mastermind = 'James Wood';
    expect(obj.mastermind).to.equal('Joker');

    obj.henchwoman = 'Harley';
    expect(copiedObj.henchwoman).to.equal('Adam West');

    delete obj.twins['Jared Leto'];
    expect('Jared Leto' in copiedObj.twins).to.equal(false);

  });
});
