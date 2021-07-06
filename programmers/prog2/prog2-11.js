// NOTE: 가장 큰 수
// https://programmers.co.kr/learn/courses/30/lessons/42746
// 0 또는 양의 정수 배열 numbers
// 순서를 재배치하여 만들 수 있는 가장 큰 수 문자열로 리턴
// 수가 너무 커질 수 있으므로 문자열로 바꾼다
// numbers의 원소는 0 - 1000

// NOTE: 풀이1
// 1. 각 숫자의 첫번째 수를 알아내기
//    문자열 배열로 바꿈
//    strArr = ['9', '5', '3', '30', '34']
//    head = strArr[i][0]
// 2. head 크기를 오름차순으로 정렬
// 3. head 숫자가 같은 원소들끼리 모음
//    => ['9'], ['5'], ['3', '30', '34']
//    => ['908', '90', '9'], ['898', '89', '8'], ['101', '10', '1']
// 4. 숫자 같은것끼리 큰 수 만들기
//    ['908', '90', '9']
//    경우의 수 = [908909, 908990, 909089, 909908, 990890, 990908]
// 5. 각 경우의 수 중 최대값을 다 더하기

// NOTE: 풀이1 실패
// function solution(numbers) {
//   var answer = '';
//   let strArr = numbers.map((el) => String(el));
//   let newArr = [[strArr[0]]];
//   let cases = [];

//   strArr.sort((a, b) => b[0] - a[0]);
//   console.log(strArr);

//   let first = strArr[0][0];
//   let cnt = 0;
//   for (let i = 1; i < strArr.length; i++) {
//     if (first === strArr[i][0]) {
//       newArr[cnt].push(strArr[i]);
//     } else {
//       newArr.push([]);
//       cnt++;
//       newArr[cnt].push(strArr[i]);
//     }
//     first = strArr[i][0];
//   }
//   console.log(newArr);

//   for(let i = 0; i < newArr.length; i++){
//     // ???
//   }

//   return answer;
// }

// NOTE: 풀이2
// 1. 문자열로 변환
// 2. sort() 이용하기
//    a + b와 b + a를 비교 정렬

// ERROR: 풀이2 10/11 통과, 1/11 실패
// function solution(numbers) {
//   var answer = '';
//   let strArr = numbers.map((el) => String(el));
//   strArr.sort((a, b) => {
//     if (a + b > b + a) return -1;
//     if (a + b < b + a) return 1;
//   });
//   console.log(strArr);
//   answer += strArr.join('');
//   return answer;
// }

// NOTE:  [0, 0, 0, 0, 0] 추가
// 모든 수가 0일때
// 00000 이 아니라 0을 리턴해야함
// 만든 숫자의 첫자리가 0이라면 어차피 0임
// => 00000, 0 리턴
// => 0235, 00462, 이런 숫자는 없으므로 0임
function solution(numbers) {
  var answer = '';
  let strArr = numbers.map((el) => String(el));
  strArr.sort((a, b) => {
    if (a + b > b + a) return -1;
    if (a + b < b + a) return 1;
  });
  console.log(strArr);
  answer += strArr.join('');

  if (answer[0] === '0') return '0';
  return answer;
}

const nums1 = [6, 10, 2];
const nums2 = [3, 30, 34, 5, 9];
const nums3 = [90, 908, 89, 898, 10, 101, 1, 8, 9];
const nums4 = [0, 0, 0, 0, 0];

console.log(solution(nums1));
console.log(solution(nums2));
console.log(solution(nums3));
console.log(solution(nums4));
