describe('expect에 대해서 학습합니다.', function () {
  it('테스트하는 값(expect의 전달인자)이 true인지의 여부를 검사합니다.', function () {
    expect(true).to.be.true;
  });

  it('테스트하는 값(expect의 전달인자)이 falsy 여부를 검사합니다.', function () {
    expect(false).to.be.false;
  });

  it("'테스트하는 값'을 '기대하는 값'과 비교한 결과가 참 인지 확인합니다.", function () {
    // '테스트하는 값'은 우리가 작성한 어떤 코드의 실제 실행 결과 값이므로 '실제 값'이라고 불러도 됩니다.
    let actualValue = 1 + 1;
    let expectedValue = 2; // TODO: 'FILL_ME_IN'을 변경하여 테스트 케이스를 완성합니다.
    expect(actualValue === expectedValue).to.be.true;
  });

  it('Matcher .equal 의 사용법을 학습합니다.', function () {
    let expectedValue = 2; // TODO
    expect(1 + 1).to.equal(expectedValue);
  });

  it('Matcher .equal의 사용법을 학습합니다.', function () {
    let actualValue = (1 + 1).toString();
    expect(actualValue).to.equal('2'); // TODO
  });
});
