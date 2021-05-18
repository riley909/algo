// NOTE: 모의고사
// https://programmers.co.kr/learn/courses/30/lessons/42840
// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.
// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
const ans = [1, 3, 2, 4, 2, 3, 4];
function solution(answers) {
  var answer = [];
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === p1[i % 5]) score[0]++;
    if (answers[i] === p2[i % 8]) score[1]++;
    if (answers[i] === p3[i % 10]) score[2]++;
  }
  console.log(score);

  // 셋 중 최대값
  const max = Math.max(...score);
  let idx = 0;
  for (let i = 0; i < 3; i++) {
    // 1번, 2번, 3번중에 최대값과 일치하는 값이 있으면 answer배열에 넣음
    // 최대값이 1개면 1개만 일치하기때문에 답이 1개가 됨
    // 2개 이상일 경우 수포자 1번부터 검사하기 때문에 자동 오름차순 정렬
    if (max === score[i]) {
      answer[idx] = i + 1;
      idx++;
    }
  }

  return answer;
}

// NOTE: Reference
function solutionRef(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // filter()로 다시 배열을 리턴하게 만든 뒤 그 배열의 length를 구해서 정답이 몇개인지 알아낸다
  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  // 반복문 사용하지 않고 수포자1부터 순차적 조건문
  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}

console.log(solution(ans));
console.log(solutionRef(ans));
