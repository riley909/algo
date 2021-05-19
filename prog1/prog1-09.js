// NOTE: 두 개 뽑아서 더하기
// https://programmers.co.kr/learn/courses/30/lessons/68644
// 정수 배열 numbers에서 중복되지 않는 인덱스 2개 선택
// 2개 숫자를 더해 만들 수 있는 모든 수를 배열에 오름차순으로 담아 리턴

function solution(numbers) {
  var answer = [];
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }
  answer = [...new Set(result)];
  return answer.sort((a, b) => a - b);
}

const numbers1 = [2, 1, 3, 4, 1];
const numbers2 = [5, 0, 2, 7];
console.log(solution(numbers1));
console.log(solution(numbers2));
