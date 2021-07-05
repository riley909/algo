// NOTE: 예산
// https://programmers.co.kr/learn/courses/30/lessons/12982
// 각 부서가 신청한 금액만큼을 정확히 지원해 줘야 함
// 부서별로 신청한 금액이 들어있는 배열 d
// 예산 budget
// 최대 몇 개의 부서에 물품을 지원할 수 있는지 return

function solution(d, budget) {
  let answer = 0;
  let tempBudget = 0;

  while (tempBudget < budget) {
    if (tempBudget + Math.min(...d) > budget) return answer;
    else {
      tempBudget += Math.min(...d);
      d.splice(d.indexOf(Math.min(...d)), 1);
      console.log(tempBudget);
      answer++;
    }
  }
  return answer;
}

const d1 = [1, 3, 2, 5, 4];
const budget1 = 9;
const d2 = [2, 2, 3, 3];
const budget2 = 10;

console.log(solution(d1, budget1));
console.log(solution(d2, budget2));
