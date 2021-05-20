// NOTE: 두 정수 사이의 합
// https://programmers.co.kr/learn/courses/30/lessons/12912
// 두 정수 a, b 사이에 속한 모든 정수의 합 리턴하기
// a, b가 같으면 둘중 아무거나 리턴
// a, b의 대소관계 정해져있지 않음

// a가 b보다 작을 경우
// b가 a보다 작을 경우
// 1+2+..+(n-1)+n
// ((1+n)*n)/2

function solution(a, b) {
  let answer = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer = answer + i;
    }
  } else if (a === b) return a;
  else {
    for (let i = b; i <= a; i++) {
      answer = answer + i;
    }
  }
  return answer;
}

// 가우스
function solutionRef(a, b) {
  var result = 0;
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

const a1 = 3;
const b1 = 5;

const a2 = 3;
const b2 = 3;

const a3 = 5;
const b3 = 3;

console.log(solution(a1, b1));
console.log(solution(a2, b2));
console.log(solution(a3, b3));
