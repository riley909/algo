// NOTE: 타겟 넘버
// https://programmers.co.kr/learn/courses/30/lessons/43165
// n개의 양의 숫자를 더하거나 빼서 타겟 넘버 만들기
// EXAMPLE)
// 사용할 숫자 [1, 1, 1, 1, 1] 타겟 넘버 3
//    -1+1+1+1+1 = 3
//    +1-1+1+1+1 = 3
//    +1+1-1+1+1 = 3
//    +1+1+1-1+1 = 3
//    +1+1+1+1-1 = 3
//  => 방법의 수 5

// 숫자 개수 2 - 20, 숫자 1 - 50 자연수
// 타겟넘버 1 - 1000 자연수

//dfs(recursive)로 차례대로 숫자를 더하거나 빼며 경우의 수 찾기
// recursive(cnt, sum)
//    1. 숫자를 순서대로 더하거나 뺀다. 인자 cnt.
//    2. 순서대로 계산했을 때 target이 나오는지 확인할 인자 sum
//    3. 재귀함수 종료조건 = cnt가 numbers의 길이와 같아짐
//                      = 배열의 모든 수를 다 연산했다는 의미
//    4. 재귀함수 종료 시 연산값이 taget과 일치하면 answer + 1
//    5. 재귀함수 종료조건이 아닐 때 숫자를 더하거나 빼고 다음 숫자를 인자로 하는 재귀함수를 호출

function solution(numbers, target) {
  let answer = 0;
  // 0에서부터 시작
  recursive(0, 0);
  return answer;
  // 재귀함수
  function recursive (cnt, sum) {
    // numbers 배열의 모든 수를 연산했을 때
    if (cnt === numbers.length) {
      // 합이 target과 같으면 answer증가
      if (sum === target) answer++;
      return;
    }
    // + 연산인 경우
    recursive(cnt + 1, sum + numbers[cnt]);
    // - 연산인 경우
    recursive(cnt + 1, sum - numbers[cnt]);
  }
}

const numbers = [1, 1, 1, 1, 1];
const target = 3;

console.log(solution(numbers, target));


function solutionRef(numbers, target) {
  const aux = (idx, sum) => {
    if (idx === numbers.length && sum === target) return 1;
    else if (idx === numbers.length && sum !== target) return 0;

    const case1 = aux(idx + 1, sum + numbers[idx]);
    const case2 = aux(idx + 1, sum - numbers[idx]);
    return case1 + case2;
  };
  return aux(0, 0);
}