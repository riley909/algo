// NOTE: 폰켓몬
// https://programmers.co.kr/learn/courses/30/lessons/1845
// 총 N 마리의 폰켓몬 중에서 N/2마리를 가져갈수 있음
// 같은 종류의 폰켓몬은 같은 번호를 가지고 있음
// 4마리의 폰켓몬 중 2마리를 고르는 방법은 다음과 같이 6가지

// 첫 번째(3번), 두 번째(1번) 폰켓몬을 선택
// 첫 번째(3번), 세 번째(2번) 폰켓몬을 선택
// 첫 번째(3번), 네 번째(3번) 폰켓몬을 선택
// 두 번째(1번), 세 번째(2번) 폰켓몬을 선택
// 두 번째(1번), 네 번째(3번) 폰켓몬을 선택
// 세 번째(2번), 네 번째(3번) 폰켓몬을 선택

// 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하기
// nums의 길이(N)는 1 이상 10,000 이하의 자연수이며, 항상 짝수로 주어집니다.
// 가장 많은 종류의 폰켓몬을 선택하는 방법이 여러 가지인 경우에도, 선택할 수 있는 폰켓몬 종류 개수의 최댓값 하나만 return 하면 됩니다.

function solution(nums) {
  var answer = 0;

  // 가져갈 수 있는 폰켓몬 숫자
  const limit = nums.length / 2;

  const newNums = nums.filter((el, idx) => nums.indexOf(el) === idx);
  console.log(newNums);
  if (newNums.length > limit) {
    answer = limit;
  } else {
    answer = newNums.length;
  }
  return answer;
}

// NOTE: Reference
function solutionRef(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}

const arrNum = [3, 1, 2, 3];
console.log(solution(arrNum));
