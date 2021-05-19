// NOTE: 같은 숫자는 싫어
// https://programmers.co.kr/learn/courses/30/lessons/12906
// 배열 arr 원소 = 0 - 9까지의 숫자
// 연속된 숫자의 중복만 제거한다
// 순서를 바꾸지 않는다

// index + 1 이 같은 숫자면 제거

function solution(arr) {
  var answer = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== answer[answer.length - 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

function solutionRef(arr) {
  return arr.filter((val, index) => val !== arr[index + 1]);
}

const arr1 = [1, 1, 3, 3, 0, 1, 1];
const arr2 = [4, 4, 4, 3, 3];

console.log(solutionRef(arr1));
console.log(solutionRef(arr2));
