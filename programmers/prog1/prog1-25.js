// NOTE: 약수의 개수와 덧셈
// https://programmers.co.kr/learn/courses/30/lessons/77884
// 정수 left부터 right까지 모든 수들 중 약수의 개수가 짝수인 수는 더하고 홀수인 수는 뺀 수를 리턴

// left = 13, right = 17
// 수 = 13, 14, 15, 16, 17
// 각 숫자들의 약수의 개수 구함
//  - 약수의 개수가 짝수인 수는 더한다
//  - 약수의 개수가 홀수인 수는 뺀다
// 13 = [1, 13], 2개 => 짝
// 14 = [1, 2, 7, 14], 4개 => 짝
// 15 = [1, 3, 5, 15], 4개 => 짝
// 16 = [1, 2, 4, 8, 16], 5개 => 홀
// 17 = [1, 17], 2개 => 짝
//  => 13 + 14 + 15 - 16 + 17 = 43

function solution(left, right) {
  const numArr = [];
  const divisors = [];

  // left, ..., right 숫자 배열 만들기
  for (let i = left; i <= right; i++) {
    numArr.push(i);
  }

  for (let i = 0; i < numArr.length; i++) {
    // 약수에 무조건 포함되는 1을 미리 카운트
    let cnt = 1;
    for (let j = 2; j <= numArr[i]; j++) {
      // numArr[i]를 2부터 numArr[i]까지의 숫자로 나누기
      // 나누어 떨어지면 약수이므로 카운트
      if (numArr[i] % j === 0) {
        cnt++;
        console.log(cnt);
      }
    }
    // 약수 배열에 넣기
    divisors.push(cnt);
  }
  console.log(numArr);
  console.log(divisors);

  // 약수의 개수 짝수면 숫자 * 1
  // 약수의 개수가 홀수면 숫자 * (-1) => 부호 달아주기
  for (let i = 0; i < numArr.length; i++) {
    if (divisors[i] % 2 === 0) numArr[i] *= 1;
    else numArr[i] *= -1;
  }
  console.log(numArr);
  // 배열 누적합 계산
  const answer = numArr.reduce((acc, cur) => acc + cur);
  return answer;
}

// NOTE: Reference
// 제곱근이 정수면, 약수의 갯수가 홀수
// Math.sqrt(13) = 3.60555...
// Math.sqrt(14) = 3.74165...
// Math.sqrt(15) = 3.87298...
// Math.sqrt(16) = 4
// Math.sqrt(17) = 4.12310...
function solutionRef(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

const left1 = 13;
const right1 = 17;

const left2 = 24;
const right2 = 27;

console.log(solution(left1, right1));
console.log(solution(left2, right2));
