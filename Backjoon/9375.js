// NOTE: 패션왕 신해빈
// https://www.acmicpc.net/problem/9375
// 한번 입었던 옷의 조합은 다시 입지 않음
// 며칠동안 알몸이 아닌 상태로 있을 수 있는지 구하기
//  = 1개라도 옷을 입으면 됨

// 첫째 줄 = 의상 개수 (0 - 30)
// 의상 이름, 의상 종류 공백 구분
// 같은 이름의 의상 없음
// [[의상 이름, 의상 종류], ...] 로 인풋 받기

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(n, clothes) {
  let answer = 1;
  let obj = {};
  if (clothes.length === 0) return 0;
  for (let i = 0; i < clothes.length; i++) {
    if (obj[clothes[i][1]] >= 1) obj[clothes[i][1]]++;
    else obj[clothes[i][1]] = 1;
  }
  for (key in obj) {
    answer *= obj[key] + 1;
  }
  return answer - 1;
}

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  // 입력
  const n = input[1];
  input = input.slice(2);
  let clothes = [];
  for (let i of input) {
    clothes.push(i.split(' ').map((el) => el));
  }

  const answer = solution(n, clothes);
  console.log(answer);
  process.exit();
});

// function solution(n, clothes){
//   let answer = 1;
//   let obj = {}
//   for(let i= 0; i < clothes.length; i++){
//     if(obj[clothes[i][1]] >= 1) obj[clothes[i][1]]++;
//     else obj[clothes[i][1]] = 1;
//   }
//   console.log(obj)
//   for(key in obj){
//     answer *= obj[key] + 1
//   }
//   console.log(answer)
//   return answer - 1;
// }

// const n1 = 3
// const clothes1 = [
//   ['hat', 'headgear'],
//   ['sunglasses', 'eyewear'],
//   ['turban', 'headgear']
// ]

// const n2 = 3
// const clothes2 = [
//   ['mask', 'face'],
//   ['sunglasses', 'face'],
//   ['makeup', 'face']
// ]
// console.log(solution(n1, clothes1))
// console.log(solution(n2, clothes2))
