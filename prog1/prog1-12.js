// NOTE: 수박수박수박수박수박수?
// https://programmers.co.kr/learn/courses/30/lessons/12922
// "수박수박수박수...."와 같은 패턴의 문자열을 리턴

// n의 길이가 1 = 수
// 2 = 수박

function solution(n) {
  return "수박".repeat(n / 2) + "수".repeat(n % 2);
}

const n1 = 3;
const n2 = 4;
const n3 = 7;

console.log(solution(n1));
console.log(solution(n2));
console.log(solution(n3));
