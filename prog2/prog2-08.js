// NOTE: 피보나치 수
// https://programmers.co.kr/learn/courses/30/lessons/12945
// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수
// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수 만들기
// 피보나치수 = 0번째부터 0, 1, 1, 2, 3, 5, ...

// F(2) = F(0) + F(1) = 0 + 1 = 1
// F(3) = F(1) + F(2) = 1 + 1 = 2
// F(4) = F(2) + F(3) = 1 + 2 = 3
// F(5) = F(3) + F(4) = 2 + 3 = 5

// ERROR: 6/14 통과, 6/14 시간초과, 2/14 런타임에러
// function solution(n) {
// if (n <= 1) return n;
// return (solution(n - 1) + solution(n - 2)) % 1234567;
// }

function solution(n) {
  if (n <= 1) return n;
  const answer = (solution(n - 1) % 1234567) + (solution(n - 2) % 1234567);
  return answer % 1234567;
}

console.log(solution(0));
console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
console.log(solution(7));
console.log(solution(8));
