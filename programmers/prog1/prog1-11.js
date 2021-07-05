// NOTE: 문자열을 정수로 바꾸기
// https://programmers.co.kr/learn/courses/30/lessons/12925
// 문자열 s의 길이 = 1이상 5이하
// s의 맨 앞에는 +, -(부호)가 올수 있음
// s는 부호와 숫자로만 이루어져있음
// s는 0으로 시작하지 않음
// 문자열을 숫자로 변환하여 리턴

//! 문자열과 숫자의 사칙연산 결과는 숫자이다!
function solution(s) {
  // return Number(s);
  // return +s;
  return s / 1;
}

const s1 = "-1234";
const s2 = "+4582";
console.log(solution(s1));
console.log(solution(s2));
