// NOTE: 평균 구하기
// https://programmers.co.kr/learn/courses/30/lessons/12944
// 정수를 담고 있는 배열 arr의 평균값을 return

function solution(arr) {
  const avr = arr.reduce((acc, cur, idx, arr) => {
    return acc + cur;
  });
  return avr / arr.length;
}

// 좀더 축약
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 5];

console.log(solution(arr1));
console.log(solution(arr2));
