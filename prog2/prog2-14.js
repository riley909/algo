// NOTE: 소수 찾기
// https://programmers.co.kr/learn/courses/30/lessons/42839
// 종이에 적힌 숫자로 소수를 몇 개 만들 수 있는지 리턴
// numbers = 숫자로 이루어진 문자열
// numbers = 길이 1 - 7, 0 - 9까지의 숫자로 이루어짐

// numbers = '011'
// numArr = ['0', '1', '1']
// 0이 맨 앞자리라면 그냥 지나가기
// 중복제거
// 1자리 = [0, 1]
// 2자리 = [10, 11]
// 3자리 = [101, 110]
//    => [0, 1, 10, 11, 101, 110]
// 2 제외한 홀수일 경우
//    2부터 n*n 까지 반복
//    나누어 떨어지지 않으면 소수

// n개의 숫자 중에서 r개를 뽑아 나열
// n = 배열의 길이
// r = 조합의 길이

function solution(numbers) {
  var answer = 0;
  let result = [];
  let results = [];
  const arrNum = numbers.split('');
  const checklist = Array.from({ length: arrNum.length }, () => 0);
  for (let i = 1; i <= arrNum.length; i++) {
    DFS(0, i);
  }

  console.log(arrNum);
  console.log(checklist);

  // 모든 순열의 조합을 찾는 함수
  function DFS(n, r) {
    if (n === r) {
      console.log(n, r);
      results.push(result.join(''));
    } else {
      console.log(n, r);
      console.log(checklist);

      for (let i = 0; i < arrNum.length; i++) {
        if (checklist[i] === 0) {
          result[n] = arrNum[i];
          checklist[i] = 1;
          DFS(n + 1, r);
          checklist[i] = 0;
        }
      }
    }
  }
  console.log(results);
  answer = results.length;
  return answer;
}

const numbers1 = '17';
const numbers2 = '011';

// console.log(solution(numbers1));
console.log(solution(numbers2));
