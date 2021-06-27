// NOTE: 삼진법 뒤집기
// https://programmers.co.kr/learn/courses/30/lessons/68935
// n을 3진법 상에서 앞뒤로 뒤집은 후, 다시 10진법으로 리턴

// 3진법
// 0 1 2 10 11 12 20 21 22 100 ...
// 10진수를 다른 진수로 변환하기 위해서는 toString()
//    어떤 수를.toString(몇진수로 변환하고 싶은지)
// 다른 진수를 10진수로 변환하기 위해서는 parseInt()
//    문자열을 특정 진수의 정수로 변환한다.
//    parseInt('변환시키고자하는 문자열', 해당 수의 진수)

function solution(n) {
  const trit = n.toString(3).split("").reverse().join("");
  return parseInt(trit, 3);
}

const n1 = 45;
const n2 = 125;

console.log(solution(n1));
console.log(solution(n2));
