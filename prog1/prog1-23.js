// NOTE: 내적
// https://programmers.co.kr/learn/courses/30/lessons/70128
// 내적 = https://en.wikipedia.org/wiki/Dot_product

// 1차원 정수배열 a, b
// a, b 내적 = a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]
// n은 a, b의 길이

// a = [1, 2, 3, 4], b = [-3, -1, 0, 2]
// 내적 = 1*(-3) + 2*(-1) + 3*0 + 4*2

// cur = a[idx]
// a[idx] * b[idx]가 먼저 계산된 후 누적값 acc에 쌓이게 된다
function solution(a, b) {
  return a.reduce((acc, cur, idx) => acc + cur * b[idx], 0);
}

const a1 = [1, 2, 3, 4];
const b1 = [-3, -1, 0, 2];

const a2 = [-1, 0, 1];
const b2 = [1, 0, -1];

console.log(solution(a1, b1));
console.log(solution(a2, b2));
