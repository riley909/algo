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

// 재귀가 반복문보다 성능 좋지 않음
// 시간초과가 난 것으로 보아 재귀보다 빠른 방법 필요함

// 자바스크립트 엔진이 가능한 재귀호출의 깊이는 보통 10000
// 깊이를 초과해서 런타임에러가 난 것으로 추측
// 재귀는 사용할 수 없다는 뜻

function solution(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = (fib[i - 1] + fib[i - 2]) % 1234567;
  }
  return fib[n];
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
