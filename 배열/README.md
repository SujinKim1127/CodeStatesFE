**배열**: 순서가 있는 값

값 = 요소(element)

순서 = 인덱스, 0부터 번호를 매긴다

`let myNumber = [73, 98, 86, 61, 96];` 

값은 인덱스를 이용해 접근

- `str.split(' ');` → 공백으로 문자열을 나눈후 배열로 반환
- `unshift()` → 배열 앞에 요소 추가. 원본손상
- `shift()` → 배열 첫번째 요소 제거 후, 제거된 요소 반환. 원본 손상
- `pop()` → 배열의 마지막 요소 제거. 원본 손상
- `arr1.concat(arr2)` → arr2를 arr1에 합쳐서 새 배열 반환
- `arr.splice(1, 0, 'A');` index 1 에 A 삽입
- `arr.splice(4, 1, 'B');` index 4 를 B 1개로 대체
- `arr.slice(begin, end);` → begin부터 end까지 (end 미포함) 배열을 가져와서 새로운 배열 객체로 반환. 원본 손상X
