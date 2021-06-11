// NOTE: 덩치
// https://www.acmicpc.net/problem/7568
// x = 몸무게, y = 키, 덩치 = (x, y)
// A = (x, y), B = (p, q)
//    x > p, y > q, A가 B보다 덩치가 크다
// C = (45, 181), D = (55, 173)
//    몸무게는 D가 무겁고 키는 C가 큼. 비교불가.

// 덩치 등수 정하기
// 자신보다 덩치 큰 사람이 k명이면 내 등수는 k + 1
// 같은 등수가 여러명일수도 있다

// n = 전체 사람의 수
// p = 사람의 몸무게와 키 x, y
// 2 =< n =< 50 이기 때문에 n^2 해도 상관없음
// 입력이 높으면 정렬을 하고 o(n)의 방법을 찾아야함

// 순위 변수를 둔다.
//    rank = 1
// 2차원 배열 생성
// 첫번째 사람부터 시작해서 나머지 전체의 사람과 반복문으로 비교
// 키와 몸무게가 둘다 큰 사람이 있으면 랭크 + 1
// 비교가 불가하거나 작으면 더하지 않음

// function solution(n, p) {
//   const answer = [];
//   let rank = 1;
//   for (let i = 0; i < p.length; i++) {
//     let cur = p[i];
//     for (let j = 0; j < p.length; j++) {
//       if (cur[0] < p[j][0] && cur[1] < p[j][1]) rank++;
//     }
//     answer.push(rank);
//     rank = 1;
//   }
//   console.log(answer.join(' '));
// }

const n = 5;
const p = [
  [55, 185],
  [58, 183],
  [88, 186],
  [60, 175],
  [46, 155],
];

// console.log(solution(n, p));

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const n = input[0];
  input = input.slice(1);
  let arr = [];
  for (i of input) {
    arr.push(i.split(' ').map((el) => el));
  }

  const answer = [];
  let rank = 1;
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (cur[0] < arr[j][0] && cur[1] < arr[j][1]) rank++;
    }
    answer.push(rank);
    rank = 1;
  }
  console.log(answer.join(' '));

  process.exit();
});
