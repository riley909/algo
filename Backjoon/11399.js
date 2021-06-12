// NOTE: ATM
// https://www.acmicpc.net/problem/11399
// 5명이 있고  [3, 1, 4, 3, 2] 는 걸리는 시간
// 앞사람이 끝나기 전까지 뒷사람은 돈 인출 불가
//    p[1] = p[1]만큼 걸림
//    p[2] = p[1] + p[2]
//    p[3] = p[1] + p[2] + p[3]
//    p[4] = p[1] + p[2] + p[3] + p[4]
//    p[5] = p[1] + p[2] + p[3] + p[4] + p[5]
// 인출 예상 시간 = 자기자신의 시간 + 앞사람들이 걸린시간

// 각 사람이 돈을 인출하는데 필요한 시간의 합의 최소값 구하기
// 각자 기다리는 시간이 적으려면 걸리는 시간이 적은사람순으로 정렬
// 사람마다 누적합을 구해 걸리는 시간 구함
// 전체 합 구하기

// function solution(n, p) {
//   const answer = [];
//   p.sort();
//   let acc = 0;
//   console.log(p);
//   for (let i = 0; i < p.length; i++) {
//     acc += p[i];
//     answer.push(acc);
//   }
//   console.log(answer);
//   return answer.reduce((acc, cur) => acc + cur);
// }

// const n = 5;
// const p = [3, 1, 4, 3, 2];
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
  const p = input[1].split(' ').map((el) => Number(el));
  const answer = [];
  p.sort((a, b) => a - b);
  let acc = 0;
  for (let i = 0; i < p.length; i++) {
    acc += p[i];
    answer.push(acc);
  }
  const result = answer.reduce((acc, cur) => acc + cur);
  console.log(result);
  process.exit();
});

// NOTE: Reference
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function solution(people, N) {
//     people.sort((a, b) => a - b);
//     let sum = 0;
//     for (let i = 0; i < N; i++) {
//         sum += (people[i] * (N - i));
//     }
//     return sum;
// }

// const input = [];
// rl.on('line', function (line) {
//   input.push(line);
// }).on('close', function () {
//   // 입력 파싱
//     let N = input.shift().split(' ').map((x) => Number(x))[0];
//     const people = input.shift().split(' ').map((x) => Number(x));
//     const answer = solution(people, N);
//     console.log(answer)
//     process.exit();
//   }
// );
