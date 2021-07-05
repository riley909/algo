// NOTE: 땅따먹기
// https://programmers.co.kr/learn/courses/30/lessons/12913
// 땅(land)은 총 N행 4열
// 모든 칸에는 점수가 쓰여 있다
// 한 칸씩만 밟을 수 있음
// 연속으로 같은 열의 칸을 밟을 수 없다
// 마지막 행까지 모두 내려왔을 때, 얻을 수 있는 점수의 최대값을 return

// NOTE: 풀이1
// 1행에서 최대값을 찾는다
// 2행에서 1행에서 밟은 인덱스를 제외하고 최대값 찾기
//! 이 방법으로 전체 합의 최대값이 나오지 않을 수 있음
//! 이전 행의 최대값을 선택하는것 보다 다음 행 같은 열의 수를 선택하는게 전체 스코어가 더 높을 수 있다

function solution(land) {
  var answer = 0;
  for (let i = 1; i < land.length; i++) {
    // 열은 4개로 정해져 있음
    land[i][0] = Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]) + land[i][0];
    land[i][1] = Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]) + land[i][1];
    land[i][2] = Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]) + land[i][2];
    land[i][3] = Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]) + land[i][3];
  }
  answer = Math.max(...land[land.length - 1]);
  console.log(answer);
  return answer;
}

function solutionRef(land) {
  return Math.max(
    ...land.reduce(
      (target, score) => {
        return [
          score[0] + Math.max(target[1], target[2], target[3]),
          score[1] + Math.max(target[0], target[2], target[3]),
          score[2] + Math.max(target[0], target[1], target[3]),
          score[3] + Math.max(target[0], target[1], target[2]),
        ];
      },
      [0, 0, 0, 0]
    )
  );
}

const land = [
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
];

console.log(solution(land));
