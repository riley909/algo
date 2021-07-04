// NOTE: 124나라의 숫자
// https://programmers.co.kr/learn/courses/30/lessons/12899
// 자연수만 존재함. 1, 2, 4만 사용함.
// 자연수 n을 124나라의 숫자로 바꾸기
// n = 500,000,000이하의 자연수

// [1, 1, 1]
// [2, 2, 2]
// [3, 10, 4]
// [4, 11, 11]
// [5, 12, 12]
// [6, 20, 14]
// [7, 21, 21]
// [8, 22, 22]
// ![9, 100, 24] => 자리수 변경됨
// [10, 101, 41]
// [11, 102, 42]
// [12, 110, 44]
// [13, 111, 111]
// [14, 112, 112]
// [15, 120, 114]

// 3진법이 124보다 먼저 자리수 올라감
// n % 3 === 1 끝자리 1
// n % 3 === 2 끝자리 2
// n % 3 === 0 끝자리 4
// 3진법 = [0, 1, 2], 124 = [4, 1, 2]

// n = 3
// 3 % 3 = 0 => num124[0] 4
// 1 % 3 = 1 => num124[1] 1
// 아래서부터 거꾸로 붙임 => 14
//! 나누어 떨어지는 경우는 진법 변환에서 앞자리 수가 바뀌는 경우
// 14가 아니라 4여야함

// function solution(n) {
//   let answer = '';
//   // 무조건 이 수만 사용
//   const num124 = [4, 1, 2];
//   let rest = 0;

//   while (n > 0) {
//     rest = n % 3;
//     n = Math.floor(n / 3);
//     if (rest === 0) n -= 1;
//     answer = num124[rest] + answer;
//   }
//   return answer;
// }

function solution(n) {
  let answer = '';
  const num124 = [4, 1, 2];
  while (n > 0) {
    answer = num124[n % 3] + answer;
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }
  return answer;
}

console.log(solution(3));
// console.log(solution(9));
// console.log(solution(10));
// console.log(solution(14));
// console.log(solution(15));
