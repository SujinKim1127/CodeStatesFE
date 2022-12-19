describe("'const'에 대해서 학습합니다.", function () {
  it("'const'로 선언된 변수에는 재할당(reassignment)이 금지됩니다.", function () {
    const constNum = 0;
    expect(constNum).to.equal(0);

    const constString = 'I am a const';
    expect(constString).to.equal('I am a const');
  });

  it("'const'로 선언된 배열의 경우 새로운 요소를 추가하거나 삭제할 수 있습니다.", function () {
    const arr = [];
    const toBePushed = 42;
    arr.push(toBePushed);
    expect(arr[0]).to.equal(42);

  });

  it("'const'로 선언된 객체의 경우, 속성을 추가하거나 삭제할 수 있습니다.", function () {
    const obj = { x: 1 };
    expect(obj.x).to.equal(1);

    delete obj.x;
    expect(obj.x).to.equal(undefined);

    obj.occupation = 'SW Engineer';
    expect(obj['occupation']).to.equal('SW Engineer');
  });

});
