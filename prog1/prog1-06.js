// NOTE: 소수 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12977
// 주어진 숫자 중 3개를 더했을 때 소수가 되는 경우의 수 구하기
// 매개변수인 배열 nums에 들어있는 숫자는 3개이상 50개 이하
// nums의 각 원소는 1 이상 1000이하. 중복 없음.

// NOTE: 풀이
// 소수 = 1과 자기자신만을 약수로 하는 자연수(약수가 2개)
// 그 중 합이 0, 1, 짝수(2제외)가 아닌 경우의 수

function solution(nums) {
  var answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const number = nums[i] + nums[j] + nums[k];
        console.log(number);
        if (isPrimeNum(number)) {
          console.log(number);
          answer++;
        }
      }
    }
  }

  function isPrimeNum(number) {
    if (number === 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    for (let i = 3; i < number; i += 2) {
      if (number % i === 0) {
        console.log(number);
        return false;
      }
    }
    return true;
  }

  return answer;
}

const nums = [1, 2, 7, 6, 4];

console.log(solution(nums));
